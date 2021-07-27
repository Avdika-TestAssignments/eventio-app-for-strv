export const transformData = (data) => {
	return {
		id: data._id || null,
		title: data.title || '',
		description: data.description || '',
		startsAt: data.startsAt || null,
		capacity: data.capacity || 0,
		owner: {
			id: data.owner.id || null,
			firstName: data.owner.firstName || '',
			lastName: data.owner.lastName || ''
		},
		attendees: data.attendees.map(attendee => {
			return { id: attendee._id || null}
		})
	}
}

export const attendeesAmount = (attendees = 0, capacity = 0) => {
	return `${attendees} of ${capacity}`
}

export const dateFormat = (date = null) => {
  if (date) {
    const newDate = new Date(date)
    const day = newDate.getDate()
    const year = newDate.getFullYear()
    const month = newDate.toLocaleString('en-US', { month: 'short' })
    const time = newDate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })

    return `${month} ${day}, ${year} - ${time}`
  } else return null
}

export const createDateFormat = (date = '', time = '') => {
  return `${date}T${time}Z`
}
