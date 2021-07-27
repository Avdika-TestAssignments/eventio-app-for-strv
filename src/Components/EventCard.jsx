import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { transformData, attendeesAmount } from '../Config/dataFormat';
import { userContext } from '../Context/userContext';
import { joinEvent, leaveEvent } from '../API/getAllEvents';

const EVENT_STATUS = {
	JOINED: 'JOIN',
	LEFT: 'LEAVE',
	OWNER: 'EDIT'
}

const EventCard = ({ data }) => {
	const [eventActionLoading, setEventActionLoading] = useState(false)
	const [eventStatus, setEventStatus] = useState()

	const { state } = useContext(userContext)
	const { id } = state

	const {
		id: eventId,
		title,
		description,
		startsAt,
		capacity,
		owner: {
			id: ownerId,
			firstName,
			lastName
		},
		attendees
	} = data

	useEffect(() => {
		// logged user is owner of event
		if (id === ownerId) {
			setEventStatus(EVENT_STATUS.OWNER)

		} else if (attendees.find(attendee => attendee.id === id)) {
			//logged user has already join event
			setEventStatus(EVENT_STATUS.LEFT)

		} else {
			//user is not attendee and not event owner
			setEventStatus(EVENT_STATUS.JOINED)
		}
	}, [id, attendees, ownerId])

	const _eventAction = async () => {
		setEventActionLoading(true)

		//try to join event
		if (eventStatus === EVENT_STATUS.JOINED) {
			await joinEvent(eventId)
			setEventStatus(EVENT_STATUS.LEFT)

		} else if (eventStatus === EVENT_STATUS.LEFT) {
			//try to leave event
			await leaveEvent(eventId)
			setEventStatus(EVENT_STATUS.JOINED)
		}

		setEventActionLoading(false)
	}
	return (
		<div>
			{title}
			{description}
			{firstName}
			{lastName}
			{attendeesAmount(attendees.length, capacity)}
			{transformData(startsAt)}
			<button type='button' onClick={_eventAction}>
				{eventActionLoading ? 'LOADING' : eventStatus}
			</button>
		</div>
	)
}

EventCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default EventCard;
