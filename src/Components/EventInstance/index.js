import React, { useEffect } from 'react';
//images
import fillerBg from '../../Images/filler-event.jpg';
import locationImg from '../../Images/EventInstance/location.png';
import calendarImg from '../../Images/EventInstance/calendar.png';
import moneyImg from '../../Images/EventInstance/money.png';
import facebookImg from '../../Images/EventInstance/facebook.png';
//components
import Banner from '../Banners/Banner1';
//get data from contentful
import fetchData from '../fetchData';

const Index = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
		props.setActivePage('EVENTS');
		props.setDelayIsLoading(false);

		//fetching contentful
		fetchData.fetchOne(props.match.params.id);
	}, []);
	return (
		<main className="event__instance">
			<Banner
				bannerImg={fillerBg}
				title={'Filler Title for the Event'}
				content={<p>Ad elit cillum labore elit ipsum nulla laboris nisi.</p>}
			/>
			<section className="event__instance__content">
				<section className="content__info">
					<div className="item">
						<img src={calendarImg} />
						<div>
							<h4>Date</h4>
							<div className="">June 05, 2020</div>
						</div>
					</div>
					<div className="item">
						<img src={locationImg} />
						<div>
							<h4>Location</h4>
							<div className="">Officia non consectetur amet.</div>
						</div>
					</div>
					<div className="item">
						<img src={moneyImg} />
						<div>
							<h4>Cost</h4>
							<div className="">$50</div>
						</div>
					</div>
				</section>
				<section className="content__text">
					<h2>Ut fugiat nisi eiusmod duis exercitation ex magna sint laborum ad culpa aliqua.</h2>
					<p>
						Non minim amet occaecat cupidatat id reprehenderit Lorem adipisicing id laboris cupidatat in
						excepteur voluptate. Officia non aliqua aliquip proident culpa eu magna. Officia laborum culpa
						consectetur id non consequat.
						<br />
						<br /> Dolore esse ad ex officia irure ipsum in sint nisi officia in. Dolore et non amet dolor
						minim ut Lorem eu non. Dolore laboris mollit ea et officia est nulla nostrud ullamco elit. Non
						eu dolor eu eiusmod esse consectetur exercitation mollit laboris cillum adipisicing.
						<br />
						<br /> Fugiat ea in adipisicing consectetur ea et ullamco eu est tempor commodo nisi consequat
						reprehenderit. In mollit sint exercitation sunt veniam mollit nulla enim. Consequat eu aliquip
						culpa ut amet. Nisi velit voluptate in duis proident voluptate laboris minim aliqua deserunt
						deserunt ea voluptate. Anim irure aute enim nulla nisi magna irure do labore aliqua consectetur.
						Laborum magna anim consectetur sunt excepteur proident.
					</p>
					<a href="">
						Share on <img src={facebookImg} />
					</a>
				</section>
			</section>
		</main>
	);
};

export default Index;
