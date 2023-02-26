<script>
	import Sidebar from './components/Sidebar.svelte';
	import Header from './components/Header.svelte';
</script>

<svelte:head>
	<title>SIERRA</title>
	<meta name="description" content="EnvironApp" />
</svelte:head>

<main>
	<div class="row gx-0">
		<div class="col-2 d-none d-lg-block">
			<Sidebar />
		</div>
		<div class="col-lg-10">
			<Header />
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
    .content{
        height: 662px;
		overflow-x: hidden;
		overflow-y: auto;
    }
</style>
