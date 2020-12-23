import React from 'react';
import contactpic from '../../assets/icons/contact.svg';

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
	H1,
} from './ContactElements';

const Contact = () => {


	return (
		<Container altBg={true} id='contact'>
			<Wrapper>
							<H1>Contact Me:</H1>
				<Row imgPosition={true}>
					<ColumnOne>
						<Form name='contact' action='/' method='POST'>
							<input required type='hidden' name='form-name' value='contact' />
							<Label htmlFor='name'>Name:</Label>
							<InputText
								type='text'
								name='name'
								// onChange={(event) => setName(event.target.value)}
								// value={name}
							/>
							<Label htmlFor='email'>Email:</Label>
							<InputText
								type='email'
								name='email'
								// onChange={(event) => setEmail(event.target.value)}
								// value={email}
							/>
							<Label htmlFor='message'>Message:</Label>
							<InputTextArea
								type='text'
								name='message'
								rows='8'
								// onChange={(event) => setContact(event.target.value)}
								// value={contact}
							/>
							<FormButton type='submit'>Submit</FormButton>
						</Form>
					</ColumnOne>
					<ColumnTwo>
						<ImgContainer>
							<Img src={contactpic} alt='contact' />
						</ImgContainer>
					</ColumnTwo>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default Contact;
