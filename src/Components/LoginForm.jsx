/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-dom-props */
// import React, { useState, useContext } from 'react';
import React from 'react';
// import { useForm } from "react-hook-form";

// import { userLogin } from '../API/auth';
// import ErrorMessage from './ErrorMessage';
// import { userContext } from '../Context/userContext';

const LoginForm = () => {
	// const [loginError, setLoginError] = useState(false)
	// const [isSending, setIsSending] = useState(false)

	// const { dispatch } = useContext(userContext)

	//const { register, handleSubmit } = useForm();

	// const _onSubmit = async (data) => {
	// 	try {
	// 		//request sent, show loading
	// 		setLoginError(false)
	// 		setIsSending(true)

	// 		const loginResponse = await userLogin(data)
	// 		dispatch({ type: 'LOGIN', payload: loginResponse })

	// 	} catch (err) {
	// 		setLoginError(true)
	// 	} finally {
	// 		//request resolved
	// 		setIsSending(false)
	// 	}
	// }

	return (
		<>
			{/* <div>{loginError && ErrorMessage('Ooops. Invalid email or password.')}</div> */}
			{/* <div>{isSending && <span>Loging in....</span>}</div> */}
			<form>
			{/* <form onSubmit={handleSubmit(_onSubmit)}> */}
				<div>
					<label htmlFor='email'>Email</label>
					{/* <input type='email' id='email' placeholder='Email' ref={...register('email', { required: true })} /> */}
					<input type='email' id='email' placeholder='Email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					{/* <input type='password' id='password' name='password' placeholder='Password' inputRef={ref} ref={register({ required: true })} /> */}
					<input type='password' id='password' name='password' placeholder='Password' />
				</div>

				<button type='submit'>Sign in</button>
			</form>
		</>
	)
}

export default LoginForm;
