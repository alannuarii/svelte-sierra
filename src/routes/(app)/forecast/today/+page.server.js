import { getToday } from '../../../../lib/js/date';
import { API_ENDPOINT } from '../../../../lib/js/endpoint';

export const load = async (params) => {
	let data1;
	let data2;
	let data3;

	const today = getToday();

	const res1 = await fetch(`${API_ENDPOINT}/forcast-today/${today}`);
	data1 = res1.json();

	const res2 = await fetch(`${API_ENDPOINT}/weather-today`);
	data2 = res2.json();

	const res3 = await fetch(`${API_ENDPOINT}/irradiance-array/${today}`);
	data3 = res3.json();

	return {
		data1,
		data2,
		data3
	};
};
