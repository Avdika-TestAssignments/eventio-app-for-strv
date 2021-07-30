import styled from 'styled-components';

import theme from './theme';

export const Button = styled.button`
	position: fixed;
	bottom: 2rem;
	right: 3rem;
	border: none;
	border-radius: 50%;
	width: 3.5rem;
	height: 3.5rem;
	background-color: ${theme.color.dark};
	transition: all .1s ease-in-out;

	&:hover {
		cursor: pointer;
		filter: brightness(130%);
	}

	&:focus {
		outline: 0;
	}
`
