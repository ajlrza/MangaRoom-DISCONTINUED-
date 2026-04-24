import { Link } from "react-router-dom";
import cover1 from "./mangacover1.png";
import placeholder from "./placeholdercover.png";

export function MangaSelectionScreen() {

    const MangaImages = [
        cover1,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
        placeholder,
    ];

    return (
        <div className="max-h-screen bg-[#0a0a0a] text-slate-50 p-8 font-sans">

            {/* Added custom webkit scrollbar classes right here on the container */}
            <div className="w-full h-[615px] border-2 border-slate-800 rounded-xl bg-[#111113] overflow-y-auto p-8
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:bg-[#111113]
                            [&::-webkit-scrollbar-thumb]:bg-slate-700
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            dark:[&::-webkit-scrollbar-track]:bg-[#111113]
                            dark:[&::-webkit-scrollbar-thumb]:bg-slate-700">

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 pt-32 pl-10">

                    {MangaImages.map((url, i) => (
                        <div key={i} className="group relative -translate-x-10 -translate-y-30 hover:-translate-y-32 transition-transform duration-300">

                            {i === 0 && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                            )}

                            <div className="relative bg-[#0F1523] border border-gray-800 rounded-2xl overflow-hidden">
                                <img
                                    alt={`Manga Cover ${i}`}
                                    src={url}
                                    className="w-[183.2px] border-2 rounded-lg border-white bg-gray-950 object-cover"
                                />
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}