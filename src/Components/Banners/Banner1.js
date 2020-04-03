import React from 'react';

const Banner = (props) => {
	return (
		<section className="about__banner" style={{ backgroundImage: `url(${props.bannerImg})` }}>
			<div className="banner__filter" />
			<section className="banner__text">
				<h2>{props.title}</h2>
				{props.content}
				
			</section>
		</section>
	);
};

export default Banner;
