<script>
	import Forecast from '../../../components/Forecast.svelte'
	import { getToday } from '../../../../lib/js/date';

	const today = getToday();

	export let data;
	const irradiance = data.data1.data;
	const weather = data.data2.data.weather;
	const temperature = data.data2.data.temperature;
	const humidity = data.data2.data.humidity;
	const wind = data.data2.data.wind;
	const pltd = data.data3.data;
	const pv = data.data4.data;
	const bss = data.data5.data;

</script>

<Forecast day={today} {irradiance} {weather} {temperature} {humidity} {wind} {pltd} {pv} {bss} />
