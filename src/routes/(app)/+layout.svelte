<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Header from '../components/Header.svelte';

	export let data;

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
			<Header status={data} />
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
