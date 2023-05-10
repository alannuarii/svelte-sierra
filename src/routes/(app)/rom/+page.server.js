import { API_ENDPOINT } from '../../../lib/js/endpoint';

export const load = async () => {
	const res1 = await fetch(`${API_ENDPOINT}/rompltd/week`);
	const data1 = res1.json();

	const res2 = await fetch(`${API_ENDPOINT}/rompv/week`);
	const data2 = res2.json();

	const res3 = await fetch(`${API_ENDPOINT}/rombss/week`);
	const data3 = res3.json();

	return {
		data1,
		data2,
		data3
	};
};
