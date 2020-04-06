import React, { useState, lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import Navbar from './Components/Navbar/index';
import Footer from './Components/Footer/index';
import Loader from './Components/Loader';
//lazy Components
const Home = lazy(() => import('./Components/Home/index'));
const About = lazy(() => import('./Components/About/index'));
const AllEvents = lazy(() => import('./Components/AllEvents/index'));
const Live = lazy(() => import('./Components/Live/index'));
const EventInstance = lazy(() => import('./Components/EventInstance/index'));
const Contact = lazy(() => import('./Components/Contact/index'));

const App = () => {
	const [ activePage, setActivePage ] = useState('HOME');
	const [ isLoading, setIsLoading ] = useState(false);
	return (
		<React.Fragment>
			<Router>
				{/* <Loader /> */}
				<Navbar activePage={activePage} setIsLoading={setIsLoading} />
				<Switch>
					<Route exact path="/">
						<Suspense fallback={<Loader />}>
							<Home setActivePage={setActivePage} setIsLoading={setIsLoading} />
						</Suspense>
					</Route>
					<Route path="/about">
						<Suspense fallback={<Loader />}>
							<About setActivePage={setActivePage} setIsLoading={setIsLoading} />
						</Suspense>
					</Route>
					<Route path="/events">
						<Suspense fallback={<Loader />}>
							<AllEvents setActivePage={setActivePage} setIsLoading={setIsLoading} />
						</Suspense>
					</Route>
					<Route path="/live">
						<Suspense fallback={<Loader />}>
							<Live setActivePage={setActivePage} setIsLoading={setIsLoading} />
						</Suspense>
					</Route>
					<Route path="/instance">
						<Suspense fallback={<Loader />}>
							<EventInstance setActivePage={setActivePage} setIsLoading={setIsLoading} />
						</Suspense>{' '}
					</Route>
					<Route path="/contact">
						<Suspense fallback={<Loader />}>
							<Contact setActivePage={setActivePage} setIsLoading={setIsLoading} />
						</Suspense>{' '}
					</Route>
				</Switch>
				<Footer />
			</Router>
		</React.Fragment>
	);
};

export default App;
