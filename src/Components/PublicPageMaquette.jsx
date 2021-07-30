import React from 'react';
import PropTypes from 'prop-types';

import AppLogo from './AppLogo';
import { Wrapper, LeftSide, RightSide, SignUp, BottomText, BottomWrap, Separator, Content } from '../Styles/publicPageMaquetteStyled';
import { SpanText, Link } from '../Styles/typography';

const PublicPageMaquette = ({ children }) => {
	return (
		<Wrapper>
			<LeftSide>
				<AppLogo />
				<BottomWrap>
					<BottomText>“Great, kid.Don’t <br />get cocky.”</BottomText>
					<Separator />
					<SpanText>Han Solo</SpanText>
				</BottomWrap>
			</LeftSide>

			<RightSide>
				<SignUp>
					<SpanText>Don’t have account?</SpanText>
					<Link href='#'> SIGN UP</Link>
				</SignUp>
				<Content>
					{children}
				</Content>
			</RightSide>
		</Wrapper>
	)
}

PublicPageMaquette.propTypes = {
	children: PropTypes.array.isRequired
}

export default PublicPageMaquette;
