<script>
	import Weather from './Weather.svelte';
	import IrradianceChart from './IrradianceChart.svelte';
	import { date } from '../../lib/js/date';
	import { modeOperasi } from '../../lib/js/mode';
	import { averageIrradiance } from '../../lib/js/avgIrr';

	export let day;
	export let irradiance;
	export let weather;
	export let pltd;
	export let pv;
	export let bss;

	const totalPLTD = pltd[0].status + pltd[1].status;
	const totalPV = pv[0].status + pv[1].status;
	const totalBSS = bss[0].status + bss[1].status;
	let cuaca;
	let maxIrradiance;

	if (weather === 0 || weather === 1 || weather === 2) {
		cuaca = 1;
	} else {
		cuaca = 0;
	}

	const average = averageIrradiance(irradiance);
	const arrayIrradiance = Object.values(average);
	maxIrradiance = Math.max(...arrayIrradiance);

	const mode = modeOperasi(totalPLTD, totalPV, totalBSS, cuaca, maxIrradiance);
</script>

<section>
	<div class="mb-5 text-center">
		<h1>REKOMENDASI MODE OPERASI</h1>
		<h2>{date(day)}</h2>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Mode Operasi</label>
				<input type="text" class="form-control" value={mode} disabled />
			</div>
			<div class="mt-4 border">
				<h6 class="text-center p-2 bg-secondary text-light">Prediksi Cuaca</h6>
				<div class="d-flex flex-column justify-content-center align-items-center">
					<Weather {weather} />
				</div>
			</div>
		</div>
		<div class="col-lg-8 text-center">
			<IrradianceChart {irradiance} />
		</div>
	</div>
</section>

<style>
	h6 {
		margin: 0px;
	}
</style>
