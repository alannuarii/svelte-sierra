<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Header from '../components/Header.svelte';
	import { formatTanggalObject, getBefore4Day } from '../../lib/js/date';

	export let data;
	const status = data.token;
	const irrDateObj = formatTanggalObject(data.data1.data);
	const dateObj = getBefore4Day();

	const irrDate = dateObj.filter((item) => !irrDateObj.includes(item));

	const irr1 = irrDate.length > 3 ? irrDate[3] : 0;
	const irr2 = irrDate.length > 2 ? irrDate[2] : 0;
	const irr3 = irrDate.length > 1 ? irrDate[1] : 0;
	const irr4 = irrDate.length > 0 ? irrDate[0] : 0;
</script>

<svelte:head>
	<title>SIERRA</title>
	<meta name="description" content="SIERRA" />
</svelte:head>

<main>
	<div class="row gx-0">
		<div class="col-2 d-none d-lg-block">
			<Sidebar />
		</div>
		<div class="col-lg-10">
			<Header {status} {irr1} {irr2} {irr3} {irr4} />
			<div class="content px-5 py-4 bg-body-tertiary">
				<slot />
			</div>
		</div>
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
	}
	.content {
		height: 643px;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>
