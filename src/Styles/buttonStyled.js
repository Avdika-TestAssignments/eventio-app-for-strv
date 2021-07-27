import styled from 'styled-components';

import theme from './theme';

const button = styled.button`
	display: block;
	background-color: ${props => props.color};
	color: ${theme.color.white};
	border-radius: .25rem;
	border: none;
	text-transform: uppercase;
	font-size: ${theme.fontSize.small};
	cursor: pointer;
	transition: all .1s ease-in-out;
	transition: background-color .2s ease-out;

	&:focus {
		outline:0;
	}

	&:hover {
		filter: brightness(85%);
	}
`

export const BigButton = styled(button)`
	width: 15rem;
	height: 3.5rem;
`

export const SmallButton = styled(button)`
	display: inline-block;
	width: 6.25rem;
	height: 2rem;
`
