import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
`;
export const ModalContainer = styled.div`
	width: 50%;
	height: 50%;
	background-color: white;
	position: absolute; // ----.
	top: 50%; //     |positioning the container
	left: 50%; //     |in the middle
	transform: translate(-50%, -50%); //  ----.
	border-radius: 12px;
`;

export const CloseButton = styled.svg`
	width: 20px;
	height: 20px;
	position: absolute;
	right: 18px;
	top: 18px;
	cursor: pointer;
`;