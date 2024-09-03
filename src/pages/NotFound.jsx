import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Logo from "../assets/logo/white_bg.jpg";
import DarkLogo from "../assets/logo/footer_logo.png";

const NotFound = () => {
    return (
        <div>
            <Navbar />
            <div className="flex h-screen items-center justify-center dark:bg-gray-800">
				<img src={Logo} alt="" className=" absolute blur dark:hidden block" />
                <img src={DarkLogo} alt="" className=" absolute blur hidden dark:block" />

                <div className="p-12 z-10 bg-white bg-opacity-70 shadow-2xl rounded-3xl flex flex-col gap-5">
                    <h1 className="text-7xl sm:text-8xl md-900:text-9xl font-bold font-mono">404!</h1>
                    <p className="text-2xl font-bold">This page doesn't exist.</p>
                    <p className="text-xl">Please click <a className="hover:underline text-secondary" href="/">here</a> to go to the home page.</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;