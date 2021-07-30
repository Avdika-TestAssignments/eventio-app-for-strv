import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { dateFormat, attendeesAmount } from '../Config/dataFormat';
import { userContext } from '../Context/userContext';
import { joinEvent, leaveEvent } from '../API/getAllEvents';
import Button from './Button';
import { Card, Item } from '../Styles/eventCardStyled';
import { EVENT_STATUS } from '../Config/constants';

const BUTTON_COLORS = {
	[EVENT_STATUS.JOINED]: Button.getTypes().COLOR.PRIMARY,
	[EVENT_STATUS.LEFT]: Button.getTypes().COLOR.SECONDARY,
	[EVENT_STATUS.OWNER]: Button.getTypes().COLOR.NORMAL
}

const EventCard = ({ data }) => {
	const [eventActionLoading, setEventActionLoading] = useState(false);
	const [eventStatus, setEventStatus] = useState('');
	const { state } = useContext(userContext);
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
			setEventStatus(EVENT_STATUS.OWNER);
		} else if (attendees.find(attendee => attendee.id === id)) {
			//logged user has already join event
			setEventStatus(EVENT_STATUS.LEFT);
		} else {
			//user is not attendee and not event owner
			setEventStatus(EVENT_STATUS.JOINED);
		}
	}, [id, attendees, ownerId]);

	const eventClick = async (e) => {
		e.stopPropagation();
		setEventActionLoading(true);

		//try to join event
		if (eventStatus === EVENT_STATUS.JOINED) {
			await joinEvent(eventId);
			setEventStatus(EVENT_STATUS.LEFT);
		} else if (eventStatus === EVENT_STATUS.LEFT) {
			//try to leave event
			await leaveEvent(eventId);
			setEventStatus(EVENT_STATUS.JOINED);
		}
		setEventActionLoading(false);
	}

	const eventDate = new Date(startsAt);
	const actualDate = new Date();

	const disableButton =
		actualDate > eventDate &&
		(eventStatus === EVENT_STATUS.JOINED || eventStatus === EVENT_STATUS.LEFT);

	const fullCapacity =
		eventStatus === EVENT_STATUS.JOINED && attendees.length === capacity;

	return (
		<Card>
			<Item>{title}</Item>
			<Item>{description}</Item>
			<Item>{firstName} {lastName}</Item>
			<Item>{dateFormat(startsAt)}</Item>
			<Item>{attendeesAmount(attendees.length, capacity)}</Item>
			<Button
				disabled={disableButton || fullCapacity}
				isLoading={eventActionLoading}
				size={Button.getTypes().SIZE.SMALL}
				color={BUTTON_COLORS[eventStatus]}
				type='button'
				onClick={eventClick}
			>
				{eventStatus}
			</Button>
		</Card>
	)
}

EventCard.propTypes = {
	data: PropTypes.object.isRequired
}

export default EventCard;
