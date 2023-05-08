<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Header from '../components/Header.svelte';

	export let data;
	const status = data.token;
	const irr1 = data.data1.data.length > 0 ? data.data1.data[0].tanggal : 0;
	const irr2 = data.data1.data.length > 1 ? data.data1.data[1].tanggal : 0;
	const irr3 = data.data1.data.length > 2 ? data.data1.data[2].tanggal : 0;
	const irr4 = data.data1.data.length > 3 ? data.data1.data[3].tanggal : 0;
	console.log(irr1)
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
