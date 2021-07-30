import React from 'react';

import { Spinner } from '../Styles/loaderStyled';
import LoaderImg from '../Images/loader.png';

const Loader = () => {
	return (
		<Spinner src={LoaderImg} alt='loader' />
	)
}

export default Loader;
