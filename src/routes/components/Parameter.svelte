<script>
	export let temperature;
	export let humidity;
	export let wind;

	const satuan = '\u00B0C';
</script>

<div class="d-flex justify-content-evenly align-content-center">
	<div class="text-center">
		<h6 class="mb-1 p-1">Suhu Udara</h6>
		<i class="bi-thermometer-half" />
		<p>{temperature} {satuan}</p>
	</div>
	<div class="text-center">
		<h6 class="mb-1 p-1">Kelembaban Udara</h6>
		<i class="bi-droplet-half" />
		<p>{humidity} %</p>
	</div>
	<div class="text-center">
		<h6 class="mb-1 p-1">Kecepatan Angin</h6>
		<i class="bi-wind" />
		<p>{wind} knot</p>
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
		background-color: #43a6a3;
		color: #ffffff;
	}
	i {
		font-size: 30px;
	}
	.source a {
		font-size: 12px;
		font-weight: 400;
		text-decoration: none;
	}
</style>
