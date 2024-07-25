import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../utility/Constants";
import PaginatedComponent from "../components/PaginatedComponent/PaginatedComponent";
import { FaTruckLoading } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar"


const BlogPage = () => {
    return (
        <div>
            <Navbar sticky={false}/>
            <ELibraryHelper buttonLabel={"अभी पढ़ें"} title = {"मेंटर्सज्ञान द्वारा दैनिक करेंट अफेयर्स"} resource = {"current-affairs"}/>
        </div>
    )
}

const ELibraryHelper = ({resource, title, buttonLabel}) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    const [paginatedCurrentAffairs, setPaginatedCurrentAffairs] = useState({
        mainData: [],
        componentHeading: title,
        buttonTitle: buttonLabel
    })


    async function fetchResourcesFromFirebase() {
        fetch(BACKEND_API + "/getAllData/" + resource)
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).length === 0) {
                console.error('Received empty data object');
                alert("Cannot display current affairs right now. Please try again later");
                return;
            }
            setPaginatedCurrentAffairs({
                ...paginatedCurrentAffairs,
                mainData: data
            })
            setDataLoaded(true);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }
    // fetching data
    useEffect(() => {
        fetchResourcesFromFirebase();
    }, []);

    return (
        <div className="container">
            {
                !dataLoaded ? <FaTruckLoading/> : (
                    <div className="mt-5 rounded-3xl shadow-2xl">
                        <PaginatedComponent paginatedData={paginatedCurrentAffairs}/> 
                    </div>
                )
            }
        </div>
    )
}

export default BlogPage;