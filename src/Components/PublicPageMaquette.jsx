import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import { Wrapper, LeftSide, RightSide, SignUp, BottomText, BottomWrap, Separator } from '../Styles/PublicPageMaquetteStyled';
import { SpanText, Link } from '../Styles/Typography';

const PublicPageMaquette = ({ children }) => {
	return (
		<Wrapper>
			<LeftSide>
				<Logo />
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

				{children}
			</RightSide>
		</Wrapper>
	)
}

PublicPageMaquette.propTypes = {
  children: PropTypes.array.isRequired
}

export default PublicPageMaquette;
