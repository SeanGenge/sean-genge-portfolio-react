import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavigation({ currentPage, handlePageChange }) {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Sean Genge</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#aboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</Nav.Link>
						<Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
						<Nav.Link href="#contactMe" onClick={() => handlePageChange('ContactMe')}>Contact Me</Nav.Link>
						<Nav.Link href="#resume">Resume</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNavigation;
