import { post } from "../API/getMethod";
import { RESOURCES, HTTP_STATUS } from "../Config/constants";
import { transformData } from "../Config/dataFormat";
import { storeAuthToken } from "./authToken";
import { storeRefreshToken } from "./refreshToken";


const refreshAuthToken = async (refreshToken) => {
	const response = await post(RESOURCES.AUTH, {
		'refreshToken': refreshToken
	})

	if (response && response.status === HTTP_STATUS.OK) {
		const authToken = response.headers.get('Authorization')

		storeAuthToken(authToken)
		const apiData = await response.json()
		const appData = transformData(apiData)

		return appData
	}
}

const userLogin = async (data = {}) => {
	const response = await post(RESOURCES.AUTH, data)

	//User is logged
	if (response && response.status === HTTP_STATUS.OK) {
		const { headers = {}} = response

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
