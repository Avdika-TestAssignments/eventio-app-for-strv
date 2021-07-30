import React from 'react';

import LoginForm from './LoginForm';
import Layout from './Layout';
import { Title, Subtitle } from '../Styles/typography';

const Login = () => {
	return (
		<Layout>
			<Title>Sign in to Eventio.</Title>
			<Subtitle>Enter your details below.</Subtitle>
			<LoginForm />
		</Layout>
	)
}

export default Login;
