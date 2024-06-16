import React, {useState, useEffect} from "react";

const Testing = () => {
    const [userData, setUserData] = useState([{}])
    
    useEffect(() => {
        fetch("http://localhost:5000/api")
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.log("Error occured in fetching data: ", error))
    }, [])

    return (
        <div>
            {userData ? (
                <div>
                    {userData.users}
                </div>
            ): (
                <div> lOading data</div>
            )}
        </div>
    )
}
export default Testing;