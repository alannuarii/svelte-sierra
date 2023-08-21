<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Header from '../components/Header.svelte';
	import { formatTanggalObject, getBefore4Day } from '../../lib/js/date';
	import disable from '../../lib/img/disable.gif';
	import ModalSop2 from '../components/ModalSOP2.svelte';

	export let data;
	const status = data.token;
	const irrDateObj = formatTanggalObject(data.data1.data);

	const dateObj = getBefore4Day();

	const irrDate = dateObj.filter((item) => !irrDateObj.includes(item));

	const irr1 = irrDate.length > 3 ? irrDate[3] : 0;
	const irr2 = irrDate.length > 2 ? irrDate[2] : 0;
	const irr3 = irrDate.length > 1 ? irrDate[1] : 0;
	const irr4 = irrDate.length > 0 ? irrDate[0] : 0;
</script>

<svelte:head>
	<title>MOMA</title>
	<meta name="description" content="MOMA" />
</svelte:head>

<main id="desktop">
	<div class="row gx-0">
		<div class="col-2 d-none d-lg-block">
			<Sidebar {status} />
		</div>
		<div class="col-lg-10 position-relative">
			<div class="header position-absolute top-0 start-50 translate-middle-x">
				<Header {status} {irr1} {irr2} {irr3} {irr4} />
			</div>
			<div class="content px-5 bg-white">
				<slot />
			</div>
		</div>
	</div>
	<ModalSop2 />
</main>
<main id="mobile" class="d-none position-absolute top-50 start-50 translate-middle">
	<img src={disable} class="img-fluid" alt="" />
	<h1 class="text-center">Access not available for mobile!</h1>
</main>

<style>
	@media screen and (max-width: 1215px) {
		#desktop {
			display: none;
		}
		#mobile {
			display: block !important;
		}
	}
	#desktop {
		overflow-x: hidden;
	}
	#mobile h1 {
		font-size: 3vw;
		font-weight: 300;
	}
	.content {
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		padding-top: 90px;
		padding-bottom: 30px;
	}
	.header {
		width: 100%;
	}
</style>
