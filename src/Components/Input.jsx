import React from 'react';

import { StyledInput } from '../Styles/InputStyled';

const Input = (props) => <StyledInput ref={props.forwardedref} {...props} />

export default Input;
