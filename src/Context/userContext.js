import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { userInitialState } from './userInitialState';
import userReducer from './userReducer';

const userContext = createContext(userInitialState);

const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, userInitialState)

	return (
		<userContext.Provider value={{ state, dispatch }}>
			{children}
		</userContext.Provider>
	)
}

UserProvider.propTypes = {
  children: PropTypes.array.isRequired
}

export { userContext, UserProvider };
