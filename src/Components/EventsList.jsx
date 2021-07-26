/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

import { getEvents } from '../API/getAllEvents';
import { FILTER } from '../Config/constants';
import EventCard from './EventCard';
import Layout from './Layout';

const Events = () => {
	const [events, setEvents] = useState([])
	const [filteredEvents, setFilteredEvents] = useState([])
	const [isEventLoading, setEventLoading] = useState(false)

	useEffect(() => {
		let isSubscribed = true

		const fetchData = async () => {
			setEventLoading(true)

			const events = await getEvents()

			if (isSubscribed) {
				setEvents(events)
				setFilteredEvents(events)
				setEventLoading(false)
			}
		}

		fetchData()

		// eslint-disable-next-line no-return-assign
		return () => isSubscribed = false
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

	return (
			<Layout>
			<button type='button' onClick={_handleFilterChange} value={FILTER.ALL}>ALL</button>
			<button type='button' onClick={_handleFilterChange} value={FILTER.FUTURE}>FUTURE</button>
			<button type='button' onClick={_handleFilterChange} value={FILTER.PAST}>PAST</button>
			{isEventLoading ? 'TODO LOADING' :
				filteredEvents.map(event => <EventCard key={event.id} data={event} />)
			}
		</Layout>
	)
}

export default Events;
