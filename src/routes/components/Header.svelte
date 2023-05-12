<script>
	import unknown from '../../lib/img/unknown.png';
	import { date2, getThursday, getToday, getFriday } from '../../lib/js/date';

	export let status;
	export let irr1;
	export let irr2;
	export let irr3;
	export let irr4;

	let login = false;
	let thursday = false;

	if (status.length !== 0) {
		login = true;
	}

	if (getThursday() === getToday()) {
		thursday = true;
	}

	const reload = () => {
		location.reload();
	};
</script>

<nav class="navbar bg-light-subtle shadow">
	<div class="container-fluid">
		<a class="navbar-brand text-dark ms-3 d-flex align-items-center" href="/"
			>S I E R R A<span class="ms-2">| Sangihe Solar Irradiance Forecaster</span></a
		>
		<div class="ms-auto me-4 reload">
			<button
				on:click={reload}
				data-bs-toggle="tooltip"
				data-bs-placement="bottom"
				data-bs-title="Reload"><i class="bi-arrow-clockwise" /></button
			>
		</div>
		{#if login}
			<div class="dropdown-center me-4">
				<i
					class="bi-bell-fill notif position-relative"
					data-bs-toggle="dropdown"
					data-bs-display="static"
				>
					{#if thursday === false || irr1 !== 0 || irr2 !== 0 || irr3 !== 0 || irr4 !== 0}
						<span class="notif-dot bg-danger border border-3 border-light rounded-circle">
							<span class="visually-hidden">New alerts</span>
						</span>
					{/if}
				</i>
				<ul class="dropdown-menu dropdown-menu-dark p-1 notif-menu">
					<div class="list-group">
						{#if thursday}
							<a
								href="/input/rom-pltd"
								class="list-group-item list-group-item-action bg-transparent text-light border-0"
								>ROM PLTD tanggal {date2(getFriday())} belum diinput</a
							>

							<a
								href="/input/rom-plts"
								class="list-group-item list-group-item-action bg-transparent text-light border-0"
								>ROM PLTS tanggal {date2(getFriday())} belum diinput</a
							>
							<a
								href="/input/rom-bss"
								class="list-group-item list-group-item-action bg-transparent text-light border-0"
								>ROM BSS tanggal {date2(getFriday())} belum diinput</a
							>
						{/if}

						{#if irr1 !== 0}
							<a
								href="/input/data-irradiance"
								class="list-group-item list-group-item-action bg-transparent text-light border-0"
								>Data irradiance tanggal {date2(irr1)} belum diinput</a
							>
						{/if}
						{#if irr2 !== 0}
							<a
								href="/input/data-irradiance"
								class="list-group-item list-group-item-action bg-transparent text-light border-0"
								>Data irradiance tanggal {date2(irr2)} belum diinput</a
							>
						{/if}
						{#if irr3 !== 0}
							<a
								href="/input/data-irradiance"
								class="list-group-item list-group-item-action bg-transparent text-light border-0"
								>Data irradiance tanggal {date2(irr3)} belum diinput</a
							>
						{/if}
						{#if irr4 !== 0}
							<a
								href="/input/data-irradiance"
								class="list-group-item list-group-item-action bg-transparent text-light border-0"
								>Data irradiance tanggal {date2(irr4)} belum diinput</a
							>
						{/if}
					</div>
				</ul>
			</div>
			<div class="dropdown-center">
				<div class="me-3 user d-flex" data-bs-toggle="dropdown" data-bs-display="static">
					<img src={unknown} class="me-2" alt="" />
					<h6 class="d-block my-auto">{status.name}</h6>
				</div>
				<ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark">
					<li>
						<a class="dropdown-item d-flex align-items-center justify-content-center" href="/logout"
							><i class="bi-box-arrow-right me-2" />Log Out</a
						>
					</li>
				</ul>
			</div>
		{:else}
			<a href="/login" class="btn btn-secondary"><i class="bi-box-arrow-in-right me-2" />Login</a>
		{/if}
	</div>
</nav>

<style>
	nav {
		height: 70px;
	}
	.navbar-brand {
		font-size: 30px;
		font-weight: 900;
	}
	.bi-box-arrow-right {
		font-size: 25px;
		margin: 0px;
	}
	ul a {
		margin: 0px;
	}
	.user {
		cursor: pointer;
	}
	.user:hover {
		color: #0d6efd !important;
	}
	img {
		height: 40px;
	}
	h6 {
		font-weight: 300;
	}
	span {
		font-weight: 100;
		font-size: smaller;
		margin: 0px;
	}
	.btn {
		border-radius: 0px;
		width: 100px;
	}
	.notif,
	.reload {
		font-size: 27px;
		cursor: pointer;
	}
	.notif-dot {
		position: absolute;
		top: 30%;
		left: 90%;
		transform: translate(-50%, -50%);
		padding: 7px;
	}
	.notif-menu {
		width: 200px;
	}
	.notif-menu a {
		font-size: 10px;
	}
	.notif-menu a:hover {
		color: #0d6efd !important;
	}
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
</style>
