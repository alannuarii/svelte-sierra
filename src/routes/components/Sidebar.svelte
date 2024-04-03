<script>
	import icon from '../../lib/img/icon.png';
	import pnp from '../../lib/img/np.png';

	export let status;

	let isToggled1 = false;
	let isToggled2 = false;

	const handleToggle1 = () => {
		isToggled1 = !isToggled1;
	};

	const handleToggle2 = () => {
		isToggled2 = !isToggled2;
	};
</script>

<div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3">
	<div class="d-flex justify-content-center mb-3">
		<img src={icon} class="moma img-fluid" alt="" />
	</div>
	<ul class="nav nav-pills flex-column mb-auto">
		<li class="nav-item">
			<a href="/" class="nav-link text-secondary" aria-current="page"
				><i class="bi-house text-primary p-1 me-2" /> Home
			</a>
		</li>
		{#if status.role < 2}
			<div />
		{:else}
			<li class="nav-item">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="nav-link text-secondary"
					aria-current="page"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample"
					on:click={handleToggle1}
				>
					<i class="bi-input-cursor text-primary p-1 me-2" /> Input

					<i class="{isToggled1 ? 'bi-caret-up-fill' : 'bi-caret-down-fill'} ms-2" />
				</div>
				<div class="collapse" id="collapseExample">
					<div class="list-group ms-3">
						<a
							href="/input/data-irradiance"
							class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
							><i class="bi-lightning-charge" /> Irradiance</a
						>
						<a
							href="/input/rom-pltd"
							class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
							><i class="bi-lightning-charge" /> ROM PLTD</a
						>
						<a
							href="/input/rom-plts"
							class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
							><i class="bi-lightning-charge" /> ROM PLTS</a
						>
						<a
							href="/input/rom-bss"
							class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
							><i class="bi-lightning-charge" /> ROM BSS</a
						>
					</div>
				</div>
			</li>
		{/if}
		<li class="nav-item">
			<a href="/rom" class="nav-link text-secondary" aria-current="page"
				><i class="bi-calendar-week text-primary p-1 me-2" /> ROM
			</a>
		</li>
		<li class="nav-item">
			<a href="/rekap" class="nav-link text-secondary " aria-current="page"
				><i class="bi-table text-primary p-1 me-2" /> Rekap Data
			</a>
		</li>
		<li class="nav-item">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="nav-link text-secondary"
				aria-current="page"
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample2"
				on:click={handleToggle2}
			>
				<i class="bi-record-circle text-primary p-1 me-2" /> Forecast
				<i class="{isToggled2 ? 'bi-caret-up-fill' : 'bi-caret-down-fill'} ms-2" />
			</div>
			<div class="collapse" id="collapseExample2">
				<div class="list-group ms-3">
					<a
						href="/forecast/today"
						class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
						><i class="bi-lightning-charge" /> Hari Ini</a
					>
					<a
						href="/forecast/tomorrow"
						class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
						><i class="bi-lightning-charge" /> Besok</a
					>
				</div>
			</div>
		</li>
		<li class="nav-item">
			<a href="/bssoptima" class="nav-link text-secondary " aria-current="page"
				><i class="bi-battery-charging text-primary p-1 me-2" /> BSS optima
			</a>
		</li>
	</ul>
	<div class="powered position-absolute bottom-0 start-0 mb-3 ms-3">
		<img src={pnp} class="img-fluid pnp mb-1" alt="" />
	</div>
</div>

<style>
	#sidebar {
		color: #ffffff;
		width: 100%;
		height: 100vh;
		background-color: #43a6a3;
		background-image: url('../../lib/img/bolt.png');
		background-position: left;
		background-repeat: no-repeat;
		background-size: 180%;
		border-radius: 0 0 150px 0;
	}
	a {
		text-decoration: none;
		color: #ffffff !important;
	}
	.nav-item {
		cursor: pointer;
	}
	a:hover {
		color: #000 !important;
	}
	.moma {
		height: 100px;
		border: 7px solid #ffffff;
		border-radius: 20px;
	}
	.pnp {
		width: 10%;
	}
	i,
	.nav-link {
		color: #ffffff !important;
		font-weight: 300;
		padding: 10px 10px;
		font-size: 1vw;
	}
	.list-group-item {
		font-weight: 300;
		font-size: 1vw;
	}
	/* .nav-link span {
		font-size: 10px;
		color: #000;
		font-style: italic;
	} */
</style>
