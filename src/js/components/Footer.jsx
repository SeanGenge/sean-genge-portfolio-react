import React from "react";
import { Box, Typography, Container, Link } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
	return (
		<Box id="footer" className="separator-box" height="5rem" marginTop="5em" paddingBottom="10em">
			<Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
				<Typography variant="body1" paragraph>
					Handcrafted by me using React. Hosted with AWS
				</Typography>
				<Typography variant="body1" paragraph>
					You can view my portfolio code <Link href="https://github.com/SeanGenge/sean-genge-portfolio-react" target="_blank" underline="none">here</Link> <CopyrightIcon sx={{ verticalAlign: "middle" }} /> 2023
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;