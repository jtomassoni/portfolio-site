import styled from 'styled-components';

export const SkillsContainer = styled.div`
	height: 1100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #f9f9f9;

	@media screen and (max-width: 768px) {
		height: 2700px;
	}

	@media screen and (max-width: 480px) {
		height: 2700px;
	}
`;

export const SkillsWrapper = styled.div`
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

export const SkillsCard = styled.div`
	background: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 400px;
	width: 200px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		background-color: #010415;
		color: #306d90;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const SkillsIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
	background-color: white;
`;

export const SkillsH1 = styled.h1`
	font-size: 2.5rem;
	color: #010415;
	margin: 64px;

	@media screen and (max-width: 80px) {
		font-size: 2rem;
	}
`;

export const SkillsH2 = styled.h2`
	font-size: 1.5rem;
	color: #010415;
`;

export const SkillsP = styled.p`
	font-size: 1rem;
	text-align: center;
	border-bottom: 1px #000000 solid;

	&:hover {
		border-bottom: 1px #ffffff solid;
	}
`;
