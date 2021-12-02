import pet_fetch from './images/pet-fetch.jpg';
import guitars from './images/3jb-guitars.jpg';
import top_stop_travel from './images/top-stop-travel.jpg';

const myPortfolio = [
	{
		id: 'myPortfolio1',
		name: 'Pet Fetch',
		img: pet_fetch,
		description:
			'This application is a website where a user can create an account and post information about their missing pet. Anyone can search the city to see if there are any missing pets and can contact the owner.',
		github: 'https://github.com/benjaminbtrance/lost-pet-finder',
		view: "window.location.href='https://lost-pet-finder.herokuapp.com/';",
		alt: 'Picture of the Pet Fetch App',
	},
	{
		id: 'myPortfolio2',
		name: '3JB Guitars',
		img: guitars,
		description:
			'This application is an e-commerce website that sells guitar and guitar equipment. As an admin you can manage the website by creating, updating, and deleting inventory.',
		github: 'https://github.com/benjaminbtrance/e-commerce-admin-gui',
		view: 'https://nameless-sands-13810.herokuapp.com/',
		alt: 'Picture of the 3JB Guitars App',
	},
	{
		id: 'myPortfolio3',
		name: 'Top Stop Travel',
		img: top_stop_travel,
		description:
			'I used the OpenWeather API to display the current day weather and the 5-day forcast for the city that is searched.',
		github: 'https://github.com/benjaminbtrance/TopStopTravel',
		view: 'https://benjaminbtrance.github.io/TopStopTravel/',
		alt: 'Picture of the Top Stop Travel App',
	},
];

export default myPortfolio;
