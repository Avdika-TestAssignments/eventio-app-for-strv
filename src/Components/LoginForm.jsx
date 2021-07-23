import React from 'react';

const FormLines = () => {
	return (
		<>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' name='email' placeholder='Email'/>
			</div>

			<div>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' name='password' placeholder='Password'/>
			</div>
		</>
	)
}

const OnSubmit = (event) => {
	event.preventDefault()
}

const LoginForm = () => {
	return (
		<form onSubmit={OnSubmit()}>
			{FormLines()}
			<button type='submit'>Sign in</button>
		</form>
	)
}

export default LoginForm;
