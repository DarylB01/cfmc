import React, { useState, useEffect } from 'react';
import DelayLink from 'react-delay-link';
//images
import fillerImg from '../../Images/AllEvents/filler-img.jpg';
//components
import EventCard from '../EventCard';
//compontent for retrieving data
import fetchData from './fetchData';

const List = (props) => {
	//state
	const [ data, setData ] = useState([]);
	//get data for events
	const getResponse = async () => {
		let contentfulData = await fetchData();
		try {
			console.log(contentfulData);
			let dataArray = [];
			contentfulData.forEach((element) => {
				dataArray.push({
					title: element.fields.title,
					desc: element.fields.subHeading,
					date: element.fields.dateOfEvent,
					id: element.sys.id,
					previewImg: 'https:' + element.fields.imgSrc.fields.file.url.substr(1)
				});
			});
			console.log(dataArray);
			setData(dataArray);
		} catch (err) {
			console.log(err);
		}
	};
	//functions to run on intial mount
	useEffect(() => {
		getResponse();
	}, []);

	const eventList = [];
	//filler data for events
	for (let i = 0; i < 10; i++) {
		eventList.push({
			title: 'Dolore quis esse.',
			date: 'June 12, 2020',
			desc: 'Veniam reprehenderit.',
			previewImg: fillerImg
		});
	}

	return (
		<section className="allevents__list">
			{data.map((item, index) => {
				return <EventCard key={`event${index}`} {...item} />;
			})}
		</section>
	);
};

export default List;
