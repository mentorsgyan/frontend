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
                    setUserPersonalData(data);
                })
                .catch((error) => {
                    console.error("Some error occurred: ", error);
                })
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
        <div className="text-white bg-gray-800">
            <Navbar sticky = {false}/>
            {
		    dataExists ? (
			<div className="grid md-900:grid-cols-3 ">
				<DataExistingTiles data={userPersonalData}/>
                <UserPurchases mentorship={userPersonalData.mentorship} courses={userPersonalData.courses} ebook={userPersonalData.ebook}/>
				<div className="col-start-3 row-span-7 bg-amber-700 hidden md-900:block" />
            </div>   
                ) : (<UserForm email={auth.currentUser.email}/>)
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

const DataExistingTiles = ({data}) => {
	const [userImage, setUserImage] = useState();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserImage(user.photoURL);
			}
		})
	}, [])
    return (
        <div className="col-span-2 flex rounded-3xl shadow-lg shadow-gray-500 justify-evenly items-start md-900:mx-10 mx-2 mt-10">
            {/* User Personal Info */}
            <ul className="flex flex-col gap-5 md-900:text-lg p-10 text-sm">
                <li>
                    <h1 className="font-bold text-2xl text-secondary">Personal Information</h1>
                </li>
                <li className="flex md-900:flex-row md-900:gap-5 flex-col justify-between">
                    <p className="font-bold">Name</p>
                    <p>{data.firstName + ' ' + data.lastName}</p>
                </li>
                <li className="flex md-900:flex-row md-900:gap-5 flex-col justify-between">
                    <p className="font-bold">Email</p>
                    <p>{data.email}</p>
                </li>
                <li className="flex md-900:flex-row md-900:gap-5 flex-col justify-between">
                    <p className="font-bold">Mobile</p>
                    <p>{data.phoneNumber}</p>
                </li>
                <li className="flex md-900:flex-row md-900:gap-5 flex-col justify-between">
                    <p className="font-bold">Address</p>
                    <p>{data.city}, {data.state}</p>
                </li>
                <li className="flex md-900:flex-row md-900:gap-5 flex-col justify-between">
                    <p className="font-bold">Gender</p>
                    <p>{data.gender.toUpperCase()}</p>
                </li>
                <li className="flex md-900:flex-row md-900:gap-5 flex-col justify-between">
                    <p className="font-bold">D.O.B</p>
                    <p>{data.dateOfBirth ? data.dateOfBirth : "N/A"}</p>
                </li>
            </ul>

	    {userImage && <img src={userImage} href = {data.firstName + ' ' + data.lastName} className="rounded-full mt-20"/>}
        </div>
    )
}

export default UserProfile;