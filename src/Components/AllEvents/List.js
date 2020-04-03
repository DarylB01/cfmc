import React from 'react';
//
images
const List = () => {
	return <section className="allevents__list" />;
};

const Item = (props) => {
	<article className="list__card">
		<h3>{props.title}</h3>
		<date>{props.date}</date>
		<p>{props.desc}</p>
	</article>;
};

export default List;
