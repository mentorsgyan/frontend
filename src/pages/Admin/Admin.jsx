import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { BACKEND_API } from "../../utility/Constants";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import AdminControls from "./AdminControlls";
import NotFound from "../NotFound";

const Admin = () => {

    const [isAdmin, setAdmin] = useState(false);
    async function checkUserRights (currUser) {
        fetch(BACKEND_API + "/checkRights/" + currUser?.email)
        .then((response) => {
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
            if (currUser) {
                checkUserRights(currUser);
            }
        })
    }, [])

    return (
        <div className="">
            {!isAdmin && <Navbar sticky={!isAdmin}/>}
            {
                isAdmin ? (<AdminControls />) : (<NotFound />)
            }       
        </div>
    )
}


export default Admin;