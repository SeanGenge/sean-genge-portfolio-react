import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className="title">About Me</h1>
				</Col>
			</Row>
			<Row>
				
				<Col className="custom-container">
					<p className="info">
						Hi, I'm Sean. I enjoy programming and puzzles. With a computer science background, I have dabbled with lots of different programming lanugages. These range from C, Java, Python and C#. Later I came to learn web development and fell in love with it.
					</p>
					<p className="info">
						I enjoy solving and finding innovative solutions to programming problems while also making sure the solutions are of decent speed without compromising the code quality.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default AboutMe;
