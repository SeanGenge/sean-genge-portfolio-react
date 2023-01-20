import '../css/App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
	return (
		<div className="App">
			<Hero />
			<AboutMe />
			<Projects />
		</div>
	);
}

export default App;
