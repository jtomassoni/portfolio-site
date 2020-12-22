import React from 'react';

const Dummy = () => {
	return (
		<div className='Dummy'>
			<form name='contact' action='/' method='POST'>
				<input required type='hidden' name='form-name' value='contact' />
				<input required type='text' name='name' placeholder='Your name' />
				<input
					required
					type='email'
					name='email'
					placeholder='email@domain.com'
				/>
				<textarea
					required
					name='message'
					placeholder='Message'
					cols='30'
					rows='10'></textarea>
				<button type='submit'>Send a Message</button>
			</form>
		</div>
	);
};

export default Dummy;
