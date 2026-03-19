import {ChartBarSquareIcon} from "@heroicons/react/24/solid/index.js";
import {TotalChaptersRead, TotalMangaTracked} from "./services.jsx";
import { Link, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

export const General = () => {
    return (
        <div className="max-w-8xl bg-[#050B14] min-h-screen text-white font-sans selection:bg-pink-500">
            <div className="flex flex-row m-5 pl-5 text-white gap-y-11">
                <p className="text-4xl font-extrabold ml-20 tracking-tight">Settings</p>
            </div>
            <div className="flex inline-flex ml-16 mr-16">
                <div>
                    <div className="flex flex-col pb-90 pr-10 pl-10 ml-13 pt-5 gap-y-3 border-2 rounded-l-2xl border-gray-800 border-r-0 bg-[#0F1523]">
                        <Link to="/general">
                            <h2 className="text-sm font-bold uppercase tracking-widest bg-blue-600/10 border border-blue-500/50 text-blue-400 p-2 rounded-xl transition-all">General</h2>
                        </Link>
                        <Link to="/profile">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2 rounded-xl border border-transparent hover:text-white transition-all">Profile</h2>
                        </Link>
                        <Link to="/notifications">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2 rounded-xl border border-transparent hover:text-white transition-all">Notifications</h2>
                        </Link>
                        <Link to="/security">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2 rounded-xl border border-transparent hover:text-white transition-all">Security</h2>
                        </Link>
                    </div>
                </div>
                <div className="border-2 border-gray-800 bg-[#0F1523]/50 rounded-r-2xl pr-85 mr-auto overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="flex flex-row ml-5 pt-6 pb-3 pr-50 pl-5">
                        <h1 className="text-xs font-bold text-blue-500 uppercase tracking-widest">SITE PREFERENCES</h1>
                    </div>
                    <div className="flex flex-col ml-5 pr-75 pl-5 pt-4 pb-5 border border-gray-800 bg-[#050B14] rounded-xl">
                        <div className="text-xs font-bold text-gray-500 uppercase mb-2">Display Theme</div>
                        <div className="text-sm font-bold text-blue-400">Dark Mode</div>
                        <div className="text-sm font-bold text-gray-600 hover:text-gray-400 cursor-pointer">Light Mode</div>
                    </div>
                    <div className="flex flex-col mt-4 ml-5 pr-75 p-4 border border-gray-800 bg-[#050B14] rounded-xl">
                        <label htmlFor="titles_languages" className="text-xs font-bold text-gray-500 uppercase mb-2">Titles Language</label>
                        <select id="titles_languages" name="titles_languages" className="font-bold bg-[#0F1523] border border-gray-700 text-white p-2 rounded-md outline-none focus:border-blue-500">
                            <option value="romaji">Romaji</option>
                            <option value="english">English</option>
                            <option value="native">Native</option>
                        </select>
                    </div>
                    <div className="flex flex-row ml-5 pt-8 pb-3 pr-50 pl-5">
                        <h1 className="text-xs font-bold text-pink-500 uppercase tracking-widest">CONTENT & SAFETY</h1>
                    </div>
                    <div className="flex flex-col ml-5 pr-75 p-4 border border-gray-800 bg-[#050B14] rounded-xl">
                        <label htmlFor="adult_content_show" className="text-xs font-bold text-gray-500 uppercase mb-2">Adult Content (18+)</label>
                        <select id="adult_content_show" name="adult_content_show" className="font-bold bg-[#0F1523] border border-gray-700 text-white p-2 rounded-md outline-none focus:border-blue-500">
                            <option value="show_all">Show All</option>
                            <option value="blur_nsfw_covers">Blur NSFW Covers</option>
                            <option value="hide_all">Hide All</option>
                        </select>
                    </div>
                    <div className="flex flex-row ml-5 pt-8 pb-3 pr-50 pl-5">
                        <h1 className="text-xs font-bold text-blue-500 uppercase tracking-widest">TRACKING LOGIC</h1>
                    </div>
                    <div className="flex flex-row ml-5 pr-75 p-4 border border-gray-800 bg-[#050B14] rounded-xl mb-10">
                        <label htmlFor="tracking_logic" className="flex flex-row items-center">
                            <h1 className="text-sm font-bold">Auto-Update Status</h1>
                            <div className="ml-3">
                                <input type="checkbox" id="tracking_logic" name="tracking_logic" className="w-5 h-5 accent-blue-600 rounded-full cursor-pointer"/>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Notifications = () => {
    return (
        <div className="max-w-8xl bg-[#050B14] min-h-screen text-white font-sans">
            <div className="flex flex-row m-5 pl-5 text-white gap-y-11">
                <p className="text-4xl font-extrabold ml-20 tracking-tight">Settings</p>
            </div>
            <div className="flex inline-flex ml-16 mr-16">
                <div>
                    <div className="flex flex-col pb-90 pr-10 pl-10 ml-13 pt-5 gap-y-3 border-2 rounded-l-2xl border-gray-800 border-r-0 bg-[#0F1523]">
                        <Link to="/general"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">General</h2></Link>
                        <Link to="/profile"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Profile</h2></Link>
                        <Link to="/notifications"><h2 className="text-sm font-bold uppercase tracking-widest bg-blue-600/10 border border-blue-500/50 text-blue-400 p-2 rounded-xl">Notifications</h2></Link>
                        <Link to="/security"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Security</h2></Link>
                    </div>
                </div>
                <div className="border-2 border-gray-800 bg-[#0F1523]/50 rounded-r-2xl pr-85 mr-auto p-5">
                    <div className="flex flex-row ml-5 pt-3 pb-3 pr-50 pl-5">
                        <h1 className="text-xs font-bold text-blue-500 uppercase tracking-widest">LIBRARY UPDATES</h1>
                    </div>
                    <div className="flex flex-row ml-5 pr-75 p-4 border border-gray-800 bg-[#050B14] rounded-xl">
                        <label htmlFor="tracking_logic" className="flex flex-row items-center">
                            <h1 className="font-bold text-sm">New Chapter Release</h1>
                            <div className="ml-3">
                                <input type="checkbox" id="tracking_logic" className="w-5 h-5 accent-blue-600 cursor-pointer"/>
                            </div>
                        </label>
                    </div>
                    <p className="ml-6 pb-4 pt-2 text-xs font-bold text-gray-500 uppercase">Notify me when a new chapter is released.</p>

                    <div className="flex flex-col mt-2 ml-5 pr-75 p-4 border border-gray-800 bg-[#050B14] rounded-xl">
                        <label htmlFor="freq" className="text-xs font-bold text-gray-500 uppercase mb-2">Notification Frequency</label>
                        <select id="freq" className="bg-[#0F1523] border border-gray-700 text-white p-2 rounded-md outline-none">
                            <option>Instant</option>
                            <option>Daily Digest</option>
                            <option>Weekly</option>
                        </select>
                    </div>

                    <div className="flex flex-row ml-5 pt-8 pb-3 pr-50 pl-5">
                        <h1 className="text-xs font-bold text-pink-500 uppercase tracking-widest">ACTIVITY & GOALS</h1>
                    </div>
                    <div className="flex flex-row ml-5 pr-75 p-4 border border-gray-800 bg-[#050B14] rounded-xl">
                        <label className="flex flex-row items-center">
                            <h1 className="font-bold text-sm">Pace Predictor Alerts</h1>
                            <div className="ml-3">
                                <input type="checkbox" className="w-5 h-5 accent-pink-500 cursor-pointer"/>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Profile = () => {
    return (
        <div className="max-w-8xl bg-[#050B14] min-h-screen text-white font-sans">
            <div className="flex flex-row m-5 pl-5 text-white gap-y-11">
                <p className="text-4xl font-extrabold ml-20 tracking-tight">Settings</p>
            </div>
            <div className="flex inline-flex ml-16 mr-16">
                <div>
                    <div className="flex flex-col pb-90 pr-10 pl-10 ml-13 pt-5 gap-y-3 border-2 rounded-l-2xl border-gray-800 border-r-0 bg-[#0F1523]">
                        <Link to="/general"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">General</h2></Link>
                        <Link to="/profile"><h2 className="text-sm font-bold uppercase tracking-widest bg-blue-600/10 border border-blue-500/50 text-blue-400 p-2 rounded-xl">Profile</h2></Link>
                        <Link to="/notifications"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Notifications</h2></Link>
                        <Link to="/security"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Security</h2></Link>
                    </div>
                </div>
                <div className="border-2 border-gray-800 bg-[#0F1523]/50 rounded-r-2xl pr-100 mr-auto p-10">
                    <div className="flex flex-row gap-x-5 mb-8">
                        <div className="rounded-2xl h-28 w-28 bg-gradient-to-br from-blue-600/20 to-pink-500/20 border border-gray-700 flex items-center justify-center">
                            <span className="text-gray-600 text-[10px] font-bold uppercase">Avatar</span>
                        </div>
                        <div className="flex items-center">
                            <button className="text-xs font-bold uppercase tracking-widest bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-lg shadow-blue-900/20 transition-all">Change Photo</button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 pr-10">
                        <div className="flex flex-col">
                            <h1 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Username</h1>
                            <input type="text" className="bg-[#050B14] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all"/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Address</h1>
                            <input type="text" className="bg-[#050B14] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all"/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Bio</h1>
                            <textarea className="bg-[#050B14] border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none h-24 resize-none"/>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                            <div className="flex flex-col">
                                <h1 className="text-sm font-bold">Public Profile</h1>
                                <p className="text-xs font-bold text-gray-500 uppercase">Allow others to see details</p>
                            </div>
                            <div className="flex gap-x-2">
                                <input type="checkbox" className="w-5 h-5 accent-blue-600"/>
                            </div>
                        </div>
                        <div className="flex flex-row pt-6 gap-x-3">
                            <button className="text-xs font-bold uppercase tracking-widest bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg shadow-blue-900/20">Save Changes</button>
                            <button className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white px-6 py-3">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ChangePasswordUI = () => {
    function handleClick() { /* handled in parent */ }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <form className="bg-[#0F1523] border border-gray-800 rounded-2xl shadow-2xl w-[450px] overflow-hidden relative">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="p-8 relative z-10">
                    <h3 className="text-xl font-extrabold text-white mb-6 tracking-tight">Change Password</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Current Password</label>
                            <input type="password" placeholder="••••••••" className="w-full bg-[#050B14] border border-gray-700 rounded-lg p-3 mt-1 text-white focus:border-blue-500 outline-none"/>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">New Password</label>
                            <input type="password" placeholder="••••••••" className="w-full bg-[#050B14] border border-gray-700 rounded-lg p-3 mt-1 text-white focus:border-blue-500 outline-none"/>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-3">
                        <button className="flex-1 text-xs font-bold uppercase tracking-widest bg-blue-600 py-3 rounded-lg shadow-lg shadow-blue-900/20">Update</button>
                        <button onClick={handleClick} className="flex-1 text-xs font-bold uppercase tracking-widest border border-gray-700 py-3 rounded-lg hover:bg-white/5 transition-all">Close</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function Button() {
    const [Render, doRender] = useState(false);
    if (Render === true) { return ( <div onClick={() => doRender(false)}><ChangePasswordUI/></div> ) }
    return (
        <button onClick={() => doRender(true)} className="text-xs font-bold uppercase tracking-widest bg-blue-600/10 border border-blue-500/50 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600/20 transition-all">
            Change Password
        </button>
    );
}

export const Security = () => {
    return (
        <div className="max-w-8xl bg-[#050B14] min-h-screen text-white font-sans">
            <div className="flex flex-row m-5 pl-5 text-white gap-y-11">
                <p className="text-4xl font-extrabold ml-20 tracking-tight">Settings</p>
            </div>
            <div className="flex inline-flex ml-16 mr-16">
                <div>
                    <div className="flex flex-col pb-90 pr-10 pl-10 ml-13 pt-5 gap-y-3 border-2 rounded-l-2xl border-gray-800 border-r-0 bg-[#0F1523]">
                        <Link to="/general"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">General</h2></Link>
                        <Link to="/profile"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Profile</h2></Link>
                        <Link to="/notifications"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Notifications</h2></Link>
                        <Link to="/security"><h2 className="text-sm font-bold uppercase tracking-widest bg-blue-600/10 border border-blue-500/50 text-blue-400 p-2 rounded-xl">Security</h2></Link>
                    </div>
                </div>
                <div className="border-2 border-gray-800 bg-[#0F1523]/50 rounded-r-2xl pr-85 mr-auto p-10">
                    <div className="flex flex-row mb-4">
                        <h1 className="text-xs font-bold text-blue-500 uppercase tracking-widest">AUTHENTICATION</h1>
                    </div>
                    <div className="p-4 border border-gray-800 bg-[#050B14] rounded-xl mb-10">
                        <Button/>
                        <p className="mt-4 text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Secure your account with a strong password.</p>
                    </div>

                    <div className="flex flex-row pt-4 mb-4">
                        <h1 className="text-xs font-bold text-pink-500 uppercase tracking-widest">ACCOUNT STATUS</h1>
                    </div>
                    <div className="p-4 border border-red-900/20 bg-red-950/10 rounded-xl">
                        <button className="text-xs font-bold uppercase text-red-500 hover:underline">Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Settings = (
    <div className="max-w-8xl bg-[#050B14] min-h-screen text-white font-sans">
        <div className="flex flex-row m-5 pl-5 text-white gap-y-11">
            <p className="text-4xl font-extrabold ml-20 tracking-tight">Settings</p>
        </div>
        <div className="flex flex-row ml-16 mr-16">
            <div className="flex flex-col pb-90 pr-10 pl-10 ml-13 pt-5 gap-y-3 border-2 rounded-2xl border-gray-800 bg-[#0F1523]">
                <Link to="/general"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">General</h2></Link>
                <Link to="/profile"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Profile</h2></Link>
                <Link to="/notifications"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Notifications</h2></Link>
                <Link to="/security"><h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 p-2">Security</h2></Link>
            </div>
        </div>
    </div>
);

export default Settings;