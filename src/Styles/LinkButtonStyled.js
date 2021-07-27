import styled from 'styled-components';

import theme from './theme';

export const Button = styled.button`
	border: none;
	background-color: unset;
	font-size: 12px;
	color: ${props => props.isActive ? theme.color.dark : '#A9AEB4'};
	letter-spacing: 1px;
	font-family: Hind bold;
	text-transform: uppercase;
	transition: all .1s ease-in-out;
	&:hover {
		cursor: pointer;
		color: ${theme.color.dark};
	}
	&:focus {
		outline: 0;
	}
`
