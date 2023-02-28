<script>
	import Forecast from '../../components/Forecast.svelte';
	import { getTomorrow } from '../../../lib/js/date';

	const tomorrow = getTomorrow();

	export let data;
	const irradiance = data.data1.data;
	const weather = data.data2.data;
	const pltd = data.data3.data;
	const pv = data.data4.data;
	const bss = data.data5.data;
</script>

<Forecast day={tomorrow} {irradiance} {weather} {pltd} {pv} {bss} />
