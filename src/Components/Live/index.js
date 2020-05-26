import React, { useEffect } from 'react';
//images
import bgImg from '../../Images/Live/live-bg.jpg';
//components
import Banner from '../Banners/Banner1';
import Summary from './Summary';
import { VideoCollection } from './VideoCollection';

const Index = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
		props.setActivePage('VIDEOS');
		props.setDelayIsLoading(false);
	}, []);
	return (
		<main className="live">
			<Banner
				bannerImg={bgImg}
				title={'Our Videos'}
				content={
					<React.Fragment>
						<p>
							Pariatur eu dolore non labore eu et mollit duis in. Sit dolore eiusmod aute labore
							exercitation esse sint sunt quis.
						</p>
					</React.Fragment>
				}
			/>
			<Summary />
			<VideoCollection setIsLoading={props.setIsLoading} />
		</main>
	);
};

export default Index;
