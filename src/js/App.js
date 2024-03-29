import React, { useEffect } from 'react';
import '../css/App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ContactMe from './components/ContactMe';
import { ThemeProvider } from '@mui/material/styles';
import { currTheme } from './theme';
import { observeAnimateOnScroll } from "./util/util";

function App() {
	useEffect(() => {
		const hiddenElements = document.querySelectorAll('.hidden');
		
		hiddenElements.forEach((el) => observeAnimateOnScroll.observe(el));
	}, []);
	
	return (
		<ThemeProvider theme={currTheme}>
			<Navigation />
			<Hero />
			<AboutMe />
			<ProjectsGrid />
			<ContactMe />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
