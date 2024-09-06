import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Md10K } from "react-icons/md";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { BACKEND_API } from "../../utility/Constants";
import { useNavigate } from "react-router-dom";

const PremiumEbooks = () => {
    const [bookList, setBookList] = useState([]);
    const navigate = useNavigate();

    async function loadBooks() {
        fetch(BACKEND_API + '/specialEbooks/getPremiumEbooks')
        .then((response) => response.json())
        .then((data) => setBookList(data));
    }

    useEffect(() => {
        loadBooks();
        console.log(bookList.content);
    }, [])

    function handleDescriptionToggle(idx, state) {
        setBookList(bookList.map((book, bookIdx) => bookIdx === idx ? { ...book, descriptionOpen: state} : book));
    }

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white font-mukta h-screen">
            <Navbar sticky={false}/>
            <div className="container grid grid-cols-1 md-900:grid-cols-2 gap-5 rounded-3xl shadow-2xl mt-10 p-5">
                {
                    bookList.map((book, idx) => {
                        const data = {
                            price: book.price,
                            id: book.seriesTitle,
                            folderId: book.folderId,
                            driveSharingLink: book.sharingLink,
                            name: 'EBOOKS-' + book.seriesTitle
                        }
                        return (
                        <div key={idx} className="flex md-900:flex-row flex-col gap-10 p-4 rounded-3xl shadow-2xl shadow-gray-600 items-center justify-evenly">
                            <img src={book.imageUrl} alt="" className="w-[230px]" />
                            <div className="flex flex-col justify-center gap-5">
                                <h1 className="text-2xl font-bold">{book.seriesTitle}</h1>
                                {/* Description */}
                                <div className="flex items-center border p-2 justify-evenly rounded-3xl hover:cursor-pointer" onClick={() => handleDescriptionToggle(idx, true)}>
                                    <p className="">और अधिक जानें</p>
                                    <ChevronDownIcon className="h-6"/>
                                </div>

                                {
                                    book.descriptionOpen && (
                                        <div className={`${idx % 2 ? 'md-900:-translate-x-96' : ''} absolute bg-white dark:bg-gray-600 p-4 md-900:w-[500px] w-[270px] -translate-x-32 rounded-xl shadow-lg dark:shadow-gray-300 mx-10 h-[300px] overflow-y-scroll`}>
                                            <div className="">
                                                <XMarkIcon onClick={() => handleDescriptionToggle(idx, false)} className="h-8"/>
                                            </div>
                                            <h1 className="font-bold text-lg mt-3 text-justify">{book.description}</h1>
                                            <p className="text-secondary font-bold mt-4 text-lg">इस सीरीज में निम्नलिखित पुस्तकें शामिल हैं</p>
                                            {
                                                book.contents.map((desc, idx) => (
                                                    <p key={idx} className="text-lg mt-2 text-left">• {desc}</p>
                                                ))
                                            }
                                        </div>
                                    )
                                }

                                {/* buy now */}
                                <button
                                    className="text-center rounded-md text-lg bg-secondary px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                    onClick={() => navigate("/checkout", {state: {data: data}})}
                                >
                                    अभी खरीदें @ ₹{book.price}/-
                                </button>
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default PremiumEbooks;