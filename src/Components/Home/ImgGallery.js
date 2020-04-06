import React from 'react';
import ImageGallery from 'react-image-gallery';
//CSS
import 'react-image-gallery/styles/css/image-gallery.css';
//images
import churchImg1 from '../../Images/Home/gallery (1).jpg';
import churchImg2 from '../../Images/Home/gallery (2).jpg';
import churchImg3 from '../../Images/Home/gallery (3).jpg';

const ImgGallery = (props) => {
	const images = [ { original: churchImg1 }, { original: churchImg2 }, { original: churchImg3} ];
	return (
		<section className="imageGallery">
			<ImageGallery
				items={images}
				showThumbnails={false}
				autoPlay={true}
				slideInterval={5000}
				showBullets={true}
				showPlayButton={false}
			/>
		</section>
	);
};

export default ImgGallery;
