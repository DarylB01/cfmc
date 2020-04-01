import React from 'react';
//images
import fillerImg from '../../Images/Events/fillerEventImg.jpg';

const index = () => {
	const eventsArray = [];

	for (let i = 0; i < 4; i++) {
		eventsArray.push({
			title: 'Lorem ipsum dolor',
			date: 'Jan 01, 2020',
			desc:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada ipsum in nisl placerat eleifend.'
		});
	}
	return (
		<section className="events">
			<header className="events__header">UPCOMING EVENTS</header>
			<section className="events__list">
				{eventsArray.map((item, index) => {
					return (
						<li className="event" key={index} style={{ backgroundImage: `url(${fillerImg})` }}>
							<img className="filter" />
							<div>
								<h4 className="event__title">{item.title}</h4>
								<h6 className="event__date">{item.date}</h6>
								<p className="event__desc">{item.desc}</p>
							</div>
						</li>
					);
				})}
			</section>
		</section>
	);
};

export default index;
