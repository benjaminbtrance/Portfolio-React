import jsQuizImg from './images/js-quiz.JPG';
import pwGeneratorImg from './images/generate-password-js.JPG';
import openWeaterImg from './images/weather-api.JPG';

const myPortfolio = [
	{
		id: 'myPortfolio1',
		name: 'Javascript Quiz',
		img: jsQuizImg,
		description: 'Here is a Javascript quiz that I created.',
		github: 'https://github.com/benjaminbtrance/js-code-quiz',
		githubPages: 'https://benjaminbtrance.github.io/js-code-quiz/',
	},
	{
		id: 'myPortfolio2',
		name: 'Generate Password With Javascript',
		img: pwGeneratorImg,
		description:
			'I created a password generator that will ask a user for the password requirements. Then it will generate a random password',
		github: 'https://github.com/benjaminbtrance/generate-password-with-js',
		githubPages: 'https://benjaminbtrance.github.io/generate-password-with-js/',
	},
	{
		id: 'myPortfolio3',
		name: 'OpenWeather API',
		img: openWeaterImg,
		description:
			'I used the OpenWeather API to display the current day weather and the 5-day forcast for the city that is searched.',
		github:
			'https://github.com/benjaminbtrance/server-side-api-weather-dashboard',
		githubPages:
			'https://benjaminbtrance.github.io/server-side-api-weather-dashboard/',
	},
];

export default myPortfolio;
