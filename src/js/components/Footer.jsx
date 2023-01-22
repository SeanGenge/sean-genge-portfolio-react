import React from "react";
import { Box, Typography, Container, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
	const iconSize = 2.5;
	
	return (
		<Box className="separator-box" height="5rem" marginTop="5em">
			<Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<Typography variant="body1" paragraph>
					<Link href="https://github.com/SeanGenge" target="_blank" underline="none">
						<GitHubIcon sx={{ verticalAlign: "middle", fontSize: `${iconSize}rem` }} />
					</Link>
					<Link href="https://www.linkedin.com/in/seangenge/" target="_blank" underline="none">
						<LinkedInIcon sx={{ verticalAlign: "middle", fontSize: `${iconSize}rem` }} />
					</Link>
				</Typography>
				<Typography variant="body1" paragraph>
					Handcrafted by me using React and hosted using AWS.
				</Typography>
				<Typography variant="body1" paragraph>
					You can view my portfolio code <Link href="https://github.com/SeanGenge/sean-genge-portfolio-react" target="_blank" underline="none">here</Link> <CopyrightIcon sx={{ verticalAlign: "middle" }} /> 2023
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;