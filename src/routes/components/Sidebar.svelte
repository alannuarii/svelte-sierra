<script>
	import icon from '../../lib/img/icon.png';
</script>

<div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 bg-dark">
	<div class="d-flex justify-content-center mb-4">
		<img src={icon} class="img-fluid" alt="" />
	</div>
	<ul class="nav nav-pills flex-column">
		<li class="nav-item">
			<a href="/" class="nav-link py-3 text-secondary" aria-current="page"
				><i class="bi-house text-primary p-1 me-2" /> Home
			</a>
		</li>
		<li class="nav-item">
			<div
				class="nav-link py-3 text-secondary"
				aria-current="page"
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample"
			>
				<i class="bi-input-cursor text-primary p-1 me-2" /> Input
			</div>
			<div class="collapse" id="collapseExample">
				<div class="list-group ms-5">
					<a
						href="/input/data-irradiance"
						class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
						>Data Irradiance</a
					>
					<a
						href="/input/rom-pltd"
						class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
						>ROM PLTD</a
					>
					<a
						href="/input/rom-plts"
						class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
						>ROM PLTS</a
					>
					<a
						href="/input/rom-bss"
						class="list-group-item list-group-item-action bg-transparent text-secondary border border-0"
						>ROM BSS</a
					>
				</div>
			</div>
		</li>
		<li class="nav-item">
			<a href="/forecast" class="nav-link py-3 text-secondary" aria-current="page"
				><i class="bi-record-circle text-primary p-1 me-2" /> Forecast
			</a>
		</li>
	</ul>
</div>

<style>
	#sidebar {
		width: 100%;
		height: 100vh;
	}
	a {
		text-decoration: none;
	}
	.nav-item {
		cursor: pointer;
	}
	.list-group a:hover {
		color: #0d6efd !important;
	}
	img {
		height: 100px;
	}
</style>
