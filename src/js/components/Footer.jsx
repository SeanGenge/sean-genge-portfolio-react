import React from "react";
import { Box, Typography, Container, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
	const iconSize = 2.5;
	
	return (
		<Box className="separator-box" marginTop="10em" height="5rem">
			<Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
				<Typography variant="body1" paragraph>
					<Link href="https://github.com/SeanGenge" target="_blank">
						<GitHubIcon sx={{ verticalAlign: "middle", fontSize: `${iconSize}rem` }} />
					</Link>
					<Link href="https://www.linkedin.com/in/seangenge/" target="_blank">
						<LinkedInIcon sx={{ verticalAlign: "middle", fontSize: `${iconSize}rem` }} />
					</Link>
				</Typography>
				<Typography variant="body1" paragraph>
					Coded and designed by me <CopyrightIcon sx={{verticalAlign: "middle"}} /> 2023
				</Typography>
				<Typography variant="body1" paragraph>
					Open source. View code <Link href="https://github.com/SeanGenge/sean-genge-portfolio-react" target="_blank" underline="none">Here</Link>
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;