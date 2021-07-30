import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

import { Title, Subtitle } from '../Styles/typography';
import Input from './Input'
import Label from './Label'
import FormLine from './FormLine'
import Button from './Button';
import { StyledButton } from '../Styles/newEventFormStyled';
import { createEvent } from '../API/getAllEvents';
import { createDateFormat, getTodayDate } from '../Config/dataFormat';

const BUTTON_COLOR = {
	PRIMARY: Button.getTypes().COLOR.PRIMARY
}

const EventForm = ({ onCreateEvent = () => { } }) => {
	const { register, handleSubmit } = useForm();
	const [isSending, setIsSending] = useState(false);

	const submitData = async (data) => {
		setIsSending(true);

		try {
			const eventCreation = await createEvent({
				title: data.title,
				description: data.description,
				startsAt: createDateFormat(data.date, data.time),
				capacity: data.capacity
			})
			onCreateEvent(eventCreation);
		}
		finally {
			setIsSending(false);
		}
	}

	return (
		<>
			<Title>Create new event</Title>
			<Subtitle>Enter detail below.</Subtitle>
			<form onSubmit={handleSubmit(submitData)}>

				<FormLine
					renderLabel={() => <Label htmlFor='name'>Title</Label>}
					renderInput={() => <Input
						type='text'
						id='name'
						placeholder='Title'
						forwardedref={{ ...register('title', { required: true }) }}
						// hasError={errors.title}
						errorMsg="Title has to be filled up"
					/>}
				/>

				<FormLine
					renderLabel={() => <Label htmlFor='desc'>Description</Label>}
					renderInput={() => <Input
						type='text'
						id='desc'
						placeholder='Description'
						forwardedref={{ ...register('description', { required: true }) }}
						// hasError={errors.description}
						errorMsg="Description has to be filled up"
					/>}
				/>

				<FormLine
					renderLabel={() => <Label htmlFor='date'>Date</Label>}
					renderInput={() => <Input
						type='date'
						id='date'
						min={getTodayDate()}
						placeholder='Date'
						forwardedref={{ ...register('date', { required: true }) }}
						// hasError={errors.date}
						errorMsg="Please choose some date"
					/>}
				/>

				<FormLine
					renderLabel={() => <Label htmlFor='time'>Time</Label>}
					renderInput={() => <Input
						type='time'
						id='time'
						placeholder='Time'
						forwardedref={{ ...register('time', { required: true }) }}
						// hasError={errors.time}
						errorMsg="Please pick time"
					/>}
				/>

				<FormLine
					renderLabel={() => <Label htmlFor='capacity'>Capacity</Label>}
					renderInput={() => <Input
						type='number'
						id='capacity'
						placeholder='Capacity'
						forwardedref={{ ...register('capacity', { required: true }) }}
						// hasError={errors.capacity}
						errorMsg="Capacity has to be filled up"
					/>}
				/>
				<StyledButton
					isLoading={isSending}
					type='submit'
					color={BUTTON_COLOR.PRIMARY}>
					Create new event
				</StyledButton>
			</form>
		</>
	)
}

EventForm.propTypes = {
	onCreateEvent: PropTypes.func.isRequired
}

export default EventForm;
