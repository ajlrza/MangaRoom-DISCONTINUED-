import { MangaDisplay } from './fetchCover.jsx';
import { MagnifyingGlassIcon, ListBulletIcon, RectangleGroupIcon } from "@heroicons/react/24/solid/index.js";

const Library = (
    <div className="min-h-screen bg-[#050B14] text-white p-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Library</span>
                    </h1>
                    <p className="text-gray-400 mt-2">Manage your collection and track your progress.</p>
                </div>

                {/* Search and View Toggles */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search manga..."
                            className="w-full md:w-64 bg-[#0F1523] border border-gray-800 text-gray-300 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                        />
                    </div>
                    <div className="flex bg-[#0F1523] border border-gray-800 p-1 rounded-xl">
                        <button className="p-1.5 rounded-lg bg-gray-800 text-blue-400 shadow-sm">
                            <RectangleGroupIcon className="h-5 w-5" />
                        </button>
                        <button className="p-1.5 rounded-lg text-gray-500 hover:text-gray-300 transition-colors">
                            <ListBulletIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Filter Navigation */}
            <div className="flex flex-wrap gap-3 mt-8">
                {['All', 'Reading', 'Completed', 'On Hold', 'Dropped'].map((filter, index) => (
                    <button
                        key={filter}
                        className={`px-5 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all border
                            ${index === 0
                            ? 'bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)]'
                            : 'bg-transparent border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        {/* Manga Grid */}
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                {/* Wrap MangaDisplay in a stylized container */}
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="group relative">
                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

                        <div className="relative bg-[#0F1523] border border-gray-800 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                            <MangaDisplay />
                            {/* Optional: Add a progress overlay here if your MangaDisplay doesn't have one */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Library;