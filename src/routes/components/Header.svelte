<script>
	import unknown from '../../lib/img/unknown.png';
</script>

<nav class="navbar bg-light-subtle shadow">
	<div class="container-fluid">
		<a class="navbar-brand text-dark ms-3 d-flex align-items-center" href="/">S I E R R A<span class="ms-2">| Sangihe Solar Irradiance Forecaster</span></a>
		<div class="dropdown-center">
			<div class="me-3 user d-flex" data-bs-toggle="dropdown" data-bs-display="static">
				<img src={unknown} class="me-2" alt="" />
				<h6 class="d-block my-auto">Super User</h6>
			</div>
			<ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark">
				<li>
					<a class="dropdown-item d-flex align-items-center justify-content-center" href="/"
						><i class="bi-box-arrow-right me-2" />Log Out</a
					>
				</li>
			</ul>
		</div>
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
	i {
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
	span{
		font-weight: 100;
		font-size: smaller;
		margin: 0px;
	}
</style>
