import styled from 'styled-components';
import theme from '../Styles/theme';

export const SpanText = styled.span`
	font-size: ${theme.fontSize.normal};
	color: ${theme.color.normal};
`

export const Title = styled.span`
	display: block;
	font-size: ${theme.fontSize.big};
	font-family: Hind;
	color: ${theme.color.dark};
	line-height: 1.5;
`

export const Subtitle = styled.span`
	display: block;
	font-size: ${theme.fontSize.normal};
	font-family: Hind;
	color: ${theme.color.light};
	line-height: 1.5;
`

export const Link = styled.a`
	color: ${theme.color.dark};
	font-size: ${theme.fontSize.normal};
	font-family: Hind bold;
	text-decoration: none;
	text-transform: uppercase;
	&:hover {
		color: black;
	}
`
