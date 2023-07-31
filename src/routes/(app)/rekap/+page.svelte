<script>
	import { page } from '$app/stores';
	import { getYearMonth, yearMonthID, date } from '../../../lib/js/date';
	import { convertWeather } from '../../../lib/js/weather';
	import Alert from '../../components/Alert.svelte';

	export let data;
	export let form;
	let checkError = false;

	const objResponse = form ? form : {};
	const response = objResponse ? objResponse.message : '';
	if ('error' in objResponse) {
		checkError = true;
	}

	const rompltd6 = data.data1.data[0].length > 0 ? data.data1.data[0] : [];
	const rompltd7 = data.data1.data[1].length > 0 ? data.data1.data[1] : [];
	const rompv1 = data.data2.data[0].length > 0 ? data.data2.data[0] : [];
	const rompv2 = data.data2.data[1].length > 0 ? data.data2.data[1] : [];
	const rombss1 = data.data3.data[0].length > 0 ? data.data3.data[0] : [];
	const rombss2 = data.data3.data[1].length > 0 ? data.data3.data[1] : [];
	const weathers = data.data4.data.length > 0 ? data.data4.data : [];
	const irradiances = data.data5.data.length > 0 ? data.data5.data : [];
	const mode_operasi = data.data6.data.length > 0 ? data.data6.data : [];

	const units = ['DG 6', 'DG 7', 'PV 1', 'PV 2', 'BSS 1', 'BSS 2'];

	$: searchParam = $page.url.search;
	$: valueSearch = searchParam.length > 0 ? searchParam.slice(7) : getYearMonth();

	$: dataBulan = yearMonthID(valueSearch);
</script>

<section>
	{#if response}
		{#if checkError}
			<Alert message={response} color="danger" icon="x-circle" />
		{:else}
			<Alert message={response} color="success" icon="check-circle" />
		{/if}
	{/if}
	<h1 class="mb-4 text-center">REKAP DATA</h1>
	<div class="row mb-2 px-2">
		<div class="col-5">
			<div class="row d-flex align-items-center">
				<label for="inputMonth" class="col-sm-3 col-form-label">Pilih bulan</label>
				<div class="col-sm-7">
					<form>
						<input
							type="month"
							class="form-control form-control-sm"
							bind:value={valueSearch}
							name="bulan"
							onchange="this.form.submit()"
						/>
					</form>
				</div>
			</div>
		</div>
		<div class="col-3 d-flex justify-content-start align-items-center">
			<form method="POST">
				<input type="hidden" name="sync" />
				<button type="submit" class="btn btn-sm">
					<span class="badge"><i class="bi-arrow-repeat me-1" /> Sync</span>
				</button>
			</form>
			<div class="btn btn-sm">
				<span class="badge"><i class="bi-check2-square me-1" /> Correction</span>
			</div>
			<div class="btn btn-sm">
				<span class="badge"><i class="bi-filetype-pdf me-1" /> Download</span>
			</div>
		</div>
		<div class="col-4  d-flex align-items-center justify-content-end">
			<h6>DATA BULAN {dataBulan.toUpperCase()}</h6>
		</div>
	</div>
	<table class="table table-bordered text-center">
		<thead>
			<tr>
				<th class="align-middle" scope="col" rowspan="2">NO</th>
				<th class="align-middle" scope="col" rowspan="2">TANGGAL</th>
				<th class="align-middle" scope="col" colspan="6">STATUS PERALATAN</th>
				<th class="align-middle" scope="col" rowspan="2"
					><div class="d-flex flex-column justify-content-center align-items-center">
						MAX IRRADIANCE
						<p>(kW)</p>
					</div></th
				>
				<th class="align-middle" scope="col" rowspan="2">PREDIKSI CUACA</th>
				<th class="align-middle" scope="col" rowspan="2"
					><div class="d-flex flex-column justify-content-center align-items-center">
						REKOMENDASI
						<div>MODE OPERASI</div>
					</div></th
				>
			</tr>
			<tr>
				{#each units as unit}
					<th scope="col">{unit}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#if irradiances.length > 0}
				{#each irradiances as irr, i}
					<tr>
						<td>{i + 1}</td>
						<td>{date(irr.tanggal)}</td>
						<td>{rompltd6[i].status}</td>
						<td>{rompltd7[i].status}</td>
						<td>{rompv1[i].status}</td>
						<td>{rompv2[i].status}</td>
						<td>{rombss1[i].status}</td>
						<td>{rombss2[i].status}</td>
						<td>{irr.value}</td>
						<td>{convertWeather(parseInt(weathers[i].kode))}</td>
						<td>{mode_operasi[i].mode}</td>
					</tr>
				{/each}
				{:else}
				<tr class="kosong">
					<td colspan="11" class="align-middle">Data Kosong</td>
				</tr>
			{/if}
		</tbody>
	</table>
</section>

<style>
	h1 {
		font-weight: 300;
		margin: 0px;
	}
	thead {
		font-size: 14px;
	}
	tbody {
		font-size: 12px;
	}
	thead p {
		margin: 0px;
		font-weight: 400;
	}
	label {
		font-size: 1vw;
	}
	h6 {
		margin: 0px;
		font-weight: 700;
	}
	span {
		font-weight: 400;
		color: #000;
		font-size: 11px;
	}
	.btn {
		border: none;
	}
	.kosong{
		height: 300px;
	}
</style>
