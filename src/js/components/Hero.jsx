import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';
import Spline from '@splinetool/react-spline';
import { Scale } from '@mui/icons-material';

function Hero() {
	return (
		<section id="hero">
			<Grid2 container rowSpacing={2} className="no-margin">
				<Grid2 xs={12}>
					<Typography variant="h2" className="hidden">
						Sean Genge
					</Typography>
				</Grid2>
				<Grid2 xs={12}>
					<Typography variant="body1" className="hidden">
						A Full Stack Developer
					</Typography>
				</Grid2>
				<Grid2 xs={12} sx={{margin: "auto", transform: {xs: "scale(0.75)", md: "scale(1)"}, width: {xs: "100%", md: "20%"}}}>
					<Spline className="hidden" scene="https://prod.spline.design/7savUsYJTYmiaC8d/scene.splinecode" />
				</Grid2>
			</Grid2>
		</section>
	);
}

export default Hero;