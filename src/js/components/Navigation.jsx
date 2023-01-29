import React from "react";
import { Box, Container, Button, Link } from '@mui/material';

function Navigation() {
	const padding = 2;
	
	return (
		<Container>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', paddingTop: `${padding}em`, paddingBottom: `${padding}em` }}>
				<Link href="#projects" underline="none">
					<Button variant="text">My Projects</Button>
				</Link>
				<Link href="/seangengecv.pdf" target="_blank" underline="none"sx={{marginLeft: '1em'}}>
					<Button variant="outlined">Resume</Button>
				</Link>
			</Box>
		</Container>
	);
};

export default Navigation;