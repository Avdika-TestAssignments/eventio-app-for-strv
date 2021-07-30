import styled from 'styled-components';

import theme from './theme';

export const StyledInput = styled.input.attrs(props => ({
	type: props.type
}))`
	border: none;
	border-bottom: 1px solid ${theme.color.lightest};
	width: 100%;
	color: ${theme.color.dark};
	padding: .5rem 0;
	font-size: ${theme.fontSize.normal};
	outline: none;

	&::placeholder {
		color: ${theme.color.normal};
	}
`
export const ErrorMsg = styled.span`
  display: block;
  text-align: left;
  margin-top: 0.25rem;
  color: ${theme.color.pink};
`
