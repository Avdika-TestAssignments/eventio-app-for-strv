import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Styles/linkButtonStyled';

const FilterButton = (props = {}) => {
	return (
		<Button {...props}>
			{props.children}
		</Button>
	)
}

FilterButton.propTypes = {
  children: PropTypes.string.isRequired
}

export default FilterButton;
