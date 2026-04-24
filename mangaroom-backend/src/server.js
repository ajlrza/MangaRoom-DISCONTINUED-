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

app.post("/sendDataToKafka", async(req, res) => {
    const data_store = []
    const batched_data = []
    if (req.body.length >= 1) {
        while (req.body.timer !== "Stopped") {
            let batch_count = 0
            data_store.append(req.body)
            if (data_store.length >= 100) {
                batched_data.append(data_store)
                data_store.clear()
                batch_count += 1
            }
            console.log("Total batches of 100 messages sent:" + batch_count)
        }
        if (req.body.timer === "Stopped")  {
            const producer = new Kafka.Producer.createWriteStream({
            })
        }
    }



})


app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
})



