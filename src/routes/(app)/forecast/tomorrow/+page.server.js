import { getTomorrow } from '../../../../lib/js/date';
import { API_ENDPOINT } from '$env/static/private';

export const load = async (params) => {
	const tomorrow = getTomorrow();

	const [res1, res2, res3] = await Promise.all([
		fetch(`${API_ENDPOINT}/forcast-tomorrow/${tomorrow}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/weather-tomorrow`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/irradiance-array/${tomorrow}`).then((res) => res.json())
	]);

	return {
		data1: res1,
		data2: res2,
		data3: res3
	};
};
