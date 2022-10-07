import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
	return (
		<Container>
			<Row>
				<Col>Pic of me</Col>
				<Col>Info about me</Col>
			</Row>
		</Container>
	);
}

export default AboutMe;
