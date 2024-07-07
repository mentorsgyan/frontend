import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { FaArrowRight } from "react-icons/fa6";
import {useNavigate } from "react-router-dom"; 


const items = [
    { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
    { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]

const paginatedData = {
    componentHeading: "Daily mock tests by MentorsGyan",
    mainData: [
        {
            primaryInfo: 'July 07, 2024',
            secondaryInfo: 'Sample Test 1',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
        },
        {
            primaryInfo: 'July 06, 2024',
            secondaryInfo: 'Sample Test 2',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
        },
        {
            primaryInfo: 'July 05, 2024',
            secondaryInfo: 'Sample Test 3',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
        },
        {
            primaryInfo: 'July 04, 2024',
            secondaryInfo: 'Sample Test 4',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
        },
        {
            primaryInfo: 'July 03, 2024',
            secondaryInfo: 'Sample Test 5',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
        },
        {
            primaryInfo: 'July 02, 2024',
            secondaryInfo: 'Sample Test 6',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
        },
        {
            primaryInfo: 'July 01, 2024',
            secondaryInfo: 'Sample Test 7',
            imageUrl:
                'https://upload.wikimedia.org/wikipedia/commons/8/87/Coat_of_arms_of_Chhattisgarh.svg'
        },
    ]
}

/**
 * This component will render paginated data
 * @returns 
 * @author Mayank Shukla
 */
const PaginatedComponent = () => {

    // React router
    const navigate = useNavigate();

    // Tailwind properties
    const pageCommonClass = "relative inline-flex items-center px-4 py-2 text-sm";
    const pageSelectedClass = "z-10 bg-secondary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
    const pageNotSelectedClass = "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
    
    // Pagination properties
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = Math.min(Math.floor(paginatedData.mainData.length / 2) , 10);
    const totalPages = Math.ceil(paginatedData.mainData.length / itemsPerPage);   

    return (
        <div className="container">
            <h1 className="text-2xl font-bold tracking-tight py-5">{paginatedData.componentHeading}</h1>
            {/* Rendering data begins */}
            <div>
                <ul role="list" className="divide-y divide-gray-100">
                    {
                        Array.from({length: itemsPerPage}, (_, index) => {
                            try {
                                const data = paginatedData.mainData[index +  itemsPerPage * (currentPage - 1)];
                                return (<div key={data.secondaryInfo}>
                                    <li className="flex justify-between gap-x-6 py-5">
                                        <div className="flex min-w-0 gap-x-4">
                                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={data.imageUrl} alt="" />
                                            <div className="min-w-0 flex-auto">
                                                <p className="text-sm font-semibold leading-6 text-gray-900">{data.primaryInfo}</p>
                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data.secondaryInfo}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <p className="hidden sm:text-center sm:block">Launch Test</p>
                                            <FaArrowRight className="text-secondary text-2xl cursor-pointer hover:scale-110 duration-200" onClick={() => {
                                                navigate(data.primaryInfo)
                                            }}/>
                                        </div>
                                    </li>
                                </div>)
                            } catch (error) {
                                console.log("Index: ", index +  itemsPerPage * (currentPage - 1));
                            }
                            
                        })
                    }
                </ul>
            </div>
            {/* Rendering data begins */}
            {/* Page change area begins */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                
                {/* Previous/Next button in case of small widht device */}
                <div className="flex flex-1 justify-between sm:hidden">
                    <a href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >Previous</a>
                    <a href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >Next</a>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, paginatedData.mainData.length)}</span> of{' '}
                            <span className="font-medium">{paginatedData.mainData.length}</span> results
                        </p>
                    </div>

                    
                    <div className="flex gap-2">
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            {/* Left arrow */}
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                onClick={() => setCurrentPage(currentPage - (currentPage != 1))}
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                            {
                                Array.from({ length: totalPages }, (_, index) => (
                                    <a
                                        href="#"
                                        key={index}
                                        aria-current="page"
                                        className={`${pageCommonClass} ${currentPage === index + 1 ? pageSelectedClass : pageNotSelectedClass} `}
                                        onClick={() => { setCurrentPage(index + 1) }}
                                    >{index + 1}</a>
                                ))
                            }

                            {/* Right arrow */}
                            <a href="#"
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                onClick={() => setCurrentPage(currentPage + (currentPage != totalPages))}
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Page change area ends */}
        </div>
    )
}


export default PaginatedComponent;