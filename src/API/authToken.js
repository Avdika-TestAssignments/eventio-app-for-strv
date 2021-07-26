import { TOKEN } from "../Config/constants";

const storeAuthToken = (authToken = '') => {
	window.localStorage.setItem([TOKEN.AUTH_TOKEN], authToken)
}

const getAuthToken = () => window.localStorage.getItem([TOKEN.AUTH_TOKEN])

export { storeAuthToken, getAuthToken };
