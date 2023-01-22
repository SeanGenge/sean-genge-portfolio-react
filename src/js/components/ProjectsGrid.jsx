import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { importAll } from '../util/images';
import projectData from '../projectData.js';
import { Box, Typography, Container, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function ProjectsGrid() {
	const [images, setImages] = useState([]);
	const [currFilter, setCurrFilter] = useState("All");
	const [projectCards, setProjectCards] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState([]);
	
	useEffect(() => {
		setImages(importAll(require.context('../../../public/images/projects', false, /\.(png|jpe?g|svg)$/)));
		setFilteredProjects(projectData)
	}, []);
	
	useEffect(() => {
		const tmpProjectCards = filteredProjects.map((project, id) => {
			return (
				<Grid2 xs={12} md={4} key={id}>
					<Box display="flex" justifyContent="center" padding="1em">
						<ProjectCard project={project} imageData={images[project.image]} />
					</Box>
				</Grid2>
			);
		});
		
		setProjectCards(tmpProjectCards);
	}, [images, filteredProjects]);
	
	const handleChange = (event, newFilter) => {
		setCurrFilter(newFilter);
		
		setFilteredProjects(projectData.filter(project => project.primaryLanguages.includes(newFilter) || project.secondaryLanguages.includes(newFilter) || newFilter === "All"));
	};
	
	return (
		<Box textAlign="center" marginTop="5em">
			<Typography variant="h3" sx={{marginBottom: "1em"}}>My Projects</Typography>
			<ToggleButtonGroup
				color="primary"
				value={currFilter}
				exclusive
				onChange={handleChange}
				aria-label="Platform"
			>
				<ToggleButton value="All">All</ToggleButton>
				<ToggleButton value="React">React</ToggleButton>
				<ToggleButton value="Node.js">Node.js</ToggleButton>
			</ToggleButtonGroup>
			<Container>
				<Grid2 container rowSpacing={2} className="no-margin">
					{projectCards}
				</Grid2>
			</Container>
		</Box>
	);
};

export default ProjectsGrid;