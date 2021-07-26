import React from 'react';

import Logo from './Logo';
import { Wrapper, LeftSide, RightSide, SignUp, BottomText, BottomWrap, Separator } from '../Styles/PublicPageMaquetteStyled';
import { Text, Link } from '../Styles/Typography';

const PublicPageMaquette = ({ children }) => {
	return (
		<Wrapper>
			<LeftSide>
				<Logo />
					<BottomWrap>
						<BottomText>“Great, kid.Don’t <br />get cocky.”</BottomText>
						<Separator />
						<Text>Han Solo</Text>
					</BottomWrap>
			</LeftSide>

			<RightSide>
				<SignUp>
					<Text>Don’t have account?</Text>
					<Link href='#'> SIGN UP</Link>
				</SignUp>

				{children}
			</RightSide>
		</Wrapper>
	)
}

export default PublicPageMaquette;
