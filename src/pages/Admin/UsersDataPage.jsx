import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../../utility/Constants";

const UserDataPage = () => {
    /**
     *   {
    firstName: 'Mayank',
    lastName: 'Shukla',
    pincode: '495004',
    phoneNumber: '9179263530',
    gender: 'male',
    dateOfBirth: '2001-06-24',
    email: 'm24shukla@gmail.com',
    services: [ '', 'MENTORSHIP-प्लस' ]
  },

     * 
     */
    const [userList, setUserList] = useState([]);

    async function fetchUsers () {
        await fetch(BACKEND_API + "/users")
        .then((response) => response.json())
        .then((data) => {
            console.log("Data: ", data);
            setUserList(data);
        })
        .catch((error) => {
            alert("Capture this error and contact the IT support: ", error);
        })
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div>
            <div className="justify-center items-center grid grid-cols-6">
                <h1>Name</h1>
                <h1>Phone Number</h1>
                <h1>Gender</h1>
                <h1>Date of Birth</h1>
                <h1>Service</h1>
                <h1>Email</h1>
            </div>
        </div>
    )
}

export default UserDataPage;