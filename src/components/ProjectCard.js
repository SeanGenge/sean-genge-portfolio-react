import React from "react";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import '../css/projectCard.scss';

function ProjectCard({ project }) {
	let imagePath = "/images/projects/";
	
	const displayLanguages = () => {
		let languages = [];
		
		for (let i = 0; i < project.languages.length; i++) {
			let language = project.languages[i];
			
			languages.push(<Badge pill bg="primary" key={i} className="project-language">{language}</Badge>);
		}
		
		return languages;
	}
	
	return (
		<Card className="bg-dark text-white project-card">
			<Card.Img className="project-card__image" src={imagePath + project.image} alt={project.image} />
			<Card.ImgOverlay className="project-card__overlay">
				<Card.Title className="project-card__overlay-title blue-colour">{project.name}</Card.Title>
				<Card.Text>
					{project.description}
				</Card.Text>
				<Card.Text>
					{displayLanguages()}
				</Card.Text>
				<Card.Text><a href={project.github} target="blank"><i className="fa fa-brands fa-github github-icon"></i> Github</a></Card.Text>
				<Card.Text><a href={project.deployed} target="blank"><i className="fa fa-solid fa-window-restore deployed-icon"></i> Deployed</a></Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
}

export default ProjectCard;
