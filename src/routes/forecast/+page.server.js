import { getTomorrow } from '../../lib/js/date';

export const load = async (params) => {
	let data1;
	let data2;

	const tanggal = params.url.searchParams.get('tanggal');

	if (!tanggal) {
		const tomorrow = getTomorrow();
		const res1 = await fetch(`http://127.0.0.1:5000/irradiance/${tomorrow}`);
		data1 = res1.json();
	} else {
		const res1 = await fetch(`http://127.0.0.1:5000/irradiance/${tanggal}`);
		data1 = res1.json();
	}

	const res2 = await fetch(`http://127.0.0.1:5000/weather`);
	data2 = res2.json();

	return {
		data1,
		data2
	};
};
