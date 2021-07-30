import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { Router } from 'react-router-dom';

import { userLogin } from '../API/auth';
import { userContext } from '../Context/userContext';
import { FormStyle, StyledButton, ErrorMsg, SignUp } from '../Styles/loginFormStyled';
import Input from './Input';
import Label from './Label';
import FormLine from './FormLine';
import Button from './Button';
import { SpanText, Link } from '../Styles/typography';
import { ROUTES } from '../Config/routes';

const LoginForm = () => {
	const [loginError, setLoginError] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const { register, handleSubmit } = useForm();
	const { dispatch } = useContext(userContext);

	const submitData = async (data) => {

		try {
			//request sent, show loading
			setLoginError(false);
			setIsSending(true);

			const loginResponse = await userLogin(data);
			dispatch({ type: 'LOGIN', payload: loginResponse });
			Router.push(ROUTES.EVENTS);
		} catch (err) {
			setLoginError(true);
			setIsSending(false);
		}
	}

	return (
		<>
			{loginError && <ErrorMsg>Ooops. Invalid email or password.</ErrorMsg>}
			<FormStyle onSubmit={handleSubmit(submitData)}>
				<FormLine
					renderLabel={() => <Label htmlFor='email'>Email</Label>}
					renderInput={() => <Input
						type='email'
						id='email'
						placeholder='Email'
						forwardedref={{ ...register('email', { required: true }) }}
						autocomplete="email"
						// hasError={!!errors.email}
						errorMsg="Email is required"
					/>}
				/>
				<FormLine
					renderLabel={() => <Label htmlFor='password'>Password</Label>}
					renderInput={() => <Input
						type='password'
						id='password'
						placeholder='Password'
						forwardedref={{ ...register('password', { required: true }) }}
						autocomplete="current-password"
						// hasError={!!errors.password}
						errorMsg="Password is required"
					/>}
				/>
				<SignUp>
					<SpanText>Don’t have account?</SpanText>
					<Link href="#register"> SIGN UP</Link>
				</SignUp>
				<StyledButton
					isLoading={isSending}
					type='submit'
					color={Button.getTypes().COLOR.PRIMARY}
					size={Button.getTypes().SIZE.BIG}
				>
					Sign in
				</StyledButton>
			</FormStyle>
		</>
	)
}

export default LoginForm;
