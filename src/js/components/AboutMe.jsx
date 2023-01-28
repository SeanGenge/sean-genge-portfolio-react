import React from "react";
import { Box, Typography, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function AboutMe() {
	return (
		<Box className="separator-box">
			<Container>
				<Grid2 container>
					<Grid2 xs={12} sm={4}>
						<img className="pfp hidden" src="/images/pfp.jpg" alt="Sean Genge" />
					</Grid2>
					<Grid2 xs={12} sm={6} className="hidden">
						<Typography variant="h5" paragraph>
							Hi, I'm Sean. Nice to meet you
						</Typography>
						<Typography variant="body2" paragraph>
							I enjoy programming and puzzles. With a computer science background, I have dabbled with lots of different programming lanugages. These range from C, Java, Python and C#. Later I came to learn web development and fell in love with it.
						</Typography>
						<Typography variant="body2" paragraph>
							I enjoy solving and finding innovative solutions to programming problems while also making sure the solutions are of decent speed without compromising the code quality.
						</Typography>
					</Grid2>
				</Grid2>
			</Container>
		</Box>
	);
};

export default AboutMe;