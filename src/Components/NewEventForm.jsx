import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

import { Title, Subtitle } from '../Styles/Typography';
import Input from './Input'
import Label from './Label'
import FormLine from './FormLine'
import Button from './Button';
import { StyledButton } from '../Styles/NewEventFormStyled';
import { createEvent } from '../API/getAllEvents';
import { createDateFormat } from '../Config/dataFormat';

const EventForm = ({onCreateEvent = () => {}}) => {
	const { register, handleSubmit } = useForm();
	const [ isSending, setIsSending ] = useState(false)
	const [, setCreateError ] = useState(false)

	const _onSubmit = async (data) => {
		setCreateError(false)
		setIsSending(true)

		try {
			const ev = await createEvent({
				title: data.title,
				description: data.description,
				startsAt: createDateFormat(data.date, data.time),
				capacity: data.capacity
			})

			onCreateEvent(ev)
		} catch {
			setCreateError(true)

		} finally {
			setIsSending(false)
		}
	}

	const _getDateFromNow = () => {
		return new Date().toISOString().split("T")[0]
	}

	return (
		<>
			<Title>Create new event</Title>
			<Subtitle>Enter detail below.</Subtitle>

			<form onSubmit={handleSubmit(_onSubmit)}>
				<FormLine
					renderLabel={() => <Label htmlFor='name'>Title</Label>}
					renderInput={() => <Input
						type='text'
						id='name'
						placeholder='Title'
						forwardedref={{...register('title', { required: true })}}
					/>}
				/>

				<FormLine
					renderLabel={() => <Label htmlFor='desc'>Description</Label>}
					renderInput={() => <Input
						type='text'
						id='desc'
						placeholder='Description'
						forwardedref={{...register('description', { required: true })}}
					/>}
				/>

				<FormLine
					renderLabel={() => <Label htmlFor='date'>Date</Label>}
					renderInput={() => <Input
						type='date'
						id='date'
						min={_getDateFromNow()}
						placeholder='Date'
						forwardedref={{...register('date', { required: true })}}
					/>}
				/>

				<FormLine
					renderLabel={() => <Label htmlFor='time'>Time</Label>}
					renderInput={() => <Input
						type='time'
						id='time'
						placeholder='Time'
						forwardedref={{...register('time', { required: true })}}
					/>}
				/>

				<FormLine
					renderLabel={() => <Label htmlFor='capacity'>Capacity</Label>}
					renderInput={() => <Input
						type='number'
						id='capacity'
						placeholder='Capacity'
						forwardedref={{...register('capacity', { required: true })}}
					/>}
				/>
			<StyledButton
				isLoading={isSending}
				type='submit'
				color={Button.getTypes().COLOR.PRIMARY}>
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
