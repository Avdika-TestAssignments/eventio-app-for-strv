import { transformData } from "../Config/dataFormat";
import { get, post, del } from "../API/getMethod";
import { RESOURCES, HTTP_STATUS } from "../Config/constants";

const getEvents = async () => {
  const apiData = await get(RESOURCES.EVENTS);
  const appData = apiData.map(e => transformData(e));

  return appData;
}

const joinEvent = async (eventId) => {
	const response = await post(`${RESOURCES.EVENTS}/${eventId}/${RESOURCES.ATTEND_EVENT}`)

	if (response && response.status === HTTP_STATUS.OK) {
		return
	}
}

const leaveEvent = async (eventId) => {
	const response = await del(`${RESOURCES.EVENTS}/${eventId}/${RESOURCES.ATTEND_EVENT}`)

	if (response && response.status === HTTP_STATUS.OK) {
		return
	}
}

export { getEvents, joinEvent, leaveEvent };
