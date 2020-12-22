import React, { useState } from 'react';
import contactpic from '../../images/icons/contact.svg';

import {
	Container,
	Wrapper,
	Row,
	ColumnOne,
	Form,
	Label,
	InputTextArea,
	InputText,
	ColumnTwo,
	Img,
	ImgContainer,
	FormButton,
} from './ContactElements';

const Contact = () => {
	const [contact, setContact] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	// const encode = (data) => {
	// 	return Object.keys(data)
	// 		.map(
	// 			(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
	// 		)
	// 		.join('&');
	// };

	// const handleSubmit = (e) => {
	// 		fetch('/', {
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	// 			body: encode({ 'form-name': 'contact', ...this.state }),
	// 		})
	// 			.then(() => alert('Success!'))
	// 			.catch((error) => alert(error));

	// 		e.preventDefault();
	// 	};

	return (
		<Container altBg={true} id='contact'>
			<form name='contactform' method='POST' netlify>
				<input name='contact' type='text'></input>
				<button>Submit</button>
			</form>
		</Container>

		// <Container altBg={true} id='contact'>
		// 	<Wrapper>
		// 		<Row imgPosition={true}>
		// 			<ColumnOne>
		// 				<Form type='hidden' name='contact-form' netlify onSubmit={handleSubmit}>
		// 					<h1>Contact Me:</h1>
		// 					<Label htmlFor='name'>Name:</Label>
		// 					<InputText
		// 						type='text'
		// 						name='name'
		// 						id='name'
		// 						// form='nameform'
		// 						onChange={(event) => setName(event.target.value)}
		// 						value={name}
		// 					/>
		// 					<Label htmlFor='email'>Email:</Label>
		// 					<InputText
		// 						type='email'
		// 						name='email'
		// 						id='email'
		// 						// form='emailform'
		// 						onChange={(event) => setEmail(event.target.value)}
		// 						value={email}
		// 					/>
		// 					<Label htmlFor='additionalDetails'>Comments:</Label>
		// 					<InputTextArea
		// 						type='text'
		// 						rows='8'
		// 						name='details'
		// 						id='details'
		// 						// form='detailsform'
		// 						onChange={(event) => setContact(event.target.value)}
		// 						value={contact}
		// 					/>
		// 					<FormButton>Submit</FormButton>
		// 				</Form>
		// 			</ColumnOne>
		// 			<ColumnTwo>
		// 				<ImgContainer>
		// 					<Img src={contactpic} alt='contact' />
		// 				</ImgContainer>
		// 			</ColumnTwo>
		// 		</Row>
		// 	</Wrapper>
		// </Container>
	);
};

export default Contact;
