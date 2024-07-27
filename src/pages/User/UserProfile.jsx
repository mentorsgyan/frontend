import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { BACKEND_API } from "../../utility/Constants";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase.config";
import UserPurchases from "./UserPurchases";
import UserForm from "./UserForm";

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
        dob: ""
    })
    // Variables end

    const [dataExists, setDataExists] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setLoggedIn(true);
                fetch(BACKEND_API + "/fetchUsers/" + auth.currentUser.email)
                .then((response) => {
                    if (response.status === 200) {
                        setDataExists(true);
                        return response.json();
                    }
                    return null;
                })
                .then((data) => {
                    console.log("Then => ", data);
                    setUserPersonalData(data);
                })
                .catch((error) => {
                    console.error("Some error occurred: ", error);
                })
                console.log(userPersonalData);
            } else {
                setLoggedIn(false);
            }
        });
      
        return () => unsubscribe();
    }, []);

    // Functions begin

    const handleLogin = async () => {
        signInWithPopup(auth, provider)
        .then((data) => {
            setUser(data.user.displayName);
            setLoggedIn(true);
        })
    }

    if (!loggedIn) {
        return (
            <div>
                <Navbar />
                <div className="h-screen flex items-center justify-center">
                    <div className="bg-white shadow-2xl p-5 rounded-3xl">
                        <button className="text-2xl" onClick={handleLogin}>लॉग इन करने के लिए <p className="text-secondary hover:underline">यहां</p> क्लिक करें।</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative">
            <Navbar sticky = {false} />
            {
                dataExists ? (
                    <div className="flex md:flex-row flex-col divide-x-8">
                        <DataExistingTiles data={userPersonalData}/>
                        <UserPurchases services={userPersonalData.services}/>
                    </div>   
                ) : (<UserForm />)
            }
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
                <input required
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

const DropDown = ({subField, handleChange}) => {
  return (
    <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">{subField.name}</label>
        <select required name={subField.id} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
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
    console.log("Data: ", data);
    return (
        <div className="flex w-full  md:h-screen bg-opacity-70  shadow-2xl bg-white justify-center">
            {/* User Personal Info */}
            <ul className="flex flex-col gap-5 text-lg p-10">
                <li>
                    <h1 className="font-bold text-2xl text-secondary">Personal Information</h1>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Name :</p>
                    <p>{data.firstName + ' ' + data.lastName}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Email :</p>
                    <p>{data.email}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Mobile :</p>
                    <p>{data.phoneNumber}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Pin Code :</p>
                    <p>{data.pincode}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">Gender :</p>
                    <p>{data.gender.toUpperCase()}</p>
                </li>
                <li className="flex justify-between gap-4">
                    <p className="font-bold">D.O.B :</p>
                    <p>{data.dateOfBirth ? data.dateOfBirth : "N/A"}</p>
                </li>
            </ul>
        </div>
    )
}

export default UserProfile;