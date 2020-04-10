import React, { useEffect, useState } from 'react';
//Components
import Banner from '../Banners/Banner1';
import List from './List';

//Images
import bannerImg from '../../Images/Events/banner-img.jpg';

const Index = (props) => {
	
	//initial mount
	useEffect(() => {
		
		window.scrollTo(0, 0);
		props.setActivePage('EVENTS');
		props.setDelayIsLoading(false);
	}, []);
	return (
		<main className="allevents">
			<Banner
				title={'Events'}
				bannerImg={bannerImg}
				content={
					<p>
						Sint culpa ullamco dolor ut anim cillum sint aliquip cupidatat ut fugiat cupidatat aliqua.
						Labore tempor est ullamco cupidatat aliqua duis nulla. <br />
						<br />
						Pariatur ut aliquip et ea sunt amet occaecat consequat ad reprehenderit laborum id exercitation.
						Aute non sit adipisicing ut duis adipisicing laborum commodo.
					</p>
				}
			/>
			<section className="allevents__content content">
				<h3>This is a calender of all our upcoming events this year</h3>
				<p>You can contact us in the link below if you want us to fill you in on any upcoming events.</p>
				<List setIsLoading={props.setIsLoading} />
			</section>
		</main>
	);
};
export default Index;
