import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function Hero() {
	return (
		<section id="hero">
			<Grid2 container rowSpacing={2} className="no-margin">
				<Grid2 xs={12}>
					<h1 className="hero-title">Sean Genge</h1>
				</Grid2>
				<Grid2 xs={12}>
					<h2 className="hero-subtitle">A Full Stack Developer</h2>
				</Grid2>
			</Grid2>
		</section>
	);
}

export default Hero;