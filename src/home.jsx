import { TotalMangaTracked, TotalChaptersRead, UserAveragePace, PaceMangaTitle, UserPredictedFinish, TargetChapterStatus, PredictedPaceAverage } from "./services.jsx";
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid';
import { ChartBarSquareIcon } from '@heroicons/react/24/solid';
import { ListBulletIcon } from '@heroicons/react/24/solid';
import { StarIcon } from "@heroicons/react/24/solid";


/**
 * Represents the main home UI component for the AnimeHub platform.
 * This structure includes various sub-sections designed to provide
 * users with information about trending anime, a community discussion forum,
 * genre browsing options, and recent reviews.
 *
 * The `home` component features:
 * - A welcoming header and call-to-action links for engaging users to explore.
 * - A "Currently On-Air" section showcasing currently airing anime series.
 * - "Browse by Genre" options for category-based exploration.
 * - "Recent Discussions" and "Recent Reviews" to highlight community engagement.
 * - Footer with links to key pages like "About Us," "Contact," along with social media integration.
 *
 * The layout is styled with a responsive design, using utility classes
 * for spacing, positioning, and text formatting. This component is critical
 * for delivering an engaging, interactive user experience on the homepage.
 */

const readingSummaryDashboard = () => {

    return (
        <div id="ReadingSummaryCardDashboard" className="flex flex-col rounded-lg bg-gray-900 pl-5.5 pr-5.5 ml-6">
            <div className="inline-flex items-center font-medium text-xl gap-2 pt-3 ">
                <ChartBarSquareIcon className="h-5 w-5 text-blue-500"/>
                Reading Summary
            </div>
            <div className="flex flex-row pt-5 pb-2">
                <h4 className="text-neutral-400 text-m font-medium">Total Manga Tracked:</h4>
                <span className="flex ml-auto pl-5 pr-1 text-blue-500 text-2xl font-bold" id="mangaTrackData"><TotalMangaTracked/></span>
            </div>
            <div className="flex flex-row pt-3 pb-5">
                <h4 className="text-neutral-400 text-m font-medium">Chapters Read:</h4>
                <span className="flex ml-32 pl-5 pr-1 text-blue-500 text-2xl font-bold" id="chapterReadData"><TotalChaptersRead/></span>
            </div>
            <hr className="border-gray-700 pt-2 pb-1 mr-1 ml-0">
            </hr>
            <div className="flex font-medium">
                <h4 className="text-sm">Current Status: </h4>
                <span className="flex ml-auto pt-1 pb-1 pl-2 pr-2 mb-2 rounded-2xl text-green-300 bg-green-900 text-sm">On Target</span>
            </div>
        </div>
    );
}

const pacePredictorDashboard = () => {
    return (
        <div id="PacePredictorDashboard" className="gap-y-11 rounded-lg bg-gray-900 ml-5 pr-5 pl-5 w-full">
            <div className="inline-flex flex-row items-center font-medium text-2xl text-pink-500 gap-2 p-3">
                <ArrowTrendingUpIcon className="h-5 w-5"/>
                Pace Predictor Insights
            </div>
            <div className="flex flex-row font-medium text-2xl">
                <h5 className="text-sm text-justify">Base on your average pace of<UserAveragePace/>chapters/day, here are your projections:</h5>
            </div>
            <div className="flex flex-row gap-x-11 justify-center ">
                <div className="flex flex-col bg-black rounded-lg mt-2 mb-2 max-w-l pr-21 p-4">
                    <div className="flex">
                        <h2 className="font-medium"><PaceMangaTitle/></h2>
                    </div>
                    <div className="block">
                        <h2 className="font-medium text-xl">Finish in <span className="text-pink-500"><UserPredictedFinish/></span></h2>
                    </div>
                    <div className="block">
                        <h2 className="font-medium text-sm">Target: <TargetChapterStatus/></h2>
                        <h2 className="font-medium text-sm">Average: <PredictedPaceAverage/> ch/day</h2>
                    </div>
                </div>
                <div className="flex flex-col bg-black rounded-lg mt-2 mb-2 max-w-l pr-25 p-4">
                    <div className="flex">
                        <h2 className="font-medium"><PaceMangaTitle/></h2>
                    </div>
                    <div className="block">
                        <h2 className="font-medium text-xl ">Finish in <span className="text-pink-500"><UserPredictedFinish/></span></h2>
                    </div>
                    <div className="block">
                        <h2 className="font-medium text-sm">Target: <TargetChapterStatus/></h2>
                        <h2 className="font-medium text-sm">Average: <PredictedPaceAverage/> ch/day.</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row font-medium text-2xl bg-blue-400 rounded-lg p-5 justify-center mt-3 mb-5">
                <h3 className="text-sm">Optimize your pace</h3>
            </div>
        </div>
    );
}

