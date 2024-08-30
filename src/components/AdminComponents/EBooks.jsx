import React, { useState } from "react";
import axios from 'axios';
import { BACKEND_API } from "../../utility/Constants";
import { XMarkIcon } from "@heroicons/react/24/outline";

const EBooks = () => {

    const [seriesName, setSeriesName] = useState('');
    const [price, setPrice] = useState();
    const [driveSharingLink, setDriveSharingLink] = useState('');
    const [folderLink, setFolderLink] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [contents, setContents] = useState('');
    const [showPreview, setShowPreview] = useState('');

    function handlePreview(e) {
        e.preventDefault();
        const folderId = folderLink.split('/').at(-1);
        const contentList = contents.split('\n');
        let data = {
            seriesTitle: seriesName,
            price: price,
            sharingLink: driveSharingLink,
            folderId: folderId,
            descriptionOpen: false,
            description: description,
            contents: contentList,
            imageUrl: imageUrl
        }
        setShowPreview(true);
    }

    const handleEbooksUpload = async (e) => {
        e.preventDefault();
        const folderId = folderLink.split('/').at(-1);
        const contentList = contents.split('\n');
        let data = {
            seriesTitle: seriesName,
            price: price,
            sharingLink: driveSharingLink,
            folderId: folderId,
            descriptionOpen: false,
            description: description,
            contents: contentList,
            imageUrl: imageUrl
        }
        try {
            // const response = await axios.post(BACKEND_API + 'saveEbooks', {seriesName :seriesName, price: price, driveSharingLink: driveSharingLink, folderId: folderId});
            const response = await axios.post(BACKEND_API + '/saveEbooks', data);
            if (response.status === 200) {
                alert("E-Book created successfully");
                // setSeriesName('')
                // setPrice('');
                // setDriveSharingLink('');
                // setFolderLink('');
                // setImageUrl('');
                // setDescription('');
                // setContents('');
            }
            else
                alert("Error occured while saving E-Book ", response.status);
        } catch (error) {
            console.log("error occurred", error);
        }
        
        
    }

    return (
        <div className="container rounded-3xl bg-gray-800 shadow-2xl text-white py-2 my-2 font-mukta">
            {/* {
                showPreview && 
                <div className="absolute bg-white text-black w-[500px]">
                    <XMarkIcon className="h-8" onClick={() => setShowPreview(false)}/>
                    <p><strong>Title: </strong>{seriesName}</p>
                    <p><strong>Price: </strong>₹{price}</p>
                    <p><strong>Drive Sharing link: </strong><a href={driveSharingLink} className="hover:underline text-secondary">[drive link]</a></p>
                    <p><strong>Drive Folder Link: </strong><a href={folderLink} className="hover:underline text-secondary">[Folder link]</a></p>
                    <p><strong>Image link: </strong><a href={imageUrl} className="hover:underline text-secondary">[Image Url]</a></p>
                    <p><strong>Description: </strong>{description}</p>
                    <p>
                        <strong>Contents: </strong>
                        {
                            data.contents.map((data) => (
                                <p>{data}</p>
                            ))
                        }
                    </p>
                </div>
            } */}
            <h1 className="text-center text-3xl font-bold tracking-tight mt-10">Paid EBooks Uploader</h1>
            {/* Title | Price | Drive Link input fields*/}
            {/* <form onSubmit={handleEbooksUpload} className="my-10 flex flex-col items-center justify-center gap-5"> */}
            <h1 className="text-xl font-bold text-center text-secondary mt-5">Enter course details</h1>
            <div className="my-10 flex flex-col items-center justify-center gap-5">
                <div className="grid md-900:grid-cols-4 grid-cols-2 gap-10 justify-evenly">
                   <input
                    type="text"
                    required
                    placeholder="Series Title"
                    className="text-black rounded-lg"
                    value={seriesName}
                    onChange={(e) => setSeriesName(e.target.value)}
                   /> 
                   <input
                    type="text"
                    required
                    placeholder="Price (₹)"
                    className="text-black rounded-lg"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                   /> 
                   <input
                    type="text"
                    required
                    placeholder="Drive sharing link"
                    className="text-black rounded-lg"
                    value={driveSharingLink}
                    onChange={(e) => setDriveSharingLink(e.target.value)}
                   />
                   <input
                    type="text"
                    required
                    placeholder="Drive Folder link"
                    className="text-black rounded-lg"
                    value={folderLink}
                    onChange={(e) => setFolderLink(e.target.value)}
                   />
                   <input
                    type="text"
                    required
                    placeholder="Image Link"
                    className="text-black rounded-lg"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                   /> 
                </div>
                {/* Description section */}
                <h1 className="text-xl text-secondary font-bold">Enter Description</h1>
                <div className="grid grid-cols-2 gap-10">
                    <textarea className="bg-gray-700 text-white" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <textarea className="bg-gray-700 text-white" cols="30" rows="10" placeholder="Enter contents" value={contents} onChange={(e) => setContents(e.target.value)}/>
                </div>
                <div className="flex justify-evenly gap-10">
                    <button onClick={handlePreview} className="bg-secondary p-2 text-lg w-24 rounded-md font-bold">Preview</button>
                    <button onClick={handleEbooksUpload} className="bg-secondary p-2 text-lg w-24 rounded-md font-bold">Submit</button>
                </div>
                </div>
            {/* </form> */}
        </div>
    )
}

export default EBooks;