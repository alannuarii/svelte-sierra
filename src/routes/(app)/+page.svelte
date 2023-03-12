<script>
	import icon from '../../lib/img/icon.png';
</script>

<section class="position-relative">
	<div
		class="sierra position-absolute top-50 start-50 translate-middle text-center bg-secondary-subtle opacity-75 p-5"
	>
		<h1>S I E R R A</h1>
		<h2>Sangihe Solar Irradiance Forecaster</h2>
	</div>
	<img src={icon} class="icon-sierra position-absolute top-0 end-0 mt-5 me-3" alt="" />
</section>

<style>
	section {
		background-image: url('../../lib/img/pv.jpg');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 669px;
		margin-left: -50px;
		margin-right: -50px;
		margin-top: -50px;
		margin-bottom: -100px;
		opacity: 0.8;
	}
	h1 {
		font-size: 70px;
		font-weight: 900;
	}
	h2 {
		font-weight: 300;
	}
	.sierra {
		border-radius: 70px;
	}
	.icon-sierra {
		height: 100px;
	}
</style>
