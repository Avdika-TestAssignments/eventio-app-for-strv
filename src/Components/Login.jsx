import React from 'react';

import LoginForm from './LoginForm';
import Layout from './Layout';
import { Title, Subtitle } from '../Styles/Typography';
import { Content } from '../Styles/LoginStyled';

const Login = () => {
	return (
		<Layout>
			<Content>
				<Title>Sign in to Eventio.</Title>
				<Subtitle>Enter your details below.</Subtitle>

				<LoginForm />
			</Content>
		</Layout>
	)
}

export default Login;
