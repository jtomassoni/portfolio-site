import React from 'react';
import django from '../../images/logos/django.svg';
import express from '../../images/logos/express.svg';
import html5 from '../../images/logos/html5.png';
import js from '../../images/logos/js.png';
import node from '../../images/logos/node.svg';
import python from '../../images/logos/python.svg';
import react from '../../images/logos/react.svg';
import css3 from '../../images/logos/css3.svg';

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
					<SkillsIcon src={react} />
					<SkillsH2>React</SkillsH2>
				</SkillsCard>

				<SkillsCard>
					<SkillsIcon src={html5} />
					<SkillsH2>HTML</SkillsH2>
				</SkillsCard>
				<SkillsCard>
					<SkillsIcon src={css3} />
					<SkillsH2>CSS</SkillsH2>
				</SkillsCard>
			</SkillsWrapper>
		</SkillsContainer>
	);
};

export default Skills;
