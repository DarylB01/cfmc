import React from 'react';
//images
const Item = (props) => {
	return (
		<article className="about__item">
			<img src={props.img} className="picture" alt="group of people" />
			<div className="text">
				<h3>{props.title}</h3>
				<p>{props.desc}</p>
			</div>
		</article>
	);
};

export default Item;
