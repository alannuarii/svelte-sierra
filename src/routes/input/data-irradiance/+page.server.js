export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('tanggal', data.get('tanggal'));
		formData.append('irradiance', data.get('irradiance'));

		const res = await fetch('https://sierra.anpy.my.id/irradiance', {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};
