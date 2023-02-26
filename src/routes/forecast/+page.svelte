<script>
	import { averageIrradiance } from '../../lib/js/avgIrr';
	import { onMount } from 'svelte';
	import { Line } from 'svelte-chartjs';
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
	const irradiance = data.data;

	const result = averageIrradiance(irradiance);
	const waktu = Object.keys(result);
	const nilai = Object.values(result).map((num) => Math.round(num));

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	const dataChart = {
		labels: waktu,
		datasets: [
			{
				label: 'Data Irradiance',
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(205, 130, 158)',
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
</script>

<section>
	<div class="mb-5 text-center">
		<h1>REKOMENDASI MODE OPERASI</h1>
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
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Prediksi Cuaca</label>
				<input type="text" class="form-control" value="Cerah Berawan" disabled />
			</div>
		</div>
		<div class="col-lg-8 text-center">
			<Line data={dataChart} options={{ responsive: true }} />
		</div>
	</div>
</section>
