<script>
	import { averageIrradiance } from '../../lib/js/avgIrr';
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

	export let arrayIrradiance;
	const waktu = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

	// const result = averageIrradiance(irradiance);
	// const waktu = Object.keys(result);
	// const nilai = Object.values(result).map((num) => Math.round(num));

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	const dataChart = {
		labels: waktu,
		datasets: [
			{
				label: 'Data Irradiance',
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(67, 166, 163)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(0,0,0)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: arrayIrradiance
			}
		]
	};
	const options = {
		scales: {
			x: {
				display: true,
				title: {
					display: true,
					text: 'Waktu (Pukul)'
				}
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'Prediksi Irradiance (kW)'
				}
			}
		}
	};
</script>

<Line data={dataChart} {options} />
