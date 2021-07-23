import React from 'react';
import { MemoryRouter } from "react-router";
import { mount } from 'enzyme';

import App from '../App';
import EventsList from '../Components/EventsList';

describe('Login', () => {
	it('should render correctly', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/eventslist']}>
				<App />
			</MemoryRouter>
		)
		expect(wrapper.find(EventsList)).toHaveLength(1)
	})
})