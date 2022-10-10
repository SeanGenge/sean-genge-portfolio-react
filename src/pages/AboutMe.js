import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
	return (
		<Row>
			<Col className="custom-container">
				<img className="pfp" src="/images/pfp.jpg" alt="sean genge" />
				<p className="info">
					Hi, I'm Sean. I enjoy programming and puzzles. With a computer science background, I have dabbled with lots of different programming lanugages. These range from C, Java, Python and C#. Later I came to learn web development and fell in love with it.
				</p>
				<p className="info">
					I enjoy solving and finding innovative solutions to programming problems while also making sure the solutions are of decent speed without compromising the code quality.
				</p>
			</Col>
		</Row>
	);
}

export default AboutMe;
