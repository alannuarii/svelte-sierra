<script>
	import berawan from '../../lib/img/cuaca/berawan-am.png';
	import berawanTebal from '../../lib/img/cuaca/berawan-tebal-am.png';
	import cerah from '../../lib/img/cuaca/cerah-am.png';
	import cerahBerawan from '../../lib/img/cuaca/cerah-berawan-am.png';
	import hujanLebat from '../../lib/img/cuaca/hujan-lebat-pm.png';
	import hujanRingan from '../../lib/img/cuaca/hujan-ringan-am.png';
	import hujanSedang from '../../lib/img/cuaca/hujan-sedang-am.png';
	import { weatherCode } from '../../lib/js/weather';

	export let weather;

	const code = weatherCode;
	const gambarCuaca = [
		{ 0: cerah },
		{ 1: cerahBerawan },
		{ 2: cerahBerawan },
		{ 3: berawan },
		{ 4: berawanTebal },
		{ 5: '' },
		{ 10: '' },
		{ 45: '' },
		{ 60: hujanRingan },
		{ 61: hujanSedang },
		{ 63: hujanLebat },
		{ 80: hujanRingan },
		{ 95: hujanLebat },
		{ 97: hujanLebat }
	];
	let cuaca = null;
	let gambar = null;

	for (let i = 0; i < code.length; i++) {
		const key = Object.keys(code[i])[0];
		if (key === weather) {
			cuaca = code[i][key];
			gambar = gambarCuaca[i][key];
			break;
		}
	}
</script>

<img src={gambar} class="img-fluid py-3" alt="" />
<h4>{cuaca}</h4>
