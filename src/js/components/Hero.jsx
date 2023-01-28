import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';

function Hero() {
	return (
		<section id="hero">
			<Grid2 container rowSpacing={2} className="no-margin">
				<Grid2 xs={12}>
					<Typography variant="h1" className="hidden" paragraph>
						Sean Genge
					</Typography>
				</Grid2>
				<Grid2 xs={12}>
					<Typography variant="h4" className="hidden" paragraph>
						A Full Stack Developer
					</Typography>
				</Grid2>
			</Grid2>
		</section>
	);
}

export default Hero;