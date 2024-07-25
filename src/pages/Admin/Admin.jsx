import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../assets/logo/white_bg.jpg"
import { BACKEND_API } from "../../utility/Constants";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import AdminControls from "./AdminControlls";

const Admin = () => {

    const [isAdmin, setAdmin] = useState(true);
    async function checkUserRights (currUser) {
        fetch(BACKEND_API + "/checkRights/" + currUser?.email)
        .then((response) => {
            console.log()
            if (response.status === 200) {
                setAdmin(true);
            } else {
                setAdmin(false);
            }
        })
        .catch((error) => {
            console.error ("Error Occurred in getting User List ", error);
            setAdmin(false);
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currUser) => {
            if (currUser) {ww
                checkUserRights(currUser);
            }
        })
    }, [])

    return (
        <div>
            <Navbar sticky={!isAdmin}/>
            {
                isAdmin ? (<AdminControls />) : (<NotAdminTile />)
            }       
        </div>
    )
}

const NotAdminTile = () => {
    return (
        <div className="flex flex-col items-center h-screen justify-center ">
            <img src={Logo} alt="" className="-z-50 absolute blur-lg" />
            <div className="bg-white bg-opacity-70 p-10 rounded-3xl shadow-2xl text-center">
                <h1 className="text-3xl text-red-500 font-bold p-10">404 Not Found!</h1>
                <p className="font-bold text-gray-500">Please click <a className="text-secondary hover:underline" href="/">here</a> to go to the home page.</p>
            </div>
        </div>
    )
}

export default Admin;