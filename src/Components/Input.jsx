import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, ErrorMsg } from '../Styles/inputStyled';

const Input = (props) => {
  return (
    <>
      <StyledInput hasError={props.hasError} {...props.forwardedref} {...props} />
      {props.hasError && <ErrorMsg>{props.errorMsg}</ErrorMsg>}
    </>
  )
}

Input.propTypes = {
  forwardedref: PropTypes.object.isRequired,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string.isRequired,
}

Input.defaultProps = {
  hasError: ''
}


export default Input;
