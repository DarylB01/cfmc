import React from 'react';
//images
import cfmcLogo from '../../Images/Navbar/cfmcLogo.png';
const index = () => {
	const navItems = [ 'HOME', 'ABOUT', 'EVENTS', 'BELIEFS', 'CONTACT' ];

	return (
		<section className="nav__container">
			<nav className="nav">
				<img alt="cfmc logo" className="logo" src={cfmcLogo} />
				<ul className="links">
					{navItems.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</nav>
		</section>
	);
};

export default index;
