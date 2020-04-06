import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
//components

const Description = () => {
	return (
		<section className="live__summary">
			<VideoFB />
			<article className="live__text">
				<h2>Lorem consequat ipsum anim est amet aliqua nulla sint in pariatur ut proident qui ut.</h2>
				<p>
					Voluptate esse qui incididunt in eu duis. Quis dolor occaecat mollit est pariatur amet. Magna magna
					eiusmod incididunt pariatur aliquip cillum sint voluptate qui. Ullamco voluptate adipisicing esse
					aliquip nulla et tempor mollit exercitation ut non est anim eu.
					<br />
					<br />
					Anim nostrud adipisicing ex elit labore ex mollit incididunt ut enim. Cupidatat aute labore officia
					sunt deserunt dolore exercitation id fugiat laboris consequat velit. Dolor incididunt quis
					exercitation elit sit exercitation commodo minim aute. Officia sint fugiat mollit eu duis.
				</p>
				<h4>Stay Informed</h4>
				<div className="newsletter">
					<input type="email" placeholder="E-mail Address" />
					<button>Sign Up</button>
				</div>
			</article>
		</section>
	);
};

const VideoFB = () => {
	return (
		<article className="live__vid">
			<video controls>
				<source />
			</video>
		</article>
	);
};

export default Description;
