import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
} from './SidebarElements';

import Resume from '../../assets/JamesTomassoniResume.pdf';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='home' onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink to='projects' onClick={toggle}>
						Projects
					</SidebarLink>
					<SidebarLink to='skills' onClick={toggle}>
						Skills
					</SidebarLink>
					<SidebarLink to='contact' onClick={toggle}>
						Contact
					</SidebarLink>
					<SidebarRoute href={Resume} aria-label='Resume' onClick={toggle}>
						Resume
					</SidebarRoute>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
