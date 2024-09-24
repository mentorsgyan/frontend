import React from "react";
import { useLocation } from "react-router-dom";

const CourseVideoPlayer = () => {
	const location = useLocation();
	const videoId = location.state ? location.state.data.videoId : 'no';
	return (
		<div className="dark:bg-gray-800">
			<VideoTile videoId={videoId}/>
		</div>
	)
}

const VideoTile = ( {videoId} ) => {
	return (
		<iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo Video"
      ></iframe>
	)
}

export default CourseVideoPlayer;