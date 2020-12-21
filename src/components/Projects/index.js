import React from 'react';
import eating from '../../images/icons/eating.svg';
import gardening from '../../images/icons/gardening.svg';
import rocket from '../../images/icons/rocket.svg';
import bookingcal from '../../images/icons/bookingcal.svg';
import gaming from '../../images/icons/gaming.svg';
import campfire from '../../images/icons/campfire.svg';


import {
	ProjectsContainer,
	ProjectsH1,
	ProjectsWrapper,
	ProjectsCard,
	ProjectsIcon,
	ProjectsH2,
	ProjectsP,
	TechList
} from './ProjectsElements';

const Projects = () => {
	return (
		<ProjectsContainer id='projects'>
			<ProjectsH1>My Projects</ProjectsH1>
			<ProjectsWrapper>
				<ProjectsCard>
					<ProjectsIcon src={eating} />
					<ProjectsH2>921steak</ProjectsH2>
					<ProjectsP>
						Full-Stack SPA as a demo to  sell websites to medium-sized
						restaurant groups.
					</ProjectsP>
					<TechList>React, Python, Django, Styled Components</TechList>
				</ProjectsCard>

				<ProjectsCard>
					<ProjectsIcon src={gardening} />
					<ProjectsH2>Botanical Babble</ProjectsH2>
					<ProjectsP>
						Full-Stack ocial media style SPA, users can view, edit and create
						content as well engage within plant community.
					</ProjectsP>
					<TechList>React, Express, Node, CSS </TechList>
				</ProjectsCard>

				<ProjectsCard>
					<ProjectsIcon src={rocket} />
					<ProjectsH2>JTX</ProjectsH2>
					<ProjectsP>
						Informational website that utilizes SpaceX api to cleanly display
						data about launches.
					</ProjectsP>
					<TechList>React, React Bootstrap, RESTful API</TechList>
				</ProjectsCard>
				<ProjectsCard>
					<ProjectsIcon src={gaming} />
					<ProjectsH2>Tower of Hanoi</ProjectsH2>
					<ProjectsP>
						Math based logic game where larger disks can not be placed on top of
						smaller disks, and the user must move all disks between three
						towers.
					</ProjectsP>
					<TechList>Javascript, HTML, CSS</TechList>
				</ProjectsCard>

				<ProjectsCard>
					<ProjectsIcon src={bookingcal} />
					<ProjectsH2>Client Bookability</ProjectsH2>
					<ProjectsP>
						Spearheaded global company-wide internal project ensuring bookability for clientbase,
						retention of $70M in 2020 revenue.
					</ProjectsP>
					<TechList>Excel, Tablaeu, MailChimp</TechList>
				</ProjectsCard>

				<ProjectsCard>
					<ProjectsIcon src={campfire} />
					<ProjectsH2>Agonquin Outfitters</ProjectsH2>
					<ProjectsP>
						Designed online inventory and scheduling platform for nine-location
						outfitting and rental company, est CA$20M in 2019 revenue.
					</ProjectsP>
					<TechList>FareHarborCMS, Close.io</TechList>
				</ProjectsCard>
			</ProjectsWrapper>
		</ProjectsContainer>
	);
};

export default Projects;
