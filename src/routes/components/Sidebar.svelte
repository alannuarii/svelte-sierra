<script>
	import icon from '../../lib/img/icon.png';
	import pnp from '../../lib/img/pnp.png';

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
	<div class="d-flex justify-content-center mb-4">
		<img src={icon} class="moma img-fluid" alt="" />
	</div>
	<ul class="nav nav-pills flex-column mb-auto">
		<li class="nav-item">
			<a href="/" class="nav-link py-3 text-secondary" aria-current="page"
				><i class="bi-house text-primary p-1 me-2" /> Home
			</a>
		</li>
		<li class="nav-item">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="nav-link py-3 text-secondary"
				aria-current="page"
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample"
				on:click={handleToggle1}
			>
				<i class="bi-input-cursor text-primary p-1 me-2" /> Input

				<i class="{isToggled1 ? 'bi-caret-up-fill' : 'bi-caret-down-fill'} ms-2" />
			</div>
			<div class="collapse" id="collapseExample">
				<div class="list-group ms-5">
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
		<li class="nav-item">
			<a href="/rom" class="nav-link py-3 text-secondary" aria-current="page"
				><i class="bi-calendar-week text-primary p-1 me-2" /> ROM
			</a>
		</li>
		<li class="nav-item">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="nav-link py-3 text-secondary"
				aria-current="page"
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample2"
				on:click={handleToggle2}
			>
				<i class="bi-record-circle text-primary p-1 me-2" /> Forecast
				<i class="{isToggled2 ? 'bi-caret-up-fill' : 'bi-caret-down-fill'} ms-2" />
			</div>
			<div class="collapse" id="collapseExample2">
				<div class="list-group ms-5">
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
	</ul>
	<div class="powered d-flex flex-column justify-content-center align-items-center py-2">
		<p class="mb-1">Powered by</p>
		<img src={pnp} class="img-fluid pnp mb-1" alt="" />
	</div>
</div>

<style>
	#sidebar {
		width: 100%;
		height: 100vh;
		background-color: #43a6a3;
		border-right: 5px solid #aac548;
		border-radius: 0 0 40px 0;
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
		width: 60%;
	}
	i,
	.nav-link {
		color: #ffffff !important;
		font-weight: 500;
	}
	.powered {
		background-color: rgba(175, 238, 235, 0.392);
		border-radius: 15px;
	}
	.powered p {
		margin: 0px;
		font-size: 12px;
	}
</style>
