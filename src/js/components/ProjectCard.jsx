import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Skeleton, Link, Chip } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

function ProjectCard({ project, imageData }) {
	const image = imageData ?? "";
	const primaryLanguages = project.primaryLanguages.map((language, id) => {
		return (
			<Grid2 key={id} sx={{marginRight: '.5em'}}>
				<Chip label={language} variant="outlined" />
			</Grid2>
		);
	});
	
	const cardWidth = 35;
	const cardHeight = 30;
	const cardMediaHeight = 15;
	// 5 is how much room you want left over at the bottom of the card
	const cardContentHeight = cardHeight - cardMediaHeight - 5;
	
	return (
		<Card variant="outlined" sx={{ width: `${cardWidth}rem}`, height: `${cardHeight}rem`, marginTop: '1em', marginBottom: '1em', marginLeft: '2em', marginRight: '2em' }}>
			{
				image ?
				<CardMedia
					sx={{ height: `${cardMediaHeight}rem` }}
					image={image}
					title={project.name}
				/>
				:
				<Skeleton animation="wave" variant="rectangular" height={140} />
			}
			<CardContent
				sx={{height: `${cardContentHeight}rem`}}>
				<Typography gutterBottom variant="h5" component="div">
					{project.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{project.description}
				</Typography>
				<Grid2 container rowSpacing={2} sx={{marginTop: '1em'}}>
					{primaryLanguages}
				</Grid2>
			</CardContent>
			<CardActions>
				<Button size="small" startIcon={<GitHubIcon />} href={project.github} underline="none" target="_blank" component={Link}>
					Github
				</Button>
				<Button size="small" startIcon={<OpenInBrowserIcon />} href={project.deployed} underline="none" target="_blank" component={Link}>
					View Website
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProjectCard;