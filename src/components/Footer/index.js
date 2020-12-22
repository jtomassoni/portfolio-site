import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							jt
						</SocialLogo>
						<WebsiteRights>
							jt © {new Date().getFullYear()} All Rights Reserved
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href='https://www.github.com/jtomassoni'
								target='_blank'
								aria-label='Github'>
								<FaGithub />
							</SocialIconLink>
							<SocialIconLink
								href='https://www.linkedin.com/in/jtomassoni'
								target='_blank'
								aria-label='Linkedin'>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
