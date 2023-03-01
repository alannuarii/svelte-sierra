import { getTomorrow } from '../../../lib/js/date';
import { API_ENDPOINT } from '../../../lib/js/endpoint';

export const load = async (params) => {
	let data1;
	let data2;
	let data3;
	let data4;
	let data5;

	const tomorrow = getTomorrow();

	const res1 = await fetch(`${API_ENDPOINT}/irradiance/${tomorrow}`);
	data1 = res1.json();

	const res2 = await fetch(`${API_ENDPOINT}/weather-tomorrow`);
	data2 = res2.json();

	const res3 = await fetch(`${API_ENDPOINT}/rompltd/${tomorrow}`);
	data3 = res3.json();

	const res4 = await fetch(`${API_ENDPOINT}/rompv/${tomorrow}`);
	data4 = res4.json();

	const res5 = await fetch(`${API_ENDPOINT}/rombss/${tomorrow}`);
	data5 = res5.json();

	return {
		data1,
		data2,
		data3,
		data4,
		data5
	};
};
