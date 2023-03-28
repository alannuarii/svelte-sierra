<script>
	import { onMount, onDestroy } from 'svelte';
	import io from 'socket.io-client';

	let socket;
	let bebanPlts = 0;

	function connectSocket() {
		// Connect to server using Socket.IO client
		socket = io('https://sierrajs.alanpy.xyz');
		socket.on('connect', () => {
			console.log('Connected to server');
		});

		// Receive bebanPlts data from server
		socket.on('bebanPlts', (data) => {
			bebanPlts = data;
		});
	}

	function disconnectSocket() {
		// Disconnect from server
		if (socket) {
			socket.disconnect();
			console.log('Disconnected from server');
		}
	}

	onMount(() => {
		// Connect to server on component mount
		connectSocket();
	});

	onDestroy(() => {
		// Disconnect from server on component unmount
		disconnectSocket();
	});

	$: console.log(bebanPlts);

	const satuan = '\u00B0C';
</script>

<section class="text-center">
	<h1 class="mb-4 title">REALTIME MONITORING PLTS SANGIHE HYBRID 1,3 MWp</h1>
	<div class="row mb-4">
		<div class="col-5">
			<div class="row">
				<div class="col-12">
					<div class="d-flex justify-content-center">
						<h1 class="p-4">{bebanPlts.toFixed(2)} <span>Hz</span></h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-4">
					<div class="card text-bg-light mb-3" style="max-width: 18rem;">
						<div class="card-header">Tegangan R</div>
						<div class="card-body">
							<h5 class="card-title">20 <span>V</span></h5>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="card text-bg-light mb-3" style="max-width: 18rem;">
						<div class="card-header">Tegangan S</div>
						<div class="card-body">
							<h5 class="card-title">20 <span>V</span></h5>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="card text-bg-light mb-3" style="max-width: 18rem;">
						<div class="card-header">Tegangan T</div>
						<div class="card-body">
							<h5 class="card-title">20 <span>V</span></h5>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-7">
			<div class="card w-100 h-100" />
		</div>
	</div>
	<div class="row">
		<div class="col-3">
			<div class="card text-bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">Beban PLTS</div>
				<div class="card-body">
					<h5 class="card-title">650 <span>kW</span></h5>
				</div>
			</div>
		</div>
		<div class="col-3">
			<div class="card text-bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">Beban Reaktif</div>
				<div class="card-body">
					<h5 class="card-title">100 <span>kVAR</span></h5>
				</div>
			</div>
		</div>
		<div class="col-3">
			<div class="card text-bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">Beban DG 1</div>
				<div class="card-body">
					<h5 class="card-title">800 <span>kW</span></h5>
				</div>
			</div>
		</div>
		<div class="col-3">
			<div class="card text-bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">Beban DG 2</div>
				<div class="card-body">
					<h5 class="card-title">850 <span>kW</span></h5>
				</div>
			</div>
		</div>
		<div class="col-3">
			<div class="card text-bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">SOC Battery 1</div>
				<div class="card-body">
					<h5 class="card-title">100 <span>%</span></h5>
				</div>
			</div>
		</div>
		<div class="col-3">
			<div class="card text-bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">SOC Battery 2</div>
				<div class="card-body">
					<h5 class="card-title">100 <span>%</span></h5>
				</div>
			</div>
		</div>
		<div class="col-3">
			<div class="card text-bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">Irradiance</div>
				<div class="card-body">
					<h5 class="card-title">500 <span>kW</span></h5>
				</div>
			</div>
		</div>
		<div class="col-3">
			<div class="card text-bg-light mb-3" style="max-width: 18rem;">
				<div class="card-header">Temperature</div>
				<div class="card-body">
					<h5 class="card-title">25 <span>{satuan}</span></h5>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.title {
		margin: 0px;
		font-weight: 300;
	}
	span {
		font-weight: 300;
	}
	h1,
	h5 {
		font-weight: 700;
	}
</style>
