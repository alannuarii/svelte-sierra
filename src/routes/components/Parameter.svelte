<script>
	import suhu from '../../lib/img/temperature.gif';
	import lembab from '../../lib/img/humidity.gif';
	import angin from '../../lib/img/wind.gif';
	export let temperature;
	export let humidity;
	export let wind;

	const satuan = '\u00B0C';
</script>

<div class="d-flex justify-content-evenly align-content-center bg-white py-2 rounded-4">
	<div class="text-center">
		<h6 class="mb-1 p-1">Suhu Udara</h6>
		<img class="py-1" src={suhu} alt="" />
		<!-- <i class="bi-thermometer-half" /> -->
		<p>{temperature} {satuan}</p>
	</div>
	<div class="text-center">
		<h6 class="mb-1 p-1">Kelembaban Udara</h6>
		<img class="py-1" src={lembab} alt="" />
		<!-- <i class="bi-droplet-half" /> -->
		<p>{humidity} %</p>
	</div>
	<div class="text-center">
		<h6 class="mb-1 p-1">Kecepatan Angin</h6>
		<img class="py-1" src={angin} alt="" />
		<!-- <i class="bi-wind" /> -->
		<p>{wind} km/jam</p>
	</div>
</div>
<div class="source mt-1 text-center">
	<a href="https://bmkg.go.id/" class="fst-italic text-reset">Source: bmkg.go.id</a>
</div>

<style>
	p {
		margin: 0px;
		font-size: 15px;
		font-weight: 700;
		margin-top: -5px;
	}
	h6 {
		margin: 0px;
		font-size: 13px;
		color: #43a6a3;
		font-weight: 600;
		/* border-bottom: 2px solid #aac548;
		border-radius: 0 0 15px 0; */
	}
	/* i {
		font-size: 30px;
	} */
	.source a {
		font-size: 12px;
		font-weight: 400;
		text-decoration: none;
	}
	img {
		width: 40px;
	}
	@media screen and (max-width: 1100px) {
		h6 {
			font-size: 8px;
		}
		p {
			font-size: 10px;
		}
		img {
			width: 25px;
		}
		.source {
			margin-top: -5px !important;
		}
		.source a {
			font-size: 7px;
		}
	}
</style>
