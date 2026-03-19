import { useState, useEffect } from "react";

// In React, functions that fetch and return data are called "Hooks"
// and must start with "use"
export function UseMangaId() {
    const [mangaId, setMangaId] = useState(null);

    useEffect(() => {
        fetch('https://api.mangadex.org/manga/6378f4b1-f9a0-4233-b89a-95021535d100?includes%5B%5D=cover_art')
            .then((res) => res.json())
            .then((data) => setMangaId(data.data.id))
            .catch((err) => console.error(err));
    }, []); // Empty array stops the loop!

    return mangaId;
}

export function UseCoverFileName() {
    const [fileName, setFileName] = useState(null);

    useEffect(() => {
        fetch('https://api.mangadex.org/manga/6378f4b1-f9a0-4233-b89a-95021535d100?includes%5B%5D=cover_art')
            .then((res) => res.json())
            .then((data) => {
                // accessing the relationship array safely
                const cover = data.data.relationships.find(r => r.type === 'cover_art');
                if(cover) setFileName(cover.attributes.fileName);
            })
            .catch((err) => console.error(err));
    }, []);

    return fileName;
}

export function MangaDisplay() {
    // 1. Call your custom functions
    const id = UseMangaId();
    const file = UseCoverFileName();

    if (!id || !file) return <p>Loading...</p>;

    const url = `https://uploads.mangadex.org/covers/${id}/${file}`;

    return (
        <img src={url} alt="Manga Cover" className="w-[183.2px] h-[auto] border-2 rounded-lg border-whitebg-gray-950 object-cover"/>
    );
}

