import React from 'react';
import { Typography, Paper } from '@material-ui/core';
const videadetail = ({ video }) => {
	if (!video) return <div>Loading...</div>;

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<Paper elevation={6} style={{ height: '75%'}}>
				<h1>weddw</h1>
				<iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />

				<Typography variant="h4">
					{video.snippet.title}-{video.snippet.channelTitle}
				</Typography>
				<Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
				<Typography variant="subtitle2">{video.snippet.description}</Typography>
			</Paper>
			<Paper elevation={6} style={{ padding: '15px' }}></Paper>
		</div>
	);
};
export default videadetail;
