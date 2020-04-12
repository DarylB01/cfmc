import React from 'react';
import DelayLink from 'react-delay-link';

const EventCard = (props) => {
	return (
		<article className="event__card">
			<DelayLink
				delay={500}
				to={`/event/${props.id}`}
				clickAction={() => {
					props.setIsLoading(true);
				}}
			>
				<div className="preview" style={{ backgroundImage: `url(${props.previewImg})` }}>
					<div className="filter" />
				</div>
				<div className="text">
					<h3>{props.title}</h3>
					<date>{props.date}</date>
					<p>{props.desc}</p>
				</div>
			</DelayLink>
		</article>
	);
};

export default EventCard;
