import React from 'react';
//images
import liveImg from '../../Images/Home/liveImg.jpg';
import liveIcon from '../../Images/Home/liveIcon.png';
const Live = () => {
	return (
		<section className="live">
			<section className="live__content">
				<section className="text">
					<img alt="video camera" src={liveIcon} />
					<h3>Join us on Facebook Live!</h3>
					<p>
						Tempor elit ut ex aute cupidatat consectetur cupidatat elit do. Esse consequat pariatur magna ut
						enim amet. Id in irure magna esse culpa mollit excepteur magna. Ex consectetur in ex veniam
						magna dolor do exercitation irure minim minim. Pariatur consequat aliquip ullamco fugiat aliquip
						magna deserunt. Consectetur nostrud consectetur ut veniam Lorem quis ex.
						<br />
						<br />
						Duis amet ad labore magna deserunt aliquip nostrud labore. Ut dolor ad irure ex. Do consectetur
						est cupidatat in irure est ut ex enim anim velit reprehenderit ad. Deserunt laboris elit velit
						cupidatat laborum magna commodo enim enim sit eu aliqua consectetur.
					</p>
                    <a href="">  - Join us LIVE</a>
				</section>
				<section className="img">
					<img src={liveImg} />
					<div className="filter" />
				</section>
			</section>
		</section>
	);
};

export default Live;
