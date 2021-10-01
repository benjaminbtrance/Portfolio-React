import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import PortfolioList from './components/PortfolioList';
import myPortfolio from './portfolio';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<AboutMe />
			<PortfolioList myPortfolioList={myPortfolio} />
		</>
	);
}

export default App;
