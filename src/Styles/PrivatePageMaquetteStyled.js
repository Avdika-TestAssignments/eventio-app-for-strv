import styled from 'styled-components';

import theme from './theme';

export const Wrapper = styled.div`
	display: flex;
	padding: 2rem 3rem;
	flex-direction: column;
	background-color: ${theme.color.background};
`

export const Content = styled.div`
	max-width: 90%;
	margin: 0 auto;
`
