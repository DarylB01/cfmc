import React from 'react';
//Components
import Navbar from './Components/Navbar/index';
import Home from './Components/Home/index';
import Footer from './Components/Footer/index';

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Home />
			<Footer />
		</React.Fragment>
	);
};

export default App;
