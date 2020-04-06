import React from 'react';
//Loader
import BeatLoader from 'react-spinners/BeatLoader';
const Loader = (props) => {
	return (
		<div className="loader">
			<BeatLoader />
		</div>
	);
};

export default Loader;
