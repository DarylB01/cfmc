import React, { useState, useEffect } from 'react';
import fetchData from '../fetchData';
//images
import fillerPreview from '../../Images/Live/preview.jpg';
import VideoCard from '../Card';

export const VideoCollection = (props) => {
	//state
	const [ data, setData ] = useState('');
	//initial mount
	useEffect(() => {
		getContentful();
	}, []);
	//get contentful data then set as state
	const getContentful = async () => {
		let res = await fetchData.fetchAll('videos');
		try {
			console.log(res);
			let dataArray = [];
			res.forEach((element) => {
				dataArray.push({
					isVideo: true,
					setIsLoading: props.setIsLoading,
					title: element.fields.title,
					desc: element.fields.description,
					date: element.fields.dateOfEvent,
					src: 'https:' + element.fields.video.fields.file.url.substring(1),
					url: '/video' + element.fields.video.fields.file.url.substring(1),
					previewImg: fillerPreview
				});
			});
			setData(dataArray);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<section className="live__collection">
			<h2 className="collection__title">Our Video Collection</h2>
			<h4 className="collection__subhead">Et et excepteur velit dolor laborum fugiat.</h4>
			<section className="collection__list">
				{data &&
					data.map((vid, index) => {
						return <VideoCard {...vid} />;
					})}
			</section>
		</section>
	);
};
