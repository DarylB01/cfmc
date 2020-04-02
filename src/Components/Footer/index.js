import React from 'react';
//img list
import emailImg from '../../Images/Footer/email.png';
import locationImg from '../../Images/Footer/location.png';
import phoneImg from '../../Images/Footer/phone.png';
import footerBg from '../../Images/Footer/footer-bg.jpg';

const index = () => {
	//to be used for the contacts
	const contactItems = [
		{ content: '325 Holy Road', imgSrc: locationImg },
		{ content: 'holychurch@yahoo.com', imgSrc: emailImg },
		{ content: '(403)-512-6128', imgSrc: phoneImg }
	];
	//To be looped through the links
	const linkItems = [ 'ABOUT', 'EVENTS', 'GALLERY', 'CONTACT' ];
	return (
		<footer className="footer">
			<section className="footer__img" style={{ backgroundImage: `url(${footerBg})` }} />
			<section className="footer__content">
				<section className="footer__newsletter">
					<h3>Newsletter</h3>
					<div class="input__button">
						<input placeholder="E-mail Address" type="email"></input>
						<button>Sign Up</button>
					</div>
				</section>
				<section className="footer__contact">
					<h3 className="title">Contact</h3>
					<ul className="list">
						{contactItems.map((item, index) => {
							return (
								<li key={index}>
									<img src={item.imgSrc} />
									{item.content}
								</li>
							);
						})}
					</ul>
				</section>
				<section className="footer__links">
					<h3>Links</h3>
					<ul>
						{linkItems.map((item, index) => {
							return (
								<li key={index}>
									<a href="">{item}</a>
								</li>
							);
						})}
					</ul>
				</section>
				<section className="footer__schedule">
					<h3>Schedule</h3>
					<time>Sundays 1:30 p.m. to 3:30 p.m.</time>
				</section>
			</section>
		</footer>
	);
};

export default index;
