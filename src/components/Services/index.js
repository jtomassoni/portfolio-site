import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServicesElements';

const Services = () => {
	return (
		<ServicesContainer id='skills'>
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>ReactJs</ServicesH2>
					<ServicesP>
						We help reduce your fees and increase your revenues.
					</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>HTML, CSS</ServicesH2>
					<ServicesP>Virtual DOM, Cascading Style Sheets</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Client Bookability</ServicesH2>
					<ServicesP>$20M per year, but wait there's more</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
