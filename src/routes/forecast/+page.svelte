<script>
	import { averageIrradiance } from '../../lib/js/avgIrr';
	import { getTomorrow, date } from '../../lib/js/date';
	import { weatherCode } from '../../lib/js/weather';
	import { page } from '$app/stores';
	import { Line } from 'svelte-chartjs';
	import berawan from '../../lib/img/cuaca/berawan-am.png';
	import berawanTebal from '../../lib/img/cuaca/berawan-tebal-am.png';
	import cerah from '../../lib/img/cuaca/cerah-am.png';
	import cerahBerawan from '../../lib/img/cuaca/cerah-berawan-am.png';
	import hujanLebat from '../../lib/img/cuaca/hujan-lebat-pm.png';
	import hujanRingan from '../../lib/img/cuaca/hujan-ringan-am.png';
	import hujanSedang from '../../lib/img/cuaca/hujan-sedang-am.png';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	export let data;
	const irradiance = data.data1.data;

	const result = averageIrradiance(irradiance);
	const waktu = Object.keys(result);
	const nilai = Object.values(result).map((num) => Math.round(num));

	const tomorrow = getTomorrow();
	$: searchParams = $page.url.search;
	$: valueSearch = searchParams.slice(9);

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	const dataChart = {
		labels: waktu,
		datasets: [
			{
				label: 'Data Irradiance',
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(13, 110, 253)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(205, 130,1 58)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: nilai
			}
		]
	};

	const weather = data.data2.data;
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

<section>
	<div class="mb-5 text-center">
		<h1>REKOMENDASI MODE OPERASI</h1>
		<h2>{!valueSearch ? date(tomorrow) : date(valueSearch)}</h2>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<form>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Pilih Tanggal</label>
					<input
						type="date"
						class="form-control"
						id="exampleFormControlInput1"
						name="tanggal"
						onchange="this.form.submit()"
					/>
				</div>
			</form>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Mode Operasi</label>
				<input type="text" class="form-control" value="2PV - 2BSS" disabled />
			</div>
			<div class="mt-4 border">
				<h6 class="text-center p-2 bg-secondary text-light">Prediksi Cuaca</h6>
				<div class="d-flex flex-column justify-content-center align-items-center">
					<img src={gambar} class="img-fluid" alt="" />
					<h4>{cuaca}</h4>
				</div>
			</div>
		</div>
		<div class="col-lg-8 text-center">
			<Line data={dataChart} options={{ responsive: true }} />
		</div>
	</div>
</section>

<style>
	h6 {
		margin: 0px;
	}
</style>
