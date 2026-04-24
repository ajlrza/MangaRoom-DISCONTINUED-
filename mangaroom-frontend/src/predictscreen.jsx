import {useState, useRef, useEffect} from "react";
import { Button } from "./components/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./components/components/ui/card";
import { Switch } from "./components/components/ui/switch";
import { Slider } from "./components/components/ui/slider";
import { Label } from "./components/components/ui/label";
import { Separator } from "./components/components/ui/separator";
import { Link } from "react-router-dom";

export function PredictScreen() {
    const [isSessionActive, setIsSessionActive] = useState(false);
    const [statsData, setStatsData] = useState({ time: 0, velocity: 0, pistonHeight: 0 });

    // UI States
    const [opacity, setOpacity] = useState([70]);
    const [duration, setDuration] = useState([10]);

    // Refs to prevent "Explosions" and Stale Data
    const mouseEventRef = useRef(null);
    const prevTimeRef = useRef(0);


    function listenMousePointer(event) {
        if (event.clientX > 0 && event.clientY > 0 && mouseEventRef.current) {
            // Update CSS variables for the custom cursor
            mouseEventRef.current.style.setProperty('--mouse-x', `${event.clientX}px`);
            mouseEventRef.current.style.setProperty('--mouse-y', `${event.clientY}px`);

            if (event.movementX !== 0 || event.movementY !== 0) {
                const currentTimestamp = event.timeStamp;
                const deltaTime = currentTimestamp - prevTimeRef.current;

                if (deltaTime > 0) {
                    const distance = Math.sqrt((event.movementX ** 2) + (event.movementY ** 2));
                    const rawSpeed = distance / deltaTime;

                    const normalizedSpeed = Math.min((rawSpeed / 5) * 100, 100);

                    setStatsData({
                        time: currentTimestamp,
                        velocity: (rawSpeed * 100).toFixed(1), // Scale it up for a "readable" px/s feel
                        pistonHeight: normalizedSpeed
                    });
                }
                prevTimeRef.current = currentTimestamp;

            }
        }
    }

    function SendData(data) {
        fetch("http://localhost:3000/sendDataToKafka", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })

    }

    SendData(statsData);

    if (isSessionActive) {
        return (
            <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col font-sans overflow-hidden">
                {/* TOP NAVBAR */}
                <div className="h-14 bg-[#111113] border-b border-slate-800/80 flex items-center justify-between px-6 shrink-0 shadow-md z-50">
                    <div className="flex items-center space-x-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse"></div>
                        <span className="text-sm font-bold tracking-widest text-slate-200 uppercase">Reading</span>
                    </div>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => setIsSessionActive(false)}
                        className="bg-red-900/40 text-red-400 border border-red-800 hover:bg-red-900 transition-colors"
                    >
                        Stop Session
                    </Button>
                </div>

                <div className="flex-1 flex overflow-hidden">
                    {/* LEFT/CENTER: Manga Reader Area */}
                    <div
                        className="flex-1 relative overflow-y-auto flex justify-center bg-[#1a1a1a] p-8"
                    >
                        {/* Custom Glowing Cursor */}

                        <div ref={mouseEventRef}
                             onMouseMove={listenMousePointer} className="relative h-fit max-w-[800px] shadow-2xl ring-1 ring-white/10 bg-black cursor-none">
                            <div
                                style={{ left: 'var(--mouse-x)', top: 'var(--mouse-y)' }}
                                className="fixed -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-emerald-400 bg-emerald-500/20 rounded-full pointer-events-none z-[150]"
                            ></div>
                            <img
                                alt="manga-page"
                                className="w-full h-auto block"
                                src="src/mangapanel.png"
                                draggable="false"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Telemetry Stats Panel */}
                    <div className="w-[320px] bg-[#0a0a0a] border-l border-slate-800/80 shrink-0 flex flex-col z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
                        <div className="p-4 border-b border-slate-800/80 bg-[#111113]">
                            <h3 className="text-xs text-slate-400 tracking-widest uppercase font-bold">Live Telemetry</h3>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-6">
                            {/* PISTON VELOCITY INDICATOR (Replaces Recharts) */}
                            <div className="space-y-4">
                                <Label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Instant Velocity Profile</Label>

                                <div className="bg-[#111113] border border-slate-800/80 rounded-lg p-8 h-56 flex items-end justify-center relative overflow-hidden">
                                    {/* The Piston Track */}
                                    <div className="relative w-16 h-full bg-slate-900/50 rounded-md border border-slate-800 overflow-hidden shadow-inner">

                                        {/* The "Liquid" Speed Bar */}
                                        <div
                                            className="absolute bottom-0 w-full bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-100 ease-out"
                                            style={{ height: `${statsData.pistonHeight}%` }}
                                        >
                                            {/* Glow Cap */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-white/40 shadow-[0_0_10px_#fff]"></div>
                                        </div>

                                        {/* Scale Markings */}
                                        <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none opacity-20">
                                            {[...Array(10)].map((_, i) => (
                                                <div key={i} className="w-full h-[1px] bg-slate-400"></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Backdrop label */}
                                    <span className="absolute top-4 right-4 text-[9px] font-mono text-slate-700">MAX_CAP: 100%</span>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-[#111113] border border-slate-800/80 rounded-lg p-3 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-slate-700"></div>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 ml-2">Time Mark</span>
                                        <div className="flex items-baseline gap-1 ml-2">
                                            <span className="text-xl font-mono text-slate-200">{(statsData.time / 1000).toFixed(1)}</span>
                                            <span className="text-xs font-mono text-slate-600">s</span>
                                        </div>
                                    </div>

                                    <div className="bg-[#111113] border border-slate-800/80 rounded-lg p-3 flex flex-col justify-center relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1 ml-2">Velocity</span>
                                        <div className="flex items-baseline gap-1 ml-2">
                                            <span className="text-xl font-mono text-blue-400">{statsData.velocity}</span>
                                            <span className="text-[9px] font-mono text-slate-600">px/ms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-slate-50 p-8 font-sans">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-white">Attention Analytics</h2>
                <p className="text-slate-400 mt-1">Behavioral telemetry and predictive gaze modeling.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[640px_1fr] gap-6 items-start">
                <Card className="bg-[#111113] border-slate-800/60 shadow-2xl">
                    <CardHeader className="pb-4">
                        <CardTitle className="text-sm text-slate-400 tracking-widest uppercase font-bold">Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <Label className="text-xs text-slate-500 font-bold uppercase">Target Media</Label>
                            <Link to="/selection" className="block w-full p-2 text-center rounded-md bg-black/40 border border-slate-700 hover:bg-slate-800 text-slate-300">
                                Select Manga Page
                            </Link>
                        </div>
                        <Separator className="bg-slate-800/60" />
                        <div className="space-y-4">
                            <Label className="text-xs text-slate-500 font-bold uppercase">Telemetry Overlays</Label>
                            <div className="flex items-center justify-between"><Label className="text-sm text-slate-300">Heat Map</Label><Switch /></div>
                            <div className="flex items-center justify-between"><Label className="text-sm text-slate-300">Gaze Path</Label><Switch defaultChecked /></div>
                        </div>
                        <Separator className="bg-slate-800/60" />
                        <div className="space-y-6">
                            <Label className="text-xs text-slate-500 font-bold uppercase">Engine Parameters</Label>
                            <div className="space-y-3">
                                <div className="flex justify-between"><Label className="text-sm text-slate-300">Overlay Opacity</Label><span className="text-xs font-mono text-blue-400">{opacity}%</span></div>
                                <Slider defaultValue={[70]} max={100} step={1} onValueChange={setOpacity} />
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between"><Label className="text-sm text-slate-300">Simulation Duration</Label><span className="text-xs font-mono text-blue-400">{duration}s</span></div>
                                <Slider defaultValue={[10]} max={60} step={1} onValueChange={setDuration} />
                            </div>
                        </div>
                        <div className="pt-4">
                            <Button
                                onClick={() => setIsSessionActive(true)}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all uppercase tracking-wide"
                            >
                                START SESSION
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="w-full h-[600px] border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center bg-[#111113]">
                    <p className="text-slate-500 font-mono">Select target media and click Start Session.</p>
                </div>
            </div>
        </div>
    );
}