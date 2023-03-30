<script>
	import { onMount, onDestroy } from 'svelte';
	import io from 'socket.io-client';
	import Timer from '../components/Timer.svelte';

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

	const satuanTemp = '\u00B0C';
	const satuanIrr = 'm' + String.fromCharCode(0x00b2);
</script>

<section class="text-center">
	<h1 class="mb-4 title">REALTIME MONITORING PLTS SANGIHE HYBRID 1,3 MWp</h1>
	<div class="upper row mb-4">
		<div class="col-4">
			<div class="row">
				<div class="col-12">
					<div><Timer /></div>
					<div class="d-flex justify-content-center">
						<h1 class="p-4">{bebanPlts.toFixed(2)} <span>Hz</span></h1>
					</div>
				</div>
			</div>
			<div class="d-flex justify-content-evenly align-items-center">
				<div class="card text-bg-light mb-3" style="width: 30%;">
					<div class="card-header">Fasa R</div>
					<div class="card-body d-flex justify-content-center align-items-center">
						<h5 class="card-title">20 <span>V</span></h5>
					</div>
				</div>

				<div class="card text-bg-light mb-3" style="width: 30%;">
					<div class="card-header">Fasa S</div>
					<div class="card-body d-flex justify-content-center align-items-center">
						<h5 class="card-title">20 <span>V</span></h5>
					</div>
				</div>

				<div class="card text-bg-light mb-3" style="width: 30%;">
					<div class="card-header">Fasa T</div>
					<div class="card-body d-flex justify-content-center align-items-center">
						<h5 class="card-title">20 <span>V</span></h5>
					</div>
				</div>
			</div>
		</div>
		<div class="col-8">
			<div class="card w-100 h-100" />
		</div>
	</div>
	<div class="d-flex justify-content-evenly">
		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">Total Beban PLTS</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">650 <span>kW</span></h5>
			</div>
		</div>

		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">Beban Reaktif</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">100 <span>kVAR</span></h5>
			</div>
		</div>

		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">Beban DG 1</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">800 <span>kW</span></h5>
			</div>
		</div>

		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">Beban DG 2</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">850 <span>kW</span></h5>
			</div>
		</div>

		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">SOC Battery 1</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">100 <span>%</span></h5>
			</div>
		</div>
	</div>
	<div class="d-flex justify-content-evenly">
		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">SOC Battery 2</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">100 <span>%</span></h5>
			</div>
		</div>
		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">Beban PV Feeder 1</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">550 <span>kW</span></h5>
			</div>
		</div>

		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">Beban PV Feeder 2</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">300 <span>kW</span></h5>
			</div>
		</div>

		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">Irradiance</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">500 <span>Watt/{satuanIrr}</span></h5>
			</div>
		</div>

		<div class="card text-bg-light mb-3" style="width: 19%;">
			<div class="card-header">Temperature</div>
			<div class="card-body d-flex justify-content-center align-items-center">
				<h5 class="card-title">25 <span>{satuanTemp}</span></h5>
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
		margin: 0px;
		font-weight: 700;
	}
	.upper {
		height: 280px;
	}
	.card-body {
		height: 50px;
	}
	.card{
		border-radius: 0px;
	}
</style>
