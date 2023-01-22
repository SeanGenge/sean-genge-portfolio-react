import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { importAll } from '../util/images';
import projectList from '../projectData.js';
import { Box, Typography, Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function ProjectsGrid() {
	const [images, setImages] = useState([]);
	
	useEffect(() => {
		setImages(importAll(require.context('../../../public/images/projects', false, /\.(png|jpe?g|svg)$/)));
	}, []);
	
	let projectCards = projectList.map((project, id) => {
		return (
			<Grid2 xs={12} md={4} key={id}>
				<Box display="flex" justifyContent="center" padding="1em">
					<ProjectCard project={project} imageData={images[project.image]} />
				</Box>
			</Grid2>
		);
	});
	
	return (
		<Box textAlign="center" marginTop="5em">
			<Typography variant="h3" sx={{marginBottom: "1em"}}>My Projects</Typography>
			<Container>
				<Grid2 container rowSpacing={2} className="no-margin">
					{projectCards}
				</Grid2>
			</Container>
		</Box>
	);
};

export default ProjectsGrid;