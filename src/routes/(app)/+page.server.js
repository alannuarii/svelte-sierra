import { getToday } from '../../lib/js/date';
import { API_ENDPOINT } from '$env/static/private';

export const load = async (params) => {
	const today = getToday();

	const [res1, res2, res3, res4, res5] = await Promise.all([
		fetch(`${API_ENDPOINT}/forcast-today/${today}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/weather-today`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/rompltd/${today}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/rompv/${today}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/rombss/${today}`).then((res) => res.json())
	]);

	return {
		data1: res1,
		data2: res2,
		data3: res3,
		data4: res4,
		data5: res5
	};
};
