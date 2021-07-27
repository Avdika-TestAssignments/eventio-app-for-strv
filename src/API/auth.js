import { RESOURCES, HTTP_STATUS } from "../Config/constants";
import { transformData } from "../Config/dataFormat";
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

	const response = await fetch(`${SETTINGS.API_URL}/${RESOURCES.AUTH}`, requestOptions)

	if (response && response.status === HTTP_STATUS.OK) {
		const authToken = response.headers.get('Authorization')

		storeAuthToken(authToken)
		const apiData = await response.json()
		console.log('__apiData ', apiData);
		const appData = transformData(apiData)
		console.log('__appData ', appData);
		return appData
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

	const response = await fetch(`${SETTINGS.API_URL}/${RESOURCES.AUTH}`, requestOptions)

	//User is logged
	if (response && response.status === HTTP_STATUS.OK) {
		const { headers = {} } = response

		//store token in local storage
		storeAuthToken(headers.get('Authorization'))
		storeRefreshToken(headers.get('refresh-token'))

		const apiData = await response.json()
		const appData = transformData(apiData)

		return appData

	} else {
		throw new Error('Opps. Invalid email or password')
	}
}

export { userLogin, refreshAuthToken };
