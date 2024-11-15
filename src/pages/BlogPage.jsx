import React, { useEffect, useState } from "react";
import { BACKEND_API } from "../utility/Constants";
import PaginatedComponent from "../components/PaginatedComponent/PaginatedComponent";
import { FaSpinner } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar"


const BlogPage = () => {
    return (
        <div>
            <Navbar sticky={false}/>
            <div className="flex flex-col items-center justify-center gap-10">
                <ELibraryHelper buttonLabel={"अभी पढ़ें"} title = {"मेंटर्सज्ञान द्वारा दैनिक करेंट अफेयर्स"} resource = {"current-affairs"}/>
                <ELibraryHelper buttonLabel={"अभी पढ़ें"} title = {"मेंटर्सज्ञान द्वारा पिछले वर्षों के प्रश्न"} resource = {"pyq"} />
                <ELibraryHelper buttonLabel={"अभी पढ़ें"} title = {"मेंटर्सज्ञान द्वारा प्रशासनिक रिपोर्ट"} resource = {"prativedan"} />
                <ELibraryHelper buttonLabel={"अभी पढ़ें"} title = {"मेंटर्सज्ञान द्वारा आर्थिक सर्वेक्षण"} resource = {"economic-survey"} />
                <ELibraryHelper buttonLabel={"अभी पढ़ें"} title = {"मेंटर्सज्ञान द्वारा सरकारी पत्रिकाएँ"} resource = {"govt-mags"} />
                <ELibraryHelper buttonLabel={"अभी पढ़ें"} title = {"मेंटर्सज्ञान द्वारा समाचार पत्र की कतरनें"} resource = {"paper-cuts"} />
                <div className="py-10"></div>
            </div>
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
        let notFound = false;
        fetch(BACKEND_API + "/getAllData/" + resource)
        .then(response => {
            if (response.status === 200)
                return response.json();
            notFound = true;
        })
        .then(data => {
            if (notFound) {
                setDataLoaded(true);
                return;
            }
            if (Object.keys(data).length === 0) {
                console.error('Received empty data object');
                alert(`Cannot display ${resource} right now. Please try again later`);
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
                !dataLoaded ? (<FaSpinner className="animate-spin w-full"/>) : (
                    <div className="mt-5 rounded-3xl shadow-2xl">
                        <PaginatedComponent paginatedData={paginatedCurrentAffairs}/> 
                    </div>
                )
            }
        </div>
    )
}

export default BlogPage;