import React from "react";
import Card from 'react-bootstrap/Card';
import '../css/projectCard.scss';

function ProjectCard({ project }) {
	let imagePath = "/images/projects/";
	
	return (
		<Card className="bg-dark text-white project-card">
			<Card.Img className="project-card__image" src={imagePath + project.image} alt={project.image} />
			<Card.ImgOverlay className="project-card__overlay">
				<Card.Title className="project-card__overlay-title blue-colour">{project.name}</Card.Title>
				<Card.Text>
					{project.description}
				</Card.Text>
				<Card.Text><a href={project.github} target="blank"><i className="fa fa-brands fa-github github-icon"></i></a></Card.Text>
				<Card.Text><a href={project.github} target="blank"><i class="fa-solid fa-tablet-screen-button"></i></a></Card.Text>
			</Card.ImgOverlay>
		</Card>
	);
}

export default ProjectCard;
