<script>
	import Weather from './Weather.svelte';
	import IrradianceChart from './IrradianceChart.svelte';
	import ModalSop from './ModalSOP.svelte';
	import { date } from '../../lib/js/date';
	import { modeOperasi } from '../../lib/js/mode';
	import { averageIrradiance } from '../../lib/js/avgIrr';
	import Parameter from './Parameter.svelte';

	export let prediction;
	export let arrayIrradiance;

	export let day;
	// export let irradiance;
	export let weather;
	export let temperature;
	export let humidity;
	export let wind;
	// export let pltd;
	// export let pv;
	// export let bss;

	// const totalPLTD = pltd[0].status + pltd[1].status;
	// const totalPV = pv[0].status + pv[1].status;
	// const totalBSS = bss[0].status + bss[1].status;
	// let cuaca;
	// let maxIrradiance;

	// if (parseInt(weather) === 0 || parseInt(weather) === 1 || parseInt(weather) === 2) {
	// 	cuaca = 1;
	// } else {
	// 	cuaca = 0;
	// }

	// const average = averageIrradiance(irradiance);
	// const arrayIrradiance = Object.values(average);
	// maxIrradiance = Math.max(...arrayIrradiance);

	// const mode = modeOperasi(totalPLTD, totalPV, totalBSS, cuaca, maxIrradiance);
</script>

<section>
	<div class="mb-3 text-center">
		<h1>REKOMENDASI MODE OPERASI</h1>
		<h2>{date(day)}</h2>
	</div>
	<div class="row">
		<div class="col-lg-4">
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Mode Operasi</label>
				<div class="row">
					<div class="col-8">
						<input type="text" class="form-control" value={prediction} disabled />
					</div>
					<div class="col-4">
						<button class="btn text-light sop" data-bs-toggle="modal" data-bs-target="#modalSOP"
							>Lihat SOP</button
						>
					</div>
					<ModalSop {prediction} />
				</div>
			</div>
			<div class="mt-4 border shadow-sm mb-3">
				<h6 class="text-center p-3">Prediksi Cuaca</h6>
				<div class="d-flex flex-column justify-content-center align-items-center">
					<Weather {weather} />
				</div>
			</div>
			<Parameter {temperature} {humidity} {wind} />
		</div>
		<div class="col-lg-8 text-center mt-5">
			<IrradianceChart {arrayIrradiance} />
		</div>
	</div>
</section>

<style>
	h1 {
		font-weight: 300;
	}
	h2 {
		color: #43a6a3;
	}
	h6 {
		margin: 0px;
		background-color: #43a6a3;
		color: #ffffff;
		border-bottom: 3px solid #aac548;
	}
	button,
	input {
		border-radius: 0px;
	}
	.btn {
		background-color: #43a6a3;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
	.border {
		border-radius: 25px;
	}
	@media screen and (max-width: 1100px) {
		.sop {
			display: none;
		}
	}
</style>
