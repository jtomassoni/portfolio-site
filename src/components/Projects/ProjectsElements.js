import styled from 'styled-components';

export const ProjectsContainer = styled.div`
	height: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #010415;

	@media screen and (max-width: 768px) {
		height: 3000px;
	}

	@media screen and (max-width: 480px) {
		height: 4000px;
	}
`;

export const ProjectsWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 50px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const ProjectsCard = styled.a`
	background: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 420px;
	width: 300px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transform: scale(1.02);
		background-color: #306d90;
		color: #ffffff;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}

	&:visited {
		color: black;
	}
`;

export const ProjectsIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
	font-size: 2.5rem;
	color: #ffffff;
	margin-bottom: 64px;

	@media screen and (max-width: 80px) {
		font-size: 2rem;
	}
`;

export const ProjectsH2 = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
	font-size: 1rem;
	text-align: center;
	border-bottom: 1px #000000 solid;

	&:hover {
		border-bottom: 1px #ffffff solid;
	}
`;
export const TechList = styled.p`
	font-size: 1rem;
	text-align: center;
	margin-top: 5px;
	font-size: 1.4rem;
`;
