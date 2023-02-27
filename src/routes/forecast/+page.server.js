import { getTomorrow } from '../../lib/js/date';

export const load = async (params) => {
	let data1;
	let data2;
	let data3;
	let data4;
	let data5;

	const tanggal = params.url.searchParams.get('tanggal');
	const tomorrow = getTomorrow();

	if (!tanggal) {
		const res1 = await fetch(`https://sierra.anpy.my.id/irradiance/${tomorrow}`);
		data1 = res1.json();
	} else {
		const res1 = await fetch(`https://sierra.anpy.my.id/irradiance/${tanggal}`);
		data1 = res1.json();
	}

	const res2 = await fetch(`https://sierra.anpy.my.id/weather`);
	data2 = res2.json();

	const res3 = await fetch(`https://sierra.anpy.my.id/rompltd/${tomorrow}`);
	data3 = res3.json();

	const res4 = await fetch(`https://sierra.anpy.my.id/rompv/${tomorrow}`);
	data4 = res4.json();

	const res5 = await fetch(`https://sierra.anpy.my.id/rombss/${tomorrow}`);
	data5 = res5.json();

	return {
		data1,
		data2,
		data3,
		data4,
		data5
	};
};
