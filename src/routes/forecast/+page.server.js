import { getToday } from '../../lib/js/date';

export const load = async (params) => {
	const tanggal = params.url.searchParams.get('tanggal');

	if (!tanggal) {
		const today = getToday();
		const res = await fetch(`http://127.0.0.1:5000/irradiance/${today}`);
		const data = res.json();
		return data;
	} else {
		const res = await fetch(`http://127.0.0.1:5000/irradiance/${tanggal}`);
		const data = res.json();
		return data;
	}
};
