import { RESOURCES, HTTP_STATUS } from "../Config/constants";
import { authTransformData } from "../Config/dataFormat";
import { storeAuthToken } from "./authToken";
import { storeRefreshToken } from "./refreshToken";
import { SETTINGS } from "../Config/settings";

const refreshAuthToken = async (refreshToken) => {
	const requestOptions = {
		headers: {
			apiKey: SETTINGS.API_KEY,
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({ 'refreshToken': refreshToken }),
	}

	const response = await fetch(`${SETTINGS.API_URL}/${RESOURCES.AUTH}`, requestOptions);

	if (response && response.status === HTTP_STATUS.OK) {
		const authToken = response.headers.get('Authorization');

		if (authToken) {
			storeAuthToken(authToken);
		}

		const apiData = await response.json();
		const appData = authTransformData(apiData);
		return appData;
	}
}

const userLogin = async (data = {}) => {
	const requestOptions = {
		headers: {
			apiKey: SETTINGS.API_KEY,
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(data),
	}

	const response = await fetch(`${SETTINGS.API_URL}/${RESOURCES.AUTH}`, requestOptions);

	//User is logged
	if (response && response.status === HTTP_STATUS.OK) {

		const authToken = response.headers.get('Authorization');
		const refreshToken = response.headers.get('refresh-token');

		//store token in local storage
		if (authToken) storeAuthToken(authToken);
		if (refreshToken) storeRefreshToken(refreshToken);

		const apiData = await response.json();
		const appData = authTransformData(apiData);

		return appData;

	} else {
		throw new Error('Opps. Invalid email or password');
	}
}

export { userLogin, refreshAuthToken };
