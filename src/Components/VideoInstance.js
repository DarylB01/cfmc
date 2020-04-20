import React, { useEffect, useState } from 'react';
//fetch data from api
import fetchData from './fetchData';

const VideoInstance = (props) => {
	const [ data, setData ] = useState('');
	useEffect(() => {
		const getData = async () => {
			let res = await fetchData.fetchOne(`${props.match.params.id}`);
			try {
				setData(res.video.fields.file.url);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
		props.setDelayIsLoading(false);
	}, []);

	return (
		<div className="videoInstance">
			{data && (
				<video preload controls>
					<source src={`https:${data}`} />
				</video>
			)}
		</div>
	);
};

export default VideoInstance;
