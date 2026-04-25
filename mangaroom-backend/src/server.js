import express from 'express';
import cors from 'cors';
import {startDatabase} from './database.js';
import session from 'express-session';
import Kafka from 'node-rdkafka';


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(session({
    secret: '$2a$19$cU2SNCSGggpFsDj1Zbg4J.RYW3gnA3lf0k23EFGuGndC7rVkzSco',
    resave: false,
    saveUninitialized: true,
    cookie:  {
        httpOnly: true,
        secure: false,
        maxAge: 60000,
        domain: 'localhost'
        }
    }
))
// API Endpoints
// Uses the get method on the app object, which receives the request from the client
// The main deciding factor for which API Endpoints would be called is the request URL which is the one with "/"
// After the endpoints receive them, an imported startDatabase function is initialized to retrieve data

app.get("/totalMangaTracked", (req, res) => {
    const totalMangaTrackedResponse = startDatabase('manga_count').then(data => {res.send(data)});
})

app.get("/totalChaptersRead", (req, res) => {
    const totalChaptersRead = startDatabase('manga_chapters_count').then(data => {res.send(data)})
})

app.get("/userAveragePace", (req, res) => {
    const userAveragePace = startDatabase('user_average_pace').then(data => {res.send(data)})
})

app.get("/paceMangaTitle", (req, res) => {
    const paceMangaTitle = startDatabase('pace_manga_title').then(data => {res.send(data)})
})

app.get("/userPredictedFinish", (req, res) => {
    const userPredictedFinish = startDatabase('user_predicted_finish').then(data => {res.send(data)})
})

app.get("/userTargetPace", (req, res) => {
    const userTargetPace = startDatabase('user_target_pace').then(data => {res.send(data)})
})

app.get("/userPredictedAverage", (req, res) => {
    const userPredictedAverage = startDatabase('user_predicted_average').then(data => {res.send(data)})
})

app.get("/userMangaStatus", (req, res) => {
    const userMangaStatus = startDatabase('user_manga_status').then(data => {res.send(data)})
})


app.post("/startSession", async(req, res) => {

    const getEmail = req.body.Email;
    const getPass = req.body.Password;
    let sessionConfirmation;

    async function initChecking() {
        const checkAccount = await startDatabase('user_information', getEmail, getPass)

        const accountExists =
            {
                "Entered Email": getEmail,
                "Entered Password": getPass,
                "Checked Email": checkAccount['email'],
                "Checked Password": checkAccount['password']
            }

        if (accountExists["Checked Email"] === accountExists["Entered Email"] && accountExists["Checked Password"] === accountExists["Entered Password"]) {
            sessionConfirmation = true
        }
        else {
            sessionConfirmation = false
        }

        if (sessionConfirmation === true) {

            res.status(200).json(
                {"access": true, "message": req.sessionID }
            )

        }
        else {
            res.status(401).json(
                {"access": false, "message": "Something went wrong"}
            )
        }
    }

    await initChecking()

})

app.post("/signUpAccount", async(req, res) => {
    const getUsername = req.body.Username;
    const getEmail = req.body.Email;
    const getPassword = req.body.Password;

    const createAccount = await startDatabase('sign_up', getUsername, getEmail, getPassword);
})

let data_store = {}
let batched_data = []
let batch_count = 0;

app.post("/sendDataToKafka", async(req, res) => {
    let session;
    let userId;

    if (req.body.active === true) {
        session = true;
    }
    else if (req.body.active === false) {
        session = false;
    }

    if (req.body.user != undefined){
        userId = req.body.user;
    }

    if (session === true) {
        if (Object.keys(req.body).length >= 2) {
            if (Object.keys(data_store).length != 100) {
                /* req.body.data itself has the userId and telemetry data, userSessionId is randomized each time */
                data_store[req.body.userSessionId] = req.body.data
            }
            if (Object.keys(data_store).length == 100) {
                batched_data.push(data_store)
                data_store = {}
                batch_count += 1
            }
        }
        if (batch_count === 5) {
            const producer = new Kafka.Producer.createWriteStream({
            })
            res.body(200, "Kafka messages sent: " + batch_count);
        }
    }
})


app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})



