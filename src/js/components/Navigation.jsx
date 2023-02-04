import React from "react";
import { Box, Container, Button, Link } from '@mui/material';

function Navigation() {
	const paddingTop = 2;
	const paddingBottom = 4;
	
	return (
		<Container>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', paddingTop: `${paddingTop}em`, paddingBottom: `${paddingBottom}em` }}>
				<Link href="#projects" underline="none">
					<Button variant="text">My Projects</Button>
				</Link>
				<Link href="#contact-me" underline="none">
					<Button variant="text">Contact Me</Button>
				</Link>
				<Link href="/seangengecv.pdf" target="_blank" underline="none"sx={{marginLeft: '2em'}}>
					<Button variant="outlined">Resume</Button>
				</Link>
			</Box>
		</Container>
	);
};

export default Navigation;