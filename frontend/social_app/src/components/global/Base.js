import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { PageContextProvider } from "../../contexts/pageContext";
import Header from "./Header";
import SideNav from "./SideNav";

const Base = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="flex flex-row w-screen relative h-screen xxl:grid xxl:grid-cols-[auto,_1fr] dark:bg-black">
            <div
                className={`${
                    showSidebar ? "w-56" : "w-0 sm:w-14"
                } max-w-3/4 z-50 lg:w-64 transition-all xxl:w-64 duration-700 fixed h-screen lg:static`}
            >
                <SideNav setShowSidebar={setShowSidebar} open={showSidebar} />
            </div>

            <div className="flex-grow h-screen w-full xxl:w-auto relative flex flex-col">
                <Header />
                <main className="w-full h-full flex-grow mt-14 overflow-y-scroll pb-14 border-t-4 dark:border-gray-900">
                    <PageContextProvider>
                        <Outlet />
                    </PageContextProvider>
                </main>
            </div>

            {showSidebar && (
                <div
                    className="fixed w-screen h-screen lg:hidden bg-black opacity-50 z-40"
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}
        </div>
    );
};

export default Base;