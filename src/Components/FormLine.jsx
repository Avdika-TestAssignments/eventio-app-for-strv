import React from 'react';

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

export default FormLine;
