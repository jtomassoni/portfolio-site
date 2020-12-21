import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='home' onClick={toggle}>
						home
					</SidebarLink>
					<SidebarLink to='projects' onClick={toggle}>
						projects
					</SidebarLink>
					<SidebarLink to='skills' onClick={toggle}>
						skills
					</SidebarLink>
					<SidebarLink to='contact' onClick={toggle}>
						contact
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
