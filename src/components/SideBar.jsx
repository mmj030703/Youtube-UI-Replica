import { faCirclePlay, faHouse, faFilm, faAngleRight, faUser, faClockRotateLeft, faPlay, faClock, faAngleDown, faFire, faBagShopping, faMusic, faClapperboard, faTowerBroadcast, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
    const { isSideBarOpen } = useSelector(store => store.toggleSidebar);

    if (!isSideBarOpen) return null;

    return (
        <div className="relative">
            <div className="sm:w-[240px] h-[90dvh] px-6 sm:scrollbar-hidden hover-scrollbar-visible bg-white fixed top-[50px] z-20 shadow-[1px_2px_5px_#999] pt-5">
                <div className="pb-3 border-b-[1px] border-gray-300">
                    <Link to={"/"}>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] bg-slate-100 rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faHouse} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px] font-semibold">Home</p>
                        </div>
                    </Link>
                    <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                        <FontAwesomeIcon icon={faCirclePlay} className="text-[15px] sm:text-lg" />
                        <p className="text-[14px] sm:text-[15px]">Shorts</p>
                    </div>
                    <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                        <FontAwesomeIcon icon={faFilm} className="text-[15px] sm:text-lg" />
                        <p className="text-[14px] sm:text-[15px]">Subscriptions</p>
                    </div>
                </div>
                <div className="mt-5 pb-3 border-b-[1px] border-gray-300">
                    <h3 className="text-[17px] font-semibold">You <FontAwesomeIcon className="font-thin text-sm ml-2" icon={faAngleRight} /></h3>
                    <div className="mt-2">
                        <div className="flex items-center gap-x-7 px-2 py-2 rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faUser} className="text-[15px] sm:text-lg border border-1 border-black" />
                            <p className="text-[14px] sm:text-[15px]">Your Channel</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faClockRotateLeft} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">History</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faPlay} className="text-[7px] sm:text-[9px] px-1 py-1 border border-1 border-black" />
                            <p className="text-[14px] sm:text-[15px]">Your Videos</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faClock} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">Watch Later</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[10px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faAngleDown} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">Show more</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 pb-3 border-b-[1px] border-gray-300">
                    <h3 className="text-[17px] font-semibold">Explore</h3>
                    <div className="mt-2">
                        <div className="flex items-center gap-x-7 px-2 py-2 rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faFire} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">Trending</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faBagShopping} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">Shopping</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faMusic} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">Music</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faClapperboard} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">Films</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faTowerBroadcast} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">Live</p>
                        </div>
                        <div className="flex items-center gap-x-7 px-2 py-[9px] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faGamepad} className="text-[15px] sm:text-lg" />
                            <p className="text-[14px] sm:text-[15px]">Gaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;