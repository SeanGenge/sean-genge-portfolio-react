import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactMe() {
	
	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = e.target;

	};
	
	const handleFormSubmit = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();

		
	};
	
	return (
		<Container>
			<Row>
				<Col>Contact Me</Col>
			</Row>
			<Row>
				<Col>
					<form className="form">
						<input value="" name="firstName" onChange={handleInputChange} type="text" placeholder="First Name" />
						<input value="" name="lastName" onChange={handleInputChange} type="text" placeholder="Last Name" />
						<button type="button" onClick={handleFormSubmit}>
							Submit
						</button>
					</form>
				</Col>
			</Row>
		</Container>
	);
}

export default ContactMe;
