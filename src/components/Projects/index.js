import React from 'react';
import eating from '../../assets/icons/eating.svg';
import gardening from '../../assets/icons/gardening.svg';
import rocket from '../../assets/icons/rocket.svg';
import bookingcal from '../../assets/icons/bookingcal.svg';
import gaming from '../../assets/icons/gaming.svg';
import campfire from '../../assets/icons/campfire.svg';

import {
	ProjectsContainer,
	ProjectsH1,
	ProjectsWrapper,
	ProjectsCard,
	ProjectsIcon,
	ProjectsH2,
	ProjectsP,
	TechList,
} from './ProjectsElements';

const Projects = () => {
	let steak = 'https://www.921steak.com';
	let botanicalbabble = 'http://bbfe.herokuapp.com/';
	let jtx = 'http://jtx.herokuapp.com/';
	let jttower = 'https://jtomassoni.github.io/';

	return (
		<ProjectsContainer id='projects'>
			<ProjectsH1>My Projects</ProjectsH1>
			<ProjectsWrapper>
				<ProjectsCard href={steak} target='_blank'>
					<ProjectsIcon src={eating} />
					<ProjectsH2>921steak</ProjectsH2>
					<ProjectsP>
						Full-Stack SPA as a demo to sell websites to medium-sized restaurant
						groups.
					</ProjectsP>
					<TechList>React, Python, Django, Styled Components</TechList>
				</ProjectsCard>

				<ProjectsCard href={botanicalbabble} target='_blank'>
					<ProjectsIcon src={gardening} />
					<ProjectsH2>Botanical Babble</ProjectsH2>
					<ProjectsP>
						Full-Stack social media style SPA, users can view, edit and create
						content as well engage within plant community.
					</ProjectsP>
					<TechList>React, Express, Node, CSS </TechList>
				</ProjectsCard>

				<ProjectsCard href={jtx} target='_blank'>
					<ProjectsIcon src={rocket} />
					<ProjectsH2>JTX</ProjectsH2>
					<ProjectsP>
						Informational website that utilizes SpaceX api to cleanly display
						data about launches.
					</ProjectsP>
					<TechList>React, React Bootstrap, RESTful API</TechList>
				</ProjectsCard>
				<ProjectsCard href={jttower} target='_blank'>
					<ProjectsIcon src={gaming} />
					<ProjectsH2>Tower of Hanoi</ProjectsH2>
					<ProjectsP>
						Math based logic game where larger disks can not be placed on top of
						smaller disks, and the user must move all disks between three
						towers.
					</ProjectsP>
					<TechList>Javascript, HTML, CSS</TechList>
				</ProjectsCard>

				<ProjectsCard href='https://github.com/code-finesse/' target='_blank'>
					<ProjectsIcon src={campfire} />
					<ProjectsH2>Code Finnese</ProjectsH2>
					<ProjectsP>
						Contributor and Moderator, Collection of instructional
						documentation, from beginner to intermediate content for new
						programmers.
					</ProjectsP>
					<TechList>Git, Github</TechList>
				</ProjectsCard>

				<ProjectsCard href='https://fareharbor.com' target='_blank'>
					<ProjectsIcon src={bookingcal} />
					<ProjectsH2>Client Bookability</ProjectsH2>
					<ProjectsP>
						Spearheaded global company-wide internal project ensuring
						bookability for clientbase, retention of $70M in 2020 revenue.
					</ProjectsP>
					<TechList>Excel, Tableau, MailChimp</TechList>
				</ProjectsCard>
			</ProjectsWrapper>
		</ProjectsContainer>
	);
};

export default Projects;
