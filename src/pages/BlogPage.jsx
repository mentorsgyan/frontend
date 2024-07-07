import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

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
    // Tailwind properties
    const pageCommonClass = "relative inline-flex items-center px-4 py-2 text-sm";
    const pageSelectedClass = "z-10 bg-secondary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
    const pageNotSelectedClass = "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
    
    // Pagination properties
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = Math.min(Math.floor(people.length / 2) , 10);
    const totalPages = Math.ceil(people.length / itemsPerPage);   

    return (
        <div className="container">
            <h1 className="text-2xl font-bold tracking-tight py-5">Daily Current Affairs by MentorsGyan</h1>
            {/* Rendering data begins */}
            <div>
                <ul role="list" className="divide-y divide-gray-100">
                    {
                        Array.from({length: itemsPerPage}, (_, index) => {
                            try {
                                const person = people[index +  itemsPerPage * (currentPage - 1)];
                                return (<div key={person.email}>
                                    <li className="flex justify-between gap-x-6 py-5">
                                        <div className="flex min-w-0 gap-x-4">
                                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                            <div className="min-w-0 flex-auto">
                                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                            </div>
                                        </div>
                                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                            
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
                            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, people.length)}</span> of{' '}
                            <span className="font-medium">{people.length}</span> results
                        </p>
                    </div>

                    
                    <div className="flex gap-2">
                        {/* Items per page change area
                        <input type="text" placeholder="Items per page"
                            className="w-[50px] rounded-md  
                            transition-all duration-300 border 
                            border-gray-300 px-2 py-1 focus:outline-none
                            focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                        /> */}
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


export default BlogPage;