import { TOKEN } from "../Config/constants";
import { browserCheck } from '../Config/browserCheck';

const storeAuthToken = (authToken = '') => {
	window.localStorage.setItem([TOKEN.AUTH_TOKEN], authToken);
}

const getAuthToken = () => browserCheck() ? window.localStorage.getItem(TOKEN.AUTH_TOKEN) || '' : '';

export { storeAuthToken, getAuthToken };
