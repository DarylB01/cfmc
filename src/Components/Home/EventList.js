import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal';
import DelayLink from 'react-delay-link';
//components
import EventCard from '../Card';
//gets data from contentful
import fetchData from '../fetchData';

const EventList = (props) => {
	//state
	const [ data, setData ] = useState('');
	//fetch data from contentful
	const getResponse = async () => {
		let contentfulData = await fetchData.fetchAll('posts');
		try {
			console.log(contentfulData);
			let dataArray = [];
			contentfulData.forEach((element, index) => {
				if (index === 4) {
					return;
				}
				dataArray.push({
					setIsLoading: props.setIsLoading,
					title: element.fields.title,
					desc: element.fields.subHeading,
					date: element.fields.dateOfEvent,
					url: '/event/' + element.sys.id,
					previewImg: 'https:' + element.fields.imgSrc.fields.file.url.substr(1)
				});
			});
			setData(dataArray);
		} catch (err) {
			console.log(err);
		}
	};
	//initial mount
	useEffect(() => {
		getResponse();
	}, []);

	return (
		<section className="events">
			<section className="events__content">
				<Fade duration={200} left>
					<h2 className="events__header">UPCOMING EVENTS</h2>
				</Fade>
				<section className="events__list">
					{data &&
						data.map((item, index) => {
							return <EventCard key={`even${index}`} {...item} />;
						})}
				</section>
				<Fade duration={200} left>
					<DelayLink
						to="/events"
						delay={200}
						clickAction={() => {
							props.setIsLoading(true);
						}}
					>
						<button className="button-link" href="">
							See more
						</button>
					</DelayLink>
				</Fade>
			</section>
		</section>
	);
};

export default EventList;
