import React from 'react';
import '../css/App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';

function App() {
	return (
		<React.Fragment>
			<Hero />
			<AboutMe />
			<ProjectsGrid />
			<Footer />
		</React.Fragment>
	);
}

export default App;
