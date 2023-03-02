import { API_ENDPOINT } from '../../../lib/js/endpoint';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('tanggal', data.get('tanggal'));
		formData.append('irradiance', data.get('irradiance'));

		const res = await fetch(`${API_ENDPOINT}/irradiance`, {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};

export const load = async () => {
	const res = await fetch(`${API_ENDPOINT}/irradiance/tanggal`);
	const data = res.json();

	return data;
};
