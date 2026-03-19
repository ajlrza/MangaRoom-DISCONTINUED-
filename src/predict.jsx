import { useState, useEffect } from "react";


export function PredictPage() {
    const [isChoosingManga, setIsChoosingManga] = useState(false);

    function handleChooseMangaClick() {
        setIsChoosingManga(true);
    }


    return (
        <div id="home-content" className="">
            <div className="flex flex-col m-5 pl-5">
                <div id="HomeTextHeader">
                    <h2 className="ml-20 font-medium text-4xl">Predict</h2>
                </div>
            </div>
            <div className>
                <div id="main-area" className="grid grid-cols-3 mt-10 mr-30 ml-30 rounded-2xl ">
                    <div id="control-panel-area" className="flex flex-col border-2 bg-slate-900 border-slate-900 mr-10 rounded-2xl">
                        <h3 className="text-2xl font-medium p-1 h-fit ml-auto mr-auto mt-3">Control Panel</h3>
                        <div className="text-xl font-bold ml-auto mr-auto mt-3">
                            <button onClick={() => {handleChooseMangaClick()}}>
                                <p>Manga</p>
                            </button>
                        </div>
                        <div className="flex flex-col text-xl font-bold ml-5 mt-3">
                            <p>TOGGLES</p>
                            <div>
                                <label htmlFor="toggle-predict-mode">Heat Map</label>
                                <input type="checkbox" id="toggle-live-mode" className="ml-29.5 mt-3"/>
                            </div>
                            <div>
                                <label htmlFor="toggle-predict-mode">Mouse Path</label>
                                <input type="checkbox" id="toggle-predict-mode" className="ml-25 mt-3"/>
                            </div>
                        </div>
                        <div className="flex flex-col text-xl font-bold ml-5 mt-3">
                            <p>SLIDERS</p>
                            <div>
                                <label htmlFor="toggle-predict-mode">Opacity</label>
                                <div className="slidecontainer">
                                    <input type="range" min="0" max="1440" className="slider" id="timeRange"/>
                                    <p>Time: <span id="timeValue"></span></p>
                                </div>
                            </div>
                        <label htmlFor="toggle-predict-mode">Set Time</label>
                            <div className="slidecontainer">
                                <input type="range" min="0" max="1440" className="slider" id="timeRange"/>
                                <p>Time: <span id="timeValue"></span></p>
                            </div>
                        </div>
                        <div className="text-xl font-bold ml-auto mr-auto mb-3 mt-3">
                            <button onClick={() => {handleChooseMangaClick()}}>
                                <p>START SESSION</p>
                            </button>
                        </div>
                    </div>
                    <div id="manga-container">
                        <img alt="predict-panel" className="rounded-md w-[480px] h-full" src="https://storage.googleapis.com/kagglesdsdata/datasets/7313459/11985503/manga_dataset/train/bw/00000.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20260318%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260318T060636Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=b38da96d655c9c388046b350c8af041128d1b7f0614216b965fef421f1c4c5820eef826849d1825e64379b22e1f6a73f8d166cbddfe700ed2397c51132a7e2b88cf0de22d66d410a7b17fd1fc70a479d7c30724d838213e888e954bac2d3d127f64d75067ea8c4dd4309e03c79634923e3fcbd03d7844d8fd3d6867f34acdb73229a8aa2ecb0ba91e091cc4c33de88f34fe97f8c0034c8c3902bbcc18f39463135140db0b6a714f810a76eeb9fe2a52e35ece3a26e2d80afc755a72c899f4500daf96c6b4c722f98f63560141ddfb0756b5c524ea69eff6cac364bcd1606ffac953610a5a8c1f0df327536b7332110975f3453c6c5ef29db09c68ac554cdceea"/>
                    </div>
                    <div id="live-output-panel-area" className="flex flex-col border-2 ml-10 border-slate-900 bg-slate-900 rounded-2xl">
                        <h3 className="text-2xl font-medium p-1 h-fit ml-auto mr-auto mt-3">Live Data</h3>
                        <div id="terminal-output-area" className="border-2 p-25 ml-3 mr-3 mt-3">

                        </div>
                        <h3 className="text-xl font-medium ml-5 mt-5">CHART</h3>
                        <div className="border-2 p-15 ml-3 mr-3 mt-3 mb-5">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}