import React from 'react';

import { Overlay, ModalContainer, CloseButton } from './ResumeElements';

const Modal = ({ handleClose, children, isOpen }) => {
	if (isOpen) {
		return (
			<Overlay>
				<ModalContainer>
					<CloseButton
						onClick={handleClose}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20.39 20.39'>
						<title>close</title>
						<line
							x1='19.39'
							y1='19.39'
							x2='1'
							y2='1'
							fill='none'
							stroke='#5c3aff'
							strokeLinecap='round'
							strokeMiterlimit='10'
							strokeWidth='2'
						/>
						<line
							x1='1'
							y1='19.39'
							x2='19.39'
							y2='1'
							fill='none'
							stroke='#5c3aff'
							strokeLinecap='round'
							strokeMiterlimit='10'
							strokeWidth='2'
						/>
					</CloseButton>
					{children}
				</ModalContainer>
			</Overlay>
		);
	} else {
		return <></>;
	}
};

export default Modal;
