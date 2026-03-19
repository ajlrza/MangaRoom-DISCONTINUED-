import { useState} from 'react';
import { useEffect } from 'react'
// Using the specific imports you requested
import { ArrowTrendingUpIcon, ChartBarSquareIcon, ListBulletIcon, StarIcon } from '@heroicons/react/24/solid';
import { App } from "./App.jsx";


export function LandingPage() {

    const [isLogin, setIsLogin] = useState(true);
    const [sessionActive, setSessionActive] = useState(false);
    const [cantLogin, setCantLogin] = useState(false);
    const [closeDialog, setCloseDialog] = useState(false);

    function SignInHandler(event) {
        let body = {}
        try {
            body = {
                'Username': `${event.currentTarget.elements.userName.value}`,
                'Email': `${event.currentTarget.elements.userEmail.value}`,
                'Password': `${event.currentTarget.elements.userPassword.value}`
            }

            fetch('http://localhost:3000/signUpAccount', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }).then(res => res.json())
                .then(data => {console.log(data)})
            event.target.reset();
            alert("Signed-up successfully!");

        } catch (error) {
            body = {
                'Email': `${event.currentTarget.elements.userEmail.value}`,
                'Password': `${event.currentTarget.elements.userPassword.value}`
            }
            fetch('http://localhost:3000/startSession', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
                .then(res => res.json())
                .then(data => {
                    // 2. Update the signal directly
                    // Any component listening to this signal will auto-update
                    setSessionActive(data['access']);
                    console.log(data);

                    if (data['access'] === false) {
                        setCloseDialog(false)
                        setCantLogin(true)
                    console.log(data)
                    }
                })
                .catch(err => {setCloseDialog(false);setCantLogin(true);});
        }
    }
    function closeDialogHandler() {
        setCloseDialog(true);
    }
    if (sessionActive === false) {
        return (
            <div className="min-h-screen bg-[#050B14] text-white font-sans selection:bg-pink-500 selection:text-white relative">

                {/* --- MAIN LANDING PAGE CONTENT --- */}
                <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Value Prop */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-wider">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                        </span>
                            Pace Predictor Live
                        </div>

                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                            Track your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Reading Reality.
                        </span>
                        </h1>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                            Stop guessing when you'll catch up. Our advanced dashboard visualizes your reading speed, predicts finish dates, and helps you optimize your binge sessions.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <FeatureItem icon={<ChartBarSquareIcon className="w-5 h-5" />} text="Visual Progress Tracking" />
                            <FeatureItem icon={<ArrowTrendingUpIcon className="w-5 h-5" />} text="Smart Pace Prediction" />
                            <FeatureItem icon={<StarIcon className="w-5 h-5" />} text="Chapter Optimization" />
                            <FeatureItem icon={<ListBulletIcon className="w-5 h-5" />} text="Library Management" />
                        </div>
                    </div>

                    {/* Right Side: Auth Card */}
                    <div className="w-full max-w-md mx-auto lg:ml-auto">
                        <div className="bg-[#0F1523] border border-gray-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {isLogin ? 'Welcome back' : 'Start tracking'}
                                    </h2>
                                    <p className="text-gray-400 text-sm">
                                        {isLogin ? 'Enter your credentials to access your dashboard.' : 'Create an account to calculate your reading pace.'}
                                    </p>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); SignInHandler(e);}}>
                                    {!isLogin && (
                                        <div>
                                            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">Username</label>
                                            <input type="text" name="userName" className="w-full bg-[#050B14] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="OtakuKing99" />
                                        </div>
                                    )}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">Email</label>
                                        <input type="email" name="userEmail" className="w-full bg-[#050B14] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase">Password</label>
                                        <input type="password" name="userPassword" className="w-full bg-[#050B14] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600" placeholder="••••••••" />
                                    </div>
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 mt-2">
                                        {isLogin ? 'Sign In' : 'Create Account'}
                                        <ArrowTrendingUpIcon className="w-5 h-5" />
                                    </button>
                                </form>

                                <div className="mt-6 text-center">
                                    <p className="text-sm text-gray-400">
                                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                                        <button onClick={() => setIsLogin(!isLogin)} className="text-pink-400 hover:text-pink-300 font-medium transition-colors">
                                            {isLogin ? 'Register now' : 'Log in'}
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <div className="border-t border-gray-800 bg-[#0F1523]/50 mt-auto">
                    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>© 2024 MangaRoom. Optimize your pace.</p>
                        <div className="flex gap-6">
                            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> System Operational</span>
                            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> v2.0.1 (Stable)</span>
                        </div>
                    </div>
                </div>

                {/* --- THE DIALOG BOX (Conditionally Rendered) --- */}
                {cantLogin === true && closeDialog === false && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                        <div className="w-80 rounded-2xl border border-[#1f2937] bg-[#0F1523] p-6 text-white shadow-2xl">
                            <h2 className="text-xl font-bold">Log-in Error</h2>
                            <p className="mt-2 text-gray-400">Something have went wrong.</p>

                            <div className="mt-6 flex justify-end gap-3">
                                {/* Confirm Button */}
                                <button onClick={closeDialogHandler} className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition-colors">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        );
    }

    if (sessionActive === false) {
        return (
            <App/>
        )
    }

}

function FeatureItem({ icon, text }) {
    return (
        <div className="flex items-center gap-3 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors">
            <div className="text-pink-500">{icon}</div>
            <span className="text-sm font-medium">{text}</span>
        </div>
    );
}