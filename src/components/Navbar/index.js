import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtnLink,
} from './NavbarElements';

import Resume from '../../assets/JamesTomassoniResume.pdf';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<IconContext.Provider value={{ color: '#ffffff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to='/' onClick={toggleHome}>
							JT
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks
									to='projects'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Projects
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks
									to='skills'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Skills
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks
									to='contact'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Contact
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavBtnLink href={Resume} aria-label='Resume'>
									Resume
								</NavBtnLink>
							</NavItem>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
