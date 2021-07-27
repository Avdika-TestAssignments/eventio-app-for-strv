/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

import { getEvents } from '../API/getAllEvents';
import { FILTER } from '../Config/constants';
import EventCard from './EventCard';
import Layout from './Layout';
import EventForm from './NewEventForm';
import { Content } from '../Styles/EventListStyled';
import Loader from './Loader';
import LinkButton from './LinkButton';
import Popup from './Popup';

const Events = () => {
	const [events, setEvents] = useState([])
	const [filteredEvents, setFilteredEvents] = useState([])
	const [isEventLoading, setEventLoading] = useState(false)
	const [showCreateForm, setShowCreateForm] = useState(false)

	useEffect(() => {

		const fetchData = async () => {
			setEventLoading(true)

			const events = await getEvents()

			setEvents(events)
			setFilteredEvents(events)
			setEventLoading(false)
		}

		fetchData()

	}, [])

	const [filterBy, setFilterBy] = useState(FILTER.ALL)

	const _handleFilterChange = (event) => {
		setFilterBy(event.target.value)
	}

	const _filterEventsByDate = (events, filterBy) => {
		const newEvents = events

		return newEvents.filter(event => {
			const eventDate = new Date(event.startsAt)
			const actualDate = new Date()

			if (filterBy === FILTER.PAST) {
				return eventDate < actualDate
			} else if (filterBy === FILTER.FUTURE) {
				return eventDate > actualDate
			} else {
				return event
			}
		})
	}

	useEffect(() => {
		const filteredEvents = _filterEventsByDate(events, filterBy)
		setFilteredEvents(filteredEvents)

	}, [filterBy, events])

	const _onEventCreated = (data) => {
		setEvents([...events, data])
		setShowCreateForm(false)
	}

	return (
		<Layout>
			<Content>
				<LinkButton
					isActive={filterBy === FILTER.ALL}
					type='button' onClick={_handleFilterChange}
					value={FILTER.ALL}
				>
					all events
				</LinkButton>

				<LinkButton
					isActive={filterBy === FILTER.FUTURE}
					type='button' onClick={_handleFilterChange}
					value={FILTER.FUTURE}
				>
					future events
				</LinkButton>

				<LinkButton
					isActive={filterBy === FILTER.PAST}
					type='button'
					onClick={_handleFilterChange}
					value={FILTER.PAST}
				>
					past events
				</LinkButton>
				{isEventLoading ? <Loader /> :
					filteredEvents.map(event => <EventCard key={event.id} data={event} />)
				}
				<button type='button' onClick={() => setShowCreateForm(true)}>New event</button>
				{showCreateForm &&
					<Popup onClose={() => setShowCreateForm(false)}>
						<EventForm onCreateEvent={(data) => _onEventCreated(data)} />
					</Popup>
				}
			</Content>
		</Layout>
	)
}

export default Events;
