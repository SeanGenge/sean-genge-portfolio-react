import React from "react";
import { Box, Typography, Container } from '@mui/material';

function AboutMe() {
	return (
		<Box className="separator-box">
			<Container>
				<Typography variant="h5" sx={{ fontWeight: "bold" }} paragraph>
					Hi, I'm Sean. Nice to meet you
				</Typography>
				<Typography variant="body1" paragraph>
					I enjoy programming and puzzles. With a computer science background, I have dabbled with lots of different programming lanugages. These range from C, Java, Python and C#. Later I came to learn web development and fell in love with it.
				</Typography>
				<Typography variant="body1" paragraph>
					I enjoy solving and finding innovative solutions to programming problems while also making sure the solutions are of decent speed without compromising the code quality.
				</Typography>
			</Container>
		</Box>
	);
};

export default AboutMe;