import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavigation({ currentPage, handlePageChange }) {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#Home">Sean Genge</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link className={currentPage === "AboutMe" ? "active" : ""} href="#aboutMe" onClick={() => handlePageChange('AboutMe')}>About Me</Nav.Link>
						<Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
						<Nav.Link href="#contactMe" onClick={() => handlePageChange('ContactMe')}>Contact Me</Nav.Link>
						<Nav.Link href="https://docs.google.com/document/d/1xdUnM79A0TRbf5GVbd67HZTyMwSXj1AihVyWTdo3x4M/edit?usp=sharing" target="_blank">Resume</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNavigation;
