import React from 'react';
import { useHistory } from 'react-router-dom';

import { Title } from '../Styles/Typography';
import PublicPageMaquette from './PublicPageMaquette';
import { StyledButton, TitleText, NFImage } from '../Styles/NotFoundStyled';
import Button from './Button';
import { ROUTES } from '../Config/routes';


const NotFound = () => {
	const historyStore = useHistory()

	return (
		<PublicPageMaquette>
			<NFImage src='/img/darthvader.svg' alt='i am your father' />

			<Title>404 Error - page not found</Title>
			<TitleText>
				Seems like Darth Vader just hits our website and drops it down.
				Please press the refresh button and everything should be fine again.
			</TitleText>

			<StyledButton
				color={Button.getTypes().COLOR.THIRD}
				onClick={() => historyStore.push(ROUTES.HOMEPAGE)}
			>
				Return home
			</StyledButton>
		</PublicPageMaquette>
	)
}

export default NotFound;
