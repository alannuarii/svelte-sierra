export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('jenis', data.get('jenis'));
		formData.append('tanggal', data.get('tanggal'));
		formData.append('jumat1', data.get('jumat1'));
		formData.append('sabtu1', data.get('sabtu1'));
		formData.append('minggu1', data.get('minggu1'));
		formData.append('senin1', data.get('senin1'));
		formData.append('selasa1', data.get('selasa1'));
		formData.append('rabu1', data.get('rabu1'));
		formData.append('kamis1', data.get('kamis1'));
		formData.append('jumat2', data.get('jumat2'));
		formData.append('sabtu2', data.get('sabtu2'));
		formData.append('minggu2', data.get('minggu2'));
		formData.append('senin2', data.get('senin2'));
		formData.append('selasa2', data.get('selasa2'));
		formData.append('rabu2', data.get('rabu2'));
		formData.append('kamis2', data.get('kamis2'));

		const res = await fetch('http://127.0.0.1:5000/rom', {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};
