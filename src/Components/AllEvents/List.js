import React, {
	useState,
	useEffect
} from 'react';
//images
import fillerImg from '../../Images/AllEvents/filler-img.jpg';
//components
import EventCard from '../Card';
//compontent for retrieving data
import fetchData from '../fetchData';

const List = (props) => {
	//state
	const [ data, setData ] = useState([]);
	//get data for events
	const getResponse = async () => {
		let apiData = await fetchData.fetchAll(
			'posts'
		);
		try {
			let dataArray = [];
			apiData.forEach((element) => {
				dataArray.push({
					setIsLoading:
						props.setIsLoading,
					title: element.fields.title,
					desc:
						element.fields.subHeading,
					date:
						element.fields
							.dateOfEvent,
					url:
						'/event/' +
						element.sys.id,
					previewImg:
						'https:' +
						element.fields.imgSrc
							.fields.file.url
				});
			});
			setData(dataArray);
		} catch (err) {
			console.log(err);
		}
	};
	//functions to run on intial mount
	useEffect(() => {
		getResponse();
	}, []);

	const eventList = [];
	//filler data for events
	for (let i = 0; i < 10; i++) {
		eventList.push({
			title: 'Dolore quis esse.',
			date: 'June 12, 2020',
			desc: 'Veniam reprehenderit.',
			previewImg: fillerImg
		});
	}

	return (
		<section className="allevents__list">
			{data.map((item, index) => {
				return (
					<EventCard
						key={`event${index}`}
						{...item}
					/>
				);
			})}
		</section>
	);
};

export default List;
