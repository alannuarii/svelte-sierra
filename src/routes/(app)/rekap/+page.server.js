import { getYearMonth } from '../../../lib/js/date';
import { API_ENDPOINT } from '../../../lib/js/endpoint';

export const load = async (params) => {
	const tahunBulan =
		params.url.searchParams.get('bulan') === null
			? getYearMonth()
			: params.url.searchParams.get('bulan');

	const [res1, res2, res3, res4, res5, res6] = await Promise.all([
		fetch(`${API_ENDPOINT}/rompltd/rekap/${tahunBulan}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/rompv/rekap/${tahunBulan}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/rombss/rekap/${tahunBulan}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/weather/rekap/${tahunBulan}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/irradiance/rekap/${tahunBulan}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/mode/rekap/${tahunBulan}`).then((res) => res.json())
	]);

	return {
		data1: res1,
		data2: res2,
		data3: res3,
		data4: res4,
		data5: res5,
		data6: res6
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('sync', data.get('sync'));

		const res = await fetch(`${API_ENDPOINT}/sync`, {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};
