import { API_ENDPOINT } from '$env/static/private';

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
	const [res1, res2] = await Promise.all([
		fetch(`${API_ENDPOINT}/irradiance/tanggal`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/last-irradiance`).then((res) => res.json())
	]);
	return {
		data1: res1,
		data2: res2
	};
};


