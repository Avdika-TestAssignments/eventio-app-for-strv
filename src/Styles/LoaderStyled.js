import styled from 'styled-components';

export const Spinner = styled.img`
	@keyframes spin {
		0% { transform: rotate(0deg); }
		25% {transform: rotate(90deg);}
		50% {transform: rotate(180deg);}
		75% {transform: rotate(270deg);}
		100% {  transform: rotate(359deg); }
	}
	animation: spin 2s linear infinite;
	display: inline-block;
	height: 60%;
`
