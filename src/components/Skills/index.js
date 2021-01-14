import React from 'react';
import django from '../../assets/logos/django.svg';
import express from '../../assets/logos/express.svg';
import htmlcss from '../../assets/logos/htmlcss.svg';
import js from '../../assets/logos/js.png';
import node from '../../assets/logos/node.svg';
import python from '../../assets/logos/python.svg';
import react from '../../assets/logos/react.svg';
import mongodb from '../../assets/logos/mongodb.svg';
import postgresql from '../../assets/logos/postgresql.svg';

import {
	SkillsContainer,
	SkillsH1,
	SkillsWrapper,
	SkillsCard,
	SkillsIcon,
	SkillsH2,
} from './SkillsElements';

const Skills = () => {
	return (
		<SkillsContainer id='skills'>
			<SkillsH1>My Skills</SkillsH1>
			<SkillsWrapper>
				<SkillsCard>
					<SkillsIcon src={js} />
					<SkillsH2>JavaScript</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={react} />
					<SkillsH2>React</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={node} />
					<SkillsH2>Node</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={express} />
					<SkillsH2>Express</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={python} />
					<SkillsH2>Python</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={django} />
					<SkillsH2>Django</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={mongodb} />
					<SkillsH2>MongoDB</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={postgresql} />
					<SkillsH2>PostgreSQl</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={htmlcss} />
					<SkillsH2>HTML/CSS</SkillsH2>
				</SkillsCard>

			</SkillsWrapper>
		</SkillsContainer>
	);
};

export default Skills;
