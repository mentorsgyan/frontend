import React from "react";
import { BiPlayCircle } from "react-icons/bi";

const VideoThumbnailCard = ({thumbnail, link}) => {
    return (
        <div>
            <div className="relative w-full max-w-40 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200 mx-auto md:mx-0">
                <img src={thumbnail} alt="Course Introduction Thumbnail" className="w-full h-auto" />
                <a href={link} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity"><BiPlayCircle className="text-7xl"/></a>
            </div>
        </div>
    )
}

export default VideoThumbnailCard