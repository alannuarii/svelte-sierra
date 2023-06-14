<script>
	import Timer from '../components/Timer.svelte';
	import icon from '../../lib/img/icon.png';
	import moma from '../../lib/img/moma.png';
	import pltdOn from '../../lib/img/status/pltd-on.png';
	import pltdOff from '../../lib/img/status/pltd-off.png';
	import pvOn from '../../lib/img/status/plts-on.png';
	import pvOff from '../../lib/img/status/plts-off.png';
	import bssOn from '../../lib/img/status/bss-on.png';
	import bssOff from '../../lib/img/status/bss-off.png';
	import Weather from '../components/Weather.svelte';
	import Parameter from '../components/Parameter.svelte';
	import { modeOperasi } from '../../lib/js/mode';
	import { averageIrradiance } from '../../lib/js/avgIrr';

	export let data;
	const weather = data.data2.data.weather;
	const temperature = data.data2.data.temperature;
	const humidity = data.data2.data.humidity;
	const wind = data.data2.data.wind;
	const engine6 = data.data3.data[0].status;
	const engine7 = data.data3.data[1].status;
	const pv1 = data.data4.data[0].status;
	const pv2 = data.data4.data[1].status;
	const bss1 = data.data5.data[0].status;
	const bss2 = data.data5.data[1].status;
	const prediction = data.data1.data;

	// const totalPLTD = engine6 + engine7;
	// const totalPV = pv1 + pv2;
	// const totalBSS = bss1 + bss2;
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
	<div class="row">
		<div class="col-12 text-center">
			<div class="row gx-5">
				<div class="col-8">
					<div><Timer /></div>
					<div class="border shadow py-3">
						<h5 class="mb-1">Mode Operasi Hari Ini</h5>
						<h2>{prediction}</h2>
						<a href="/forecast/today" class="btn btn-sm mt-2"
							><span class="badge"><i class="bi-arrow-right-circle me-1" /> Detail</span></a
						>
					</div>
				</div>
				<div class="col-4 mb-4">
					<img src={moma} alt="" class="icon" />
				</div>
			</div>
			<div class="row gx-5">
				<div class="col-8">
					<div class="row border shadow status">
						<h3 class="text-center py-3">Status Peralatan Hari Ini</h3>
						<div class="col-2 d-flex justify-content-end py-4">
							<div class="d-flex flex-column justify-content-center">
								{#if engine6 === 1}
									<img src={pltdOn} alt="" />
									<div class="on py-2 mt-1">
										<h6>DG 6</h6>
										<p>(Stand by)</p>
									</div>
								{:else}
									<img src={pltdOff} alt="" />
									<div class="off py-2 mt-1">
										<h6>DG 6</h6>
										<p>(Pemeliharaan)</p>
									</div>
								{/if}
							</div>
						</div>
						<div class="col-2 d-flex justify-content-start py-4">
							<div class="d-flex flex-column justify-content-center">
								{#if engine7 === 1}
									<img src={pltdOn} alt="" />
									<div class="on py-2 mt-1">
										<h6>DG 7</h6>
										<p>(Stand by)</p>
									</div>
								{:else}
									<img src={pltdOff} alt="" />
									<div class="off py-2 mt-1">
										<h6>DG 7</h6>
										<p>(Pemeliharaan)</p>
									</div>
								{/if}
							</div>
						</div>
						<div class="col-2 d-flex justify-content-end py-4">
							<div class="d-flex flex-column justify-content-center">
								{#if pv1 === 1}
									<img src={pvOn} alt="" />
									<div class="on py-2 mt-1">
										<h6>PV 1</h6>
										<p>(Stand by)</p>
									</div>
								{:else}
									<img src={pvOff} alt="" />
									<div class="off py-2 mt-1">
										<h6>PV 1</h6>
										<p>(Pemeliharaan)</p>
									</div>
								{/if}
							</div>
						</div>
						<div class="col-2 d-flex justify-content-start py-4">
							<div class="d-flex flex-column justify-content-center">
								{#if pv2 === 1}
									<img src={pvOn} alt="" />
									<div class="on py-2 mt-1">
										<h6>PV 2</h6>
										<p>(Stand by)</p>
									</div>
								{:else}
									<img src={pvOff} alt="" />
									<div class="off py-2 mt-1">
										<h6>PV 2</h6>
										<p>(Pemeliharaan)</p>
									</div>
								{/if}
							</div>
						</div>
						<div class="col-2 d-flex justify-content-end py-4">
							<div class="d-flex flex-column justify-content-center">
								{#if bss1 === 1}
									<img src={bssOn} alt="" />
									<div class="on py-2 mt-1">
										<h6>BSS 1</h6>
										<p>(Stand by)</p>
									</div>
								{:else}
									<img src={bssOff} alt="" />
									<div class="off py-2 mt-1">
										<h6>BSS 1</h6>
										<p>(Pemeliharaan)</p>
									</div>
								{/if}
							</div>
						</div>
						<div class="col-2 d-flex justify-content-start py-4">
							<div class="d-flex flex-column justify-content-center">
								{#if bss2 === 1}
									<img src={bssOn} alt="" />
									<div class="on py-2 mt-1">
										<h6>BSS 2</h6>
										<p>(Stand by)</p>
									</div>
								{:else}
									<img src={bssOff} alt="" />
									<div class="off py-2 mt-1">
										<h6>BSS 2</h6>
										<p>(Pemeliharaan)</p>
									</div>
								{/if}
							</div>
						</div>
						<div>
							<a href="/rom" class="btn btn-sm mb-3"
								><span class="badge"><i class="bi-arrow-right-circle me-1" /> Detail</span></a
							>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="border shadow mb-1">
						<h3 class="text-center py-3">Prediksi Cuaca Hari Ini</h3>
						<div class="d-flex flex-column justify-content-center align-items-center">
							<Weather {weather} />
						</div>
						<div class="my-1">
							<Parameter {temperature} {humidity} {wind} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	p {
		margin: 0px;
		font-weight: 500;
		font-size: 12px;
		color: #ffffff;
	}
	h6 {
		margin: 0px;
		font-size: 15px;
		color: #ffffff;
	}
	.status img {
		height: 50%;
	}
	h5,
	h2 {
		margin: 0px;
	}
	h5 {
		font-size: 25px;
	}
	h2 {
		font-weight: 700;
		color: #43a6a3;
	}
	h3 {
		margin: 0px;
		font-size: 20px;
		background-color: #43a6a3;
		color: #ffffff;
		border-bottom: 3px solid #aac548;
	}
	.icon {
		height: 180px;
	}
	.btn {
		background-color: #43a6a3;
		border-radius: 0px;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
	span {
		font-weight: 400;
	}
	.on {
		background-color: #43a6a3;
		border-radius: 21px;
	}
	.off {
		background-color: #2f3e46;
		border-radius: 21px;
		color: #ffffff;
	}
	.border {
		border-radius: 25px;
	}
</style>
