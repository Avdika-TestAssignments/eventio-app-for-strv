import React from 'react';
import PropTypes from 'prop-types';

import { Line } from '../Styles/FormLineStyled';

const FormLine = ({
	renderLabel = () => {},
	renderInput = () => {}
}) => {
	return (
		<Line>
			{renderLabel()}
			{renderInput()}
		</Line>
	)
}

FormLine.propTypes = {
  renderLabel: PropTypes.func.isRequired,
	renderInput: PropTypes.func.isRequired
}

export default FormLine;
