import React from "react";
import { Link, useLocation } from "react-router-dom";
import useThemeContext from "../../contexts/themeContext";

const navElement = [
    { name: "Home", icon: "ant-design:home-filled", href: "/" },
    { name: "Explore", icon: "material-symbols:explore-outline-rounded", href: "/explore" },
    { name: "Likes", icon: "icon-park-solid:like", href: "/likes" },
    { name: "Saved", icon: "dashicons:cloud-saved", href: "/saved" },
    { name: "Profile", icon: "healthicons:ui-user-profile", href: "/profile" },
    { name: "Logout", icon: "oi:account-logout", href: "/logout" },
];

const SideNav = (props) => {
    const { setShowSidebar, open } = props;
    const { darkTheme } = useThemeContext();
    const location = useLocation();
    let cur = location.pathname.split("/").at(1);
    if (cur.length === 0) cur = "home";

    return (
        <div
            className={`w-full h-full transition-all duration-300 relative flex flex-col bg-white ${darkTheme ? "border-gray-900" : "border-gray-200"} dark:bg-black ${
                open ? "border-r-4" : "sm:border-r-4"
            } md:w-64`}
        >
            <header
                className={`flex dark:bg-[#030409] w-full bg-gray-100 h-12 transition origin-left duration-500 justify-center gap-2 dark:border-b-gray-900 text-lg text-blue-500 items-center ${
                    !open && "scale-0"
                } lg:scale-[1_!important]`}
            >
                <span className="text-2xl">
                    <iconify-icon icon="game-icons:axolotl"></iconify-icon>
                </span>
                <h1 className="font-bold italic text-base">Social app</h1>
            </header>
            <nav className="flex flex-col py-1 flex-grow overflow-y-scroll overflow-x-hidden">
                <button
                    className={`lg:hidden transition duration-300 rotate top-2 sm:top-2 text-blue-500 sm:absolute sm:left-auto sm:right-1 ${
                        open
                            ? "sm:rotate-[720deg] absolute left-auto right-1"
                            : "fixed left-2 sm:absolute sm:left-auto sm:right-1"
                    }`}
                    onClick={() => setShowSidebar((p) => !p)}
                    aria-hidden="true"
                >
                    <iconify-icon
                        icon="charm:menu-hamburger"
                        rotate={open ? "180deg" : ""}
                        width="24px"
                    ></iconify-icon>
                </button>
                {navElement.map((el) => {
                    const activeClass =
                        el.name.toLowerCase() === cur
                            ? "text-blue-500 scale-110 hover"
                            : "text-gray-500 dark:text-gray-300";
                    return (
                        <Link
                            key={el.icon + el.name}
                            to={el.href}
                            className={`w-full flex text-left justify-left transition hover:scale-105 pl-[15%] items-center h-12 ${activeClass}`}
                        >
                            <span className="text-xl">
                                <iconify-icon icon={el.icon}></iconify-icon>
                            </span>
                            <span
                                className={`text-sm ${
                                    open ? "scale-1" : "scale-0"
                                } transition-all duration-200 pl-4 origin-right lg:scale-100`}
                            >
                                {el.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default SideNav;