const currentlyReadingList = () => {
    return (
        <div id="home-content-middle-text-animes" className="flex ml-15 flex-col gap-y-9 justify-around mb-15 pt-6">
            <div id="home-content-middle-text-anime-box-one" className="flex flex-col rounded-lg pb-5 pl-3 pt-5 font-mono bg-gray-900">
                <div className="flex border-2 border-gray-500 rounded-lg font-medium text-xl text-center p-5 mr-3">
                    <h3 className="flex p-4 rounded-t-2xl rounded-b-2xl bg-gray-800">OP</h3>
                    <div className="flex flex-col ml-3 pr-auto overflow-hidden">
                        <h5 className="mr-auto font-['Arial'] font-bold">One Piece</h5>
                        <h5 className="mr-auto font-['Arial'] text-gray-400 text-sm">Chapter 1092 of 1100 (Wano Arc)</h5>
                        <progress value="99.3" max="100" className="appearance-none rounded-full h-2 w-5xl overflow-hidden bg-gray-200 [&::-webkit-progress-value]:bg-blue-600 [&::-moz-progress-bar]:bg-blue-600"></progress>
                    </div>
                    <div className="flex flex-row ml-auto pr-auto">
                        <h3 className="m-1 pt-3 text-green-400 font-['Arial']">99.3%</h3>
                        <StarIcon className="w-5 ml-2 text-yellow-300"></StarIcon>
                    </div>
                </div>
            </div>

            <div id="home-content-middle-text-anime-box-two" className="flex flex-col rounded-lg pb-5 pl-3 pt-5 font-mono bg-gray-900">
                <div className="flex border-2 border-gray-500 rounded-lg font-medium text-xl text-center p-5 mr-3">
                    <h3 className="flex p-4 rounded-t-2xl rounded-b-2xl bg-gray-800">HxH</h3>
                    <div className="flex flex-col ml-3 pr-auto overflow-hidden">
                        <h5 className="mr-auto font-['Arial'] font-bold">Hunter x Hunter</h5>
                        <h5 className="mr-auto font-['Arial'] text-gray-400 text-sm">Chapter 390 of 400 (Succession Arc)</h5>
                        <progress value="97.5" max="100" className="appearance-none rounded-full h-2 w-5xl overflow-hidden bg-gray-200 [&::-webkit-progress-value]:bg-blue-600 [&::-moz-progress-bar]:bg-blue-600"></progress>
                    </div>
                    <div className="flex flex-row ml-auto pr-auto">
                        <h3 className="m-1 pt-3 text-green-400 font-['Arial']">97.5%</h3>
                        <StarIcon className="w-5 ml-2"></StarIcon>
                    </div>
                </div>
            </div>

            <div id="home-content-middle-text-anime-box-three" className="flex flex-col rounded-lg pb-5 pl-3 pt-5 font-mono bg-gray-900">
                <div className="flex border-2 border-gray-500 rounded-lg font-medium text-xl text-center p-5 mr-3">
                    <h3 className="flex p-4 rounded-t-2xl rounded-b-2xl bg-gray-800">AOT</h3>
                    <div className="flex flex-col ml-3 pr-auto overflow-hidden">
                        <h5 className="mr-auto font-['Arial'] font-bold">Attack On Titan</h5>
                        <h5 className="mr-auto font-['Arial'] text-gray-400 text-sm">Chapter 1 of 110 (Re-reading)</h5>
                        <progress value="0.7" max="100" className="appearance-none rounded-full h-2 w-5xl overflow-hidden bg-gray-200 [&::-webkit-progress-value]:bg-blue-600 [&::-moz-progress-bar]:bg-blue-600"></progress>
                    </div>
                    <div className="flex flex-row ml-auto pr-auto">
                        <h3 className="m-1 pt-3 font-['Arial']">0.7%</h3>
                        <StarIcon className="w-5 ml-2"></StarIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}


const home =
    (<div id="home-content" className="bg-cover h-full w-full bg-[#050B14]">
        <div className="flex flex-col m-5 pl-5">
            <div id="HomeTextHeader">
                <h2 className="ml-20 font-medium text-4xl">Dashboard</h2>
            </div>
        </div>
        <div className="flex flex-col mr-15 ml-15 max-w-8xl">
            <div className="flex pl-10">
                {readingSummaryDashboard()}
                {pacePredictorDashboard()}
            </div>
            <div id="home-content-middle-text" className="flex flex-col max-w-2xl">
                <div id="home-content-middle-text-separator" className="flex mt-9 pl-15 text-2xl font-medium">
                    <ListBulletIcon className="h-5 w-5 m-2 text-blue-500"/>
                    <h2>Currently Reading (<span>3</span> Series)</h2>
                </div>
            </div>
            {currentlyReadingList()}
        </div>
    </div>);

export default home;
