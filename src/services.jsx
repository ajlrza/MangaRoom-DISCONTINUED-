import { useState, useEffect } from "react";

export function TotalMangaTracked() {
    const [mangaData, setMangaData] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3000/totalMangaTracked")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setMangaData(data[0]["manga_read_count"]))
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    return (
        <div>
            <pre>{JSON.stringify(mangaData, null, 0)}</pre>
        </div>
    );
}

export function TotalChaptersRead() {
    const [chaptersRead, setChaptersRead] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3000/totalChaptersRead")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setChaptersRead(data[0]["manga_chapters_read_count"]))
            .catch((err) => console.error("Fetch error:", err));
    }, []);


    console.log(chaptersRead);

    return (
        <div>
            <pre>{JSON.stringify(chaptersRead, null, 0)}</pre>
        </div>
    )
}

export function UserAveragePace() {
    const [userAveragePace, setUserAveragePace] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/userAveragePace')
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setUserAveragePace(data[0]['average_pace']))
            .catch((err) => {
                console.error("Fetch error:", err);
            })
    }, [])

    return (
        <div className="inline-flex items-center p-1 text-blue-400">
            <pre>{JSON.stringify(userAveragePace, null, 0)}</pre>
        </div>
    )
}

export function PaceMangaTitle() {
    const [paceMangaTitle, setPaceMangaTitle] = useState("Title");

    useEffect(() => {
        fetch('http://localhost:3000/paceMangaTitle')
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setPaceMangaTitle(data[0]['manga_title']))
            .catch((err) => {
                console.error("Fetch error:", err);
            })
    }, [])

    return (
        <div>
            <pre>{JSON.stringify(paceMangaTitle, null, 0)}</pre>
        </div>
    )
}

export function UserPredictedFinish () {
    const [userPredictedFinish, setUserPredictedFinish] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/userPredictedFinish')
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setUserPredictedFinish(data[0]['predicted_finish_day']))
            .catch((err) => {
                console.error("Fetch error:", err);
            })
    }, [])

    return (
        <div className="inline-flex items-center">
            <pre>{JSON.stringify(userPredictedFinish, null, 0)} days</pre>
        </div>
    )
}

export function TargetChapterStatus() {
    const [targetChapterPace, setTargetChapterPace] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/userTargetPace')
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setTargetChapterPace(data[0]['pace_target']))
            .catch((err) => {
                console.error("Fetch error:", err);
            })
    }, [])

    return (
        <div className="inline-flex items-center">
            <pre>{JSON.stringify(targetChapterPace, null, 0)}</pre>
        </div>
    )
}

export function PredictedPaceAverage() {
    const [predictedPaceAverage, setPredictedPaceAverage] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/userPredictedAverage')
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => setPredictedPaceAverage(data[0]['pace_predicted_average']))
            .catch((err) => {
                console.error("Fetch error:", err);
            })
    }, [])

    return (
        <div className="inline-flex items-center text-blue-400">
            <pre>{JSON.stringify(predictedPaceAverage, null, 0)}</pre>
        </div>
    )
}

