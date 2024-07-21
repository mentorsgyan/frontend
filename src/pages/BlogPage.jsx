import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { BACKEND_API } from "../utility/Constants";
import axios from 'axios';
import { BsArrowRight } from "react-icons/bs";
import PaginatedComponent from "../components/PaginatedComponent/PaginatedComponent";
import { FaTruckLoading } from "react-icons/fa";

const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

const people = [


    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Leslie Alexander2',
        email: 'leslie.alexander@example.com2',
        role: 'Co-Founder / CEO2',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
    },
]

const BlogPage = () => {

    const [paginatedCurrentAffairs, setPaginatedCurrentAffairs] = useState({
        mainData: [],
        componentHeading: "Daily Current Affairs by MentorsGyan",
        buttonTitle: "अभी पढ़ें"
    })

    const [currentAffairs, setCurrentAffairs] = useState(null);
    // fetching data
    useEffect(() => {
        fetch(BACKEND_API + "/getAllData/current-affairs")
        .then(response => response.json())
      .then(data => {
        if (Object.keys(data).length === 0) {
          console.error('Received empty data object');
        }
        setCurrentAffairs(data.slice(1).reverse());
        const dataCopy = {...paginatedCurrentAffairs};
        dataCopy.mainData = data.slice(1).reverse();
        console.log("DC: ", dataCopy)
        setPaginatedCurrentAffairs(dataCopy)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Data Received: ", data)
    //         setCurrentAffairs(data)
    //     })
    // }, [])

    // Tailwind properties

    return (
        <div className="container">
            {
                currentAffairs === null ? <FaTruckLoading/> :
                <PaginatedComponent paginatedData={paginatedCurrentAffairs}/> 
            }
        </div>
    )
}


export default BlogPage;