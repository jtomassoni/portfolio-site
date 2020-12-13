import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from './NarbarElements';

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>james tomassoni</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='about'>about</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='projects'>projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='skills'>skills</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='contact'>contact</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
