import React, { useState, useEffect } from 'react';

import { getEvents } from '../API/getAllEvents';
import { FILTER, EVENTS_VIEW_MODE } from '../Config/constants';
import EventCard from './EventCard';
import Layout from './Layout';
import EventForm from './NewEventForm';
import { Content, EventsActions, List } from '../Styles/eventListStyled';
import FilterButton from './FilterButton';
import Popup from './Popup';
import RoundButton from './RoundButton';
import IconButton from '../Styles/iconButtonStyled';
import PageLoader from './PageLoader';
import gridIcon from '../Images/gridView.png';
import listIcon from '../Images/listView.png';

const Events = () => {
	const [events, setEvents] = useState([]);
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [isEventLoading, setEventLoading] = useState(false);
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [filterBy, setFilterBy] = useState(FILTER.ALL);
	const [cardView, setCardView] = useState(EVENTS_VIEW_MODE.LIST);

	useEffect(() => {
		async function fetchData() {
			setEventLoading(true);
			let response = await getEvents();
			setEvents(response);
			setFilteredEvents(response);
			setEventLoading(false);
		}
		fetchData()
	}, [])

	const sortEvents = (e) => {
		setFilterBy(e.target.value);
	}

	const eventListView = (e) => {
		setCardView(e.target.value);
	}

	const sortEventsByDate = (filterEv, filterByEvent) => {
		const newEvents = filterEv || [];

		return newEvents.filter(e => {
			const eventDate = new Date(e.startsAt);
			const actualDate = new Date();

			if (filterByEvent === FILTER.PAST) {
				return eventDate < actualDate;
			} else if (filterByEvent === FILTER.FUTURE) {
				return eventDate > actualDate;
			} else {
				return e;
			}
		})
	}

	useEffect(() => {
		const filterEvents = sortEventsByDate(events, filterBy);
		setFilteredEvents(filterEvents);
	}, [filterBy, events])

	const createEvent = (data) => {
		setEvents([...events, data]);
		setShowCreateForm(false);
	}

	const createEventForm = () => {
		setShowCreateForm(!showCreateForm);
	}

	return (
		<Layout>
			<Content>
				<EventsActions>
					<div>
						<FilterButton
							isActive={filterBy === FILTER.ALL}
							type='button' onClick={sortEvents}
							value={FILTER.ALL}
						>
							all events
						</FilterButton>

						<FilterButton
							isActive={filterBy === FILTER.FUTURE}
							type='button' onClick={sortEvents}
							value={FILTER.FUTURE}
						>
							future events
						</FilterButton>

						<FilterButton
							isActive={filterBy === FILTER.PAST}
							type='button'
							onClick={sortEvents}
							value={FILTER.PAST}
						>
							past events
						</FilterButton>
					</div>
					<div>
						<IconButton
							iconUrl={gridIcon}
							type="button"
							onClick={eventListView}
							value={EVENTS_VIEW_MODE.CARDS}
							isActive={cardView === EVENTS_VIEW_MODE.CARDS}
						/>
						<IconButton
							iconUrl={listIcon}
							type="button"
							onClick={eventListView}
							value={EVENTS_VIEW_MODE.LIST}
							isActive={cardView === EVENTS_VIEW_MODE.LIST}
						/>
					</div>
				</EventsActions>
				<List type={cardView}>
					{isEventLoading ? ( <PageLoader /> ) : ( filteredEvents.map((e) => (
							<EventCard type={cardView} key={e.id} data={e} />
						))
					)}
				</List>

				<RoundButton
					type='button'
					title='Create new event'
					onClick={createEventForm}>New event</RoundButton>

				{showCreateForm &&
					<Popup onClose={createEventForm}>
						<EventForm onCreateEvent={(data) => createEvent(data)} />
					</Popup>
				}
			</Content>
		</Layout>
	)
}

export default Events;
