import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from '../Styles/InputStyled';

const Input = (props) => <StyledInput ref={props.forwardedref} {...props} />

Input.propTypes = {
  forwardedref: PropTypes.object.isRequired
}

export default Input;
