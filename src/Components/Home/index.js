import React, { useEffect } from 'react';

import Fade from 'react-reveal';
//images
import churchImg from '../../Images/Home/church-bg.jpg';
//components
import ImgGallery from './ImgGallery';
import EventList from './EventList';
import ShortLive from './ShortLive';
import ShortAbout from './ShortAbout';

const Index = (props) => {
	useEffect(() => {
		props.setActivePage('HOME');
		props.setDelayIsLoading(false);
		window.scrollTo(0, 0);
	}, []);
	return (
		<React.Fragment>
			<main className="home">
				<section className="bgfilter" />
				<img
					className="bg"
					alt="bible"
					src={churchImg}
				/>
				<section className="home__content">
					<Fade left duration={200}>
						<ImgGallery />
					</Fade>
					<Fade right>
						<section className="home__text">
							<h2>
								A Caring Church
								for changing
								times.
							</h2>
							<p>
								Occaecat dolore
								veniam velit ut
								ullamco
								exercitation
								aliquip ut ut
								pariatur
								incididunt tempor.
								Labore labore
								ipsum adipisicing
								anim laborum est
								quis irure labore
								enim nostrud
								consequat aliquip.
								Mollit aliqua
								ullamco magna
								irure consectetur
								consectetur.
							</p>
						</section>
					</Fade>
				</section>
			</main>
			<ShortLive
				setIsLoading={props.setIsLoading}
			/>
			<ShortAbout
				setIsLoading={props.setIsLoading}
			/>
			<EventList
				setIsLoading={props.setIsLoading}
			/>
		</React.Fragment>
	);
};

export default Index;
