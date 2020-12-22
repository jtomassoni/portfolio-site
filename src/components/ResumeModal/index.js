import React from 'react';
import { ModalProvider } from 'styled-react-modal';

const ResumeModal = () => {
	return (
		<ThemeProvider theme={theme}>
			<ModalProvider>
				<FancyModalButton />
			</ModalProvider>
		</ThemeProvider>
	);
};

export default ResumeModal;
