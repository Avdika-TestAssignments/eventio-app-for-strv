import { SETTINGS } from '../Config/settings';
import { fetchData } from '../Config/fetch';

const get = async (url = '', options = {}) => {
	const requestOptions = Object.assign({
		method: 'GET',
	},
		{ ...options });

	const reponse = await fetchData(`${SETTINGS.API_URL}/${url}`, requestOptions);
	const parsedData = await reponse.json();

	return parsedData;
}

const post = async (url = '', data = {}, options = {}) => {
	const requestOptions = Object.assign({
		method: 'POST',
		body: JSON.stringify(data)
	},
		{ ...options });

	const response = await fetchData(`${SETTINGS.API_URL}/${url}`, requestOptions);
	return response;
}

const del = async (url = '', options = {}) => {
  const requestOptions = Object.assign(
    {
      method: 'DELETE',
    },
    { ...options });

  const response = await fetchData(`${SETTINGS.API_URL}/${url}`, requestOptions);
  return response;
}

export { get, post, del };
