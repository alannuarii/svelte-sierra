<script>
	import Forecast from '../../../components/Forecast.svelte';
	import { getToday } from '../../../../lib/js/date';

	const today = getToday();

	export let data;
	const prediction = data.data1.data;
	const weather = data.data2.data.weather;
	const temperature = data.data2.data.temperature;
	const humidity = data.data2.data.humidity;
	const wind = data.data2.data.wind;
	const arrayIrradiance = data.data3.data;
</script>

<Forecast day={today} {prediction} {weather} {temperature} {humidity} {wind} {arrayIrradiance}  />
