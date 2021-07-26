/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-dom-props */
// import React, { useState, useContext } from 'react';
import React from 'react';
// import { useForm } from "react-hook-form";

// import { userLogin } from '../API/auth';
// import ErrorMessage from './ErrorMessage';
// import { userContext } from '../Context/userContext';
import { FormStyle } from '../Styles/LoginFormStyled';
import Input from '../Input'
import Label from '../Label'
import FormLine from '../FormLine'

const LoginForm = () => {
	// const [loginError, setLoginError] = useState(false)
	// const [isSending, setIsSending] = useState(false)

	// const { dispatch } = useContext(userContext)

	//const { register, handleSubmit } = useForm();

	// const _onSubmit = async (data) => {
	// 	console.log(data)
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
			<FormStyle>
				{/* <FormStyle onSubmit={handleSubmit(_onSubmit)}> */}
					<FormLine
						renderLabel={() => <Label htmlFor='email'>Email</Label>}
						renderInput={() => <Input
							type='email'
							id='email'
							placeholder='Email'
							// forwardedref={...register('email', { required: true })}
							autocomplete="email"
						/>}
					/>
					<FormLine
						renderLabel={() => <Label htmlFor='password'>Password</Label>}
						renderInput={() => <Input
							type='password'
							id='password'
							name='password'
							placeholder='Password'
							forwardedref={register({ required: true })}
							autocomplete="current-password"
						/>}
					/>
					<button type='submit'>Sign in</button>
				</FormStyle>
		</>
			)
}

export default LoginForm;
