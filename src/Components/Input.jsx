import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from '../Styles/InputStyled';

const Input = (props) => <StyledInput {...props.forwardedref} {...props} />

Input.propTypes = {
  forwardedref: PropTypes.object.isRequired
}

export default Input;






// const { ref, ...rest } = register('value_name')


// return (
//  <TextField inputRef={red} {...rest} />
// )

// const WrappedComponent = React.forwardRef(
//   function myFunction(props, ref) {
//     return <LogProps {...props} forwardedRef={ref} />;
//   }
// );

// const WrappedComponent = React.forwardRef((props, ref) => {
//   return <LogProps {...props} forwardedRef={ref} />;
// });
// ==========================================
// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ));

// // You can now get a ref directly to the DOM button:
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;