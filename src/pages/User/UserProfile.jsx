import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';
import { BACKEND_API, userInfoFields } from "../../utility/Constants";
import { useAuth } from "../../AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.config";
import UserPurchases from "./UserPurchases";

/**
* User form page to collect the users basic data
* @author Mayank Shukla
*/
const UserProfile = () => {
    const [userPersonalData, setUserPersonalData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        gender: "Male",
        city: "Bilaspur",
        state: "Chhattisgarh",
        phoneNo: "",
        dob: 1,
        services: ["MENTORSHIP-sar"]
    })
    // Variables end

    const [dataExists, setDataExists] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                fetch(BACKEND_API + "/fetchUsers/" + auth.currentUser.email)
                .then((response) => {
                    if (response.status === 200)
                        setDataExists(true);
                    return response.json();
                })
                .then((data) => {
                    setUserPersonalData(data);
                })
                .catch((error) => {
                    console.error("Some error occurred: ", error);
                })
                console.log(userPersonalData);
            }
        });
      
        return () => unsubscribe();
    }, []);

    // Functions begin
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserPersonalData({
            ...userPersonalData,
            [name]: value
        })
    }

    const handleSave = async () => {
        try {
            const userDataResponse = await axios.post(BACKEND_API + "/saveUserData", userPersonalData);
            if (userDataResponse.status === 201) {
                console.log("User Data saved");
                alert("Your data is saved");
            } else {
                alert("Cannot save your data. Please try again later.")
            }
        } catch (error) {
            alert("Some error occurred");
            console.error("Error Occured: ", error);
        }
    }

    const handleCancel = () => {
        history.back();
    }
    // Functions begin

    return (
        <div className="relative">
            <Navbar sticky = {false} />
            {
                dataExists ? (
                    <div className="flex md:flex-row flex-col divide-x-8">
                        <DataExistingTiles data={userPersonalData}/>
                        <UserPurchases services={userPersonalData.services}/>
                    </div>   
                ) : (
                    <div className="flex justify-center gap-10 mt-10 mx-5">
                        <div className="flex flex-col py-4 px-5 rounded-3xl border shadow-xl bg-gray-50/30">
                            <div className="">
        
                                <div className="border-b border-gray-900/10 pb-12 w-[500px]">
                                    <h2 className="text-2xl font-semibold leading-7 text-gray-900">Personal Information</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-600">Register yourself to Mentorsgyan</p>
                                    {
                                        userInfoFields.map((fieldInfo, idx) => (
                                            <FormFields key={idx} fieldInfo={fieldInfo} userPersonalData = {userPersonalData} handleChange={handleChange}/>
                                        ))
                                    }
                                </div>
                            </div>
        
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900"
                                onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
        
                        {/* Information Section */}
                        {/* <div className="rounded-3xl shadow-lg py-4 px-5 w-full">
        
                        </div> */}
                    </div>
                )
            }
        </div>
    )
}

/*
{
            name: "Name",
            regex: "alphabetess",
            subfields: ["Firstname", "Lastname"],
            type: "text",
            editable: true
        },
*/

const FormFields = ({ fieldInfo , userPersonalData, handleChange}) => {
    return (
        <div>
            <div className="mt-2 flex gap-4">
                {
                    fieldInfo.subfields ? fieldInfo.subfields.map(subField => (
                        <EntryField key={subField.id} subField={subField} userPersonalData={userPersonalData} handleChange={handleChange}/>
                    )) : <EntryField subField={fieldInfo} userPersonalData={userPersonalData} handleChange={handleChange} />
                }
            </div>
            
        </div>
    )
}

const EntryField = ({subField, userPersonalData, handleChange}) => {
    if (subField.type === 'dropdown') {
        return (
            <DropDown subField={subField} handleChange={handleChange}/>
        )
    }
    return (
        <div className="flex flex-col">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {subField.name}
            </label>
            <div className="mt-2">
                <input
                    id={subField.id}
                    name={subField.id}
                    type={subField.type}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}

const DropDown = ({subField, handleChange}) => {
  return (
    <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">{subField.name}</label>
        <select name={subField.id} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
        onChange={handleChange}
        >
            {
                subField.value.map(option => (
                    <option key={option} value={option} >{option}</option>
                ))
            }
        </select>
    </div>
  )
}

/*

firstname: "",
        lastname: "",
        email: "",
        gender: "Male",
        city: "Bilaspur",
        state: "Chhattisgarh",
        phoneNo: "",
        dob: 1
    })
*/ 

const DataExistingTiles = ({data}) => {
    return (
        <div className="flex md:w-1/3  md:h-screen bg-opacity-70  shadow-2xl bg-white justify-center">
            {/* User Personal Info */}
            <ul className="flex flex-col gap-5 text-lg p-10">
                <li>
                    <h1 className="font-bold text-2xl text-secondary">Personal Information</h1>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Name :</p>
                    <p>{data.firstname + ' ' + data.lastname}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Email :</p>
                    <p>{data.email}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Mobile :</p>
                    <p>{data.phoneNo}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Place :</p>
                    <p>{data.city + ', ' + data.state}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Gender :</p>
                    <p>{data.gender}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">D.O.B :</p>
                    <p>{data.dob ? data.dob : "N/A"}</p>
                </li>
            </ul>
        </div>
    )
}

export default UserProfile;