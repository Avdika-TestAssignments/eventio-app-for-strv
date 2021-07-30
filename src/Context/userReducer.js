import { userInitialState } from "./userInitialState";
import { storeRefreshToken } from "../API/refreshToken";
import { storeAuthToken } from "../API/authToken";

const userReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN': {
			const { id, firstName, lastName, email } = action.payload;

			return {
				...state,
				id: id,
				firstName: firstName,
				lastName: lastName,
				email: email,
				isLogged: true
			}
		}
		case 'LOGOUT':
			storeRefreshToken('');
			storeAuthToken('');

			return {
				...state,
				...userInitialState
			}

		default:
			return state;
	}
}

export default userReducer;
