import styled from 'styled-components';

import theme from './theme';

export const Wrapper = styled.div`
display: flex;
padding: 1.5rem 1rem;
flex-direction: column;
background-color: ${theme.color.background};

@media (min-width: ${theme.viewport.tablet}) {
	padding: 2rem 3rem;
}
`

export const Content = styled.div`
padding-top: 5rem;
min-height: 100vh;
margin: 0 auto;
width: 100%;
max-width: 75rem;
`
