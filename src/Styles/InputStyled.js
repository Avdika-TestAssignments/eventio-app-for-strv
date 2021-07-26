import styled from 'styled-components';

import theme from '../Styles/theme';

export const StyledInput = styled.input.attrs(props => ({
	type: props.type
}))`
	border: none;
	border-bottom: 1px solid ${theme.color.lightest};
	width: 100%;
	color: ${theme.color.dark};
	padding: .5rem;
	font-size: ${theme.fontSize.normal};
	outline: none;
	&::placeholder {
		color: ${theme.color.normal};
	}
`
