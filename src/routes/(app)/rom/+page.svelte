<script>
	import { date3 } from '../../../lib/js/date';
	export let data;

	const rompltd = data.data1.data;
	const rompv = data.data2.data;
	const rombss = data.data3.data;
	const days = ['Jumat', 'Sabtu', 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis'];
	const dateWeek = [];
	const engine6 = [];
	const engine7 = [];
	const pv1 = [];
	const pv2 = [];
	const bss1 = [];
	const bss2 = [];

	const convertStatus = (status) => {
		if (status === 1) {
			return 'Stand by';
		} else {
			return 'Pemeliharaan';
		}
	};

	rompltd.forEach((item) => {
		if (item.unit === 6) {
			engine6.push(convertStatus(item.status));
			dateWeek.push(date3(item.tanggal));
		} else if (item.unit === 7) {
			engine7.push(convertStatus(item.status));
		}
	});

	rompv.forEach((item) => {
		if (item.unit === 1) {
			pv1.push(convertStatus(item.status));
		} else if (item.unit === 2) {
			pv2.push(convertStatus(item.status));
		}
	});

	rombss.forEach((item) => {
		if (item.unit === 1) {
			bss1.push(convertStatus(item.status));
		} else if (item.unit === 2) {
			bss2.push(convertStatus(item.status));
		}
	});
</script>

<section>
	<h1 class="mb-4 text-center">RENCANA OPERASI MINGGUAN</h1>
	<table class="table text-center">
		<thead>
			<tr class="align-middle header">
				<th scope="col">Unit</th>
				{#each days as day, i}
					<th scope="col"
						><div class="d-flex flex-column">
							<span class="mb-1">{day}</span><span class="tanggal bg-light text-dark py-1"
								>{dateWeek[i]}</span
							>
						</div></th
					>
				{/each}
			</tr>
		</thead>
		<tbody>
			<tr class="align-middle">
				<th scope="row">DG 6</th>
				{#if rompltd.length === 0}
					<td colspan="7">Data Kosong</td>
				{:else}
					{#each engine6 as e6}
						<td>{e6}</td>
					{/each}
				{/if}
			</tr>
			<tr class="align-middle">
				<th scope="row">DG 7</th>
				{#if rompltd.length === 0}
					<td colspan="7">Data Kosong</td>
				{:else}
					{#each engine7 as e7}
						<td>{e7}</td>
					{/each}
				{/if}
			</tr>
			<tr class="align-middle">
				<th scope="row">PV 1</th>
				{#if rompv.length === 0}
					<td colspan="7">Data Kosong</td>
				{:else}
					{#each pv1 as p1}
						<td>{p1}</td>
					{/each}
				{/if}
			</tr>
			<tr class="align-middle">
				<th scope="row">PV 2</th>
				{#if rompv.length === 0}
					<td colspan="7">Data Kosong</td>
				{:else}
					{#each pv2 as p2}
						<td>{p2}</td>
					{/each}
				{/if}
			</tr>
			<tr class="align-middle">
				<th scope="row">BSS 1</th>
				{#if rompv.length === 0}
					<td colspan="7">Data Kosong</td>
				{:else}
					{#each bss1 as b1}
						<td>{b1}</td>
					{/each}
				{/if}
			</tr>
			<tr class="align-middle">
				<th scope="row">BSS 2</th>
				{#if rompv.length === 0}
					<td colspan="7">Data Kosong</td>
				{:else}
					{#each bss2 as b2}
						<td>{b2}</td>
					{/each}
				{/if}
			</tr>
		</tbody>
	</table>
</section>

<style>
	h1 {
		font-weight: 300;
		margin: 0px;
	}
	th,
	td {
		height: 70px;
	}
	.tanggal {
		font-size: 12px;
		font-weight: 400;
	}
	.header {
		background-color: #43a6a3;
		color: #ffffff;
		border-bottom: 3px solid #aac548;
	}
</style>
