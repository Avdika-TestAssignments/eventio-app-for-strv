
import { getAuthToken } from '../API/authToken';
import { SETTINGS } from './settings';

const _getApiHeaders = (token) => {
	return {
		headers: {
			apiKey: SETTINGS.API_KEY,
			'Content-Type': 'application/json',
			Authorization: token,
		},
	}
}

const fetchData = async (url = '', options = {}) => {
	const requestOptions = Object.assign(_getApiHeaders(getAuthToken()), {
		...options,
	})

	const response = await fetch(url, requestOptions)
	return response
}

export { fetchData };
