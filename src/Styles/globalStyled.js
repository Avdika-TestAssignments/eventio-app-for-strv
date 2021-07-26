import { createGlobalStyle } from 'styled-components';

import HindLight from './Fonts/Hind-Light.ttf';
import Hindregular from './Fonts/Hind-Regular.ttf';
import HindBold from './Fonts/Hind-SemiBold.ttf';
import Playfair from './Fonts/PlayfairDisplay-Regular.ttf';

const GlobalStyles = createGlobalStyle`
	body {
		font-family: Hind;
		color: #C9CED3;
	}
	@font-face {
		font-family: Hind light;
		font-style: normal;
		font-weight: 300;
		src: url(${HindLight});
	}

	@font-face {
		font-family: Hind;
		font-style: normal;
		font-weight: 400;
		src: url(${Hindregular});
	}
	@font-face {
		font-family: Hind bold;
		font-style: normal;
		font-weight: 700;
		src: url(${HindBold});
	}

	@font-face {
		font-family: Playfair;
		font-style: normal;
		font-weight: 400;
		src: url(${Playfair});
  	}
`
export default GlobalStyles;
