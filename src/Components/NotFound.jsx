import React from 'react';
import { useHistory } from 'react-router-dom';

import { Title } from '../Styles/typography';
import PublicPageMaquette from './PublicPageMaquette';
import { StyledButton, TitleText, NFImage } from '../Styles/notFoundStyled';
import Button from './Button';
import { ROUTES } from '../Config/routes';
import errorImage from '../Images/NotFoundIcon.png';

const NotFound = () => {
	const historyStore = useHistory();

	const redirectHome = () => historyStore.push(ROUTES.HOMEPAGE);

	return (
		<PublicPageMaquette>
			<NFImage src={errorImage} alt='trooper is watching you' />

			<Title>404 Error - page not found</Title>
			<TitleText>
				Seems like Darth Vader just hits our website and drops it down.
				Please press the refresh button and everything should be fine again.
			</TitleText>

			<StyledButton
				size = {Button.getTypes().SIZE.BIG}
				color={Button.getTypes().COLOR.THIRD}
				onClick={redirectHome}
			>
				Return home
			</StyledButton>
		</PublicPageMaquette>
	)
}

export default NotFound;
