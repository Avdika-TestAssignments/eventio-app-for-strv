import styled from 'styled-components';

import theme from './theme';

export const StyledButton = styled.button`
	display: block;
	width: 15rem;
	height: 3.5rem;
	background-color: ${theme.color.green};
	color: ${theme.color.white};
	border-radius: .25rem;
	border: none;
	text-transform: uppercase;
	font-size: ${theme.fontSize.normal};
	cursor: pointer;
	transition: all 0.3s ease 0s;
	&:hover {
		filter: brightness(85%);
	}
`
