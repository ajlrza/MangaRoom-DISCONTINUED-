import { Link, Routes, Route} from "react-router-dom";
import Library from "./library.jsx";
import home_elem from "./home_elem.jsx";
import {PredictScreen} from "./predictscreen.jsx";
import {General, Notifications, Profile, Security} from "./settings.jsx";
import {MagnifyingGlassIcon } from "@heroicons/react/24/solid/index.js";
import {MangaSelectionScreen} from "./mangaselection.jsx";




export function App() {
        return (
            <div className="text-white h-[100vh] bg-[#050B14]">
                <nav className="w-full border-b border-gray-800/50 bg-[#181818]/40 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

                        {/* Left: Logo */}
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-800 rounded-lg border border-gray-700">
                            </div>
                            <span className="text-xl font-bold tracking-tight">MangaRoom</span>
                        </div>

                        {/* Center: Links (Hidden on mobile) */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                            <Link to="/" className="hover:text-white transition-colors">Features</Link>
                            <Link to="/library" className="hover:text-white transition-colors">Library</Link>
                            <Link to="/settings" className="hover:text-white transition-colors">Settings</Link>
                            <Link to="/predictscreen" className="hover:text-white transition-colors">Predict</Link>
                        </div>

                        {/* Right: Search + Action Button */}
                        <div className="flex items-center gap-4">

                            {/* Search Bar - Hidden on very small screens, visible on md+ */}
                            <div className="hidden md:block relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
                                </div>
                                <input type="text" placeholder="Search manga..." className="w-48 lg:w-64 bg-[#0F1523] border border-gray-700 text-gray-300 text-sm rounded-lg pl-9 pr-3 py-1.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"/>
                            </div>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all">
                                Log Out
                            </button>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={home_elem}/>
                    <Route path="/library" element={Library}/>
                    <Route path="/settings" element={<General/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/general" element={<General/>}></Route>
                    <Route path="/notifications" element={<Notifications/>}></Route>
                    <Route path="/security" element={<Security/>}></Route>
                    <Route path="/predictscreen" element={<PredictScreen/>}></Route>
                    <Route path="/selection" element={<MangaSelectionScreen/>}></Route>
                </Routes>
            </div>
        )

}

export default App