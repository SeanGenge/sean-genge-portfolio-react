import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactMe() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isValidName, setIsValidName] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [isValidMessage, setIsValidMessage] = useState(false);
	
	const handleInputChange = (e) => {
		// Get the value and name of the input which triggered the change
		const { name, value } = e.target;
		
		if (name === "formName") {
			setName(value);
			
			value === "" ? setIsValidName(false) : setIsValidName(true);
		}
		
		if (name === "formEmail") {
			setEmail(value);
			
			checkIsValidEmail() === false ? setIsValidEmail(false) : setIsValidEmail(true);
		}
		
		if (name === "formMessage") {
			setMessage(value);
			
			value === "" ? setIsValidMessage(false) : setIsValidMessage(true);
		}
	};
	
	const checkIsValidEmail = () => {
		// This is used from the computer science challenge week
		const regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		console.log(regexEmail.test(email));
		return regexEmail.test(email);
	}
	
	const handleFormSubmit = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();
	};
	
	return (
		<Container>
			<Row>
				<Col>
					<h1 className="title">Contact Me</h1>
				</Col>
			</Row>
			<Row>
				<Col className="custom-container">
					<Form id="contact-form" noValidate onSubmit={handleFormSubmit}>
						<Form.Group className="mb-3" controlId="formName">
							<Form.Label>Name*</Form.Label>
							<Form.Control type="text" name="formName" placeholder="Enter name" onChange={handleInputChange} isValid={isValidName} isInvalid={!isValidName} />
							<Form.Control.Feedback type="invalid">
								Please enter a name
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formEmail">
							<Form.Label>Email address*</Form.Label>
							<Form.Control type="email" name="formEmail" placeholder="Enter email" onChange={handleInputChange} isValid={isValidEmail} isInvalid={!isValidEmail} />
							<Form.Control.Feedback type="invalid">
								Please enter a valid email
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formMessage">
							<Form.Label>Message*</Form.Label>
							<Form.Control as="textarea" name="formMessage" rows={4} onChange={handleInputChange} isValid={isValidMessage} isInvalid={!isValidMessage} />
							<Form.Control.Feedback type="invalid">
								Please enter a message
							</Form.Control.Feedback>
						</Form.Group>
						<Button variant="primary" type="submit">
							Send message
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default ContactMe;
