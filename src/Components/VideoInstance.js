import React, { useEffect } from 'react';

const VideoInstance = (props) => {
	useEffect(() => {
		props.setIsLoading(false);
	}, []);
	return (
		<div className="videoInstance">
			<video controls>
				<source src={'https:' + props.location.pathname.substring(6)} />
			</video>
		</div>
	);
};

export default VideoInstance;
