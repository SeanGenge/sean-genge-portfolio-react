import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projects from '../projects.json';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
	const renderProjects = () => {
		let projectCards = [];
		for (let i = 0; i < projects.length; i++) {
			projectCards.push(<Col xs={12} sm={6} lg={4} key={i}><ProjectCard project={projects[i]} /></Col>);
		}
		
		return projectCards;
	};
	
	return (
		<Row>
			{renderProjects()}
		</Row>
	);
}

export default Portfolio;
