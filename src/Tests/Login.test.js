import React from 'react';
import { MemoryRouter } from "react-router";
import { mount } from 'enzyme';

import App from '../App';
import Login from '../Components/Login';

describe('Login', () => {
	it('should render correctly', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/login']}>
				<App />
			</MemoryRouter>
		)
		expect(wrapper.find(Login)).toHaveLength(1)
	})

	it('should render correctly on ladning page', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>
		)
		expect(wrapper.find(Login)).toHaveLength(1)
	})
})
