<script>
	import { page } from '$app/stores';
	import { getYearMonth, yearMonthID } from '../../../lib/js/date';
	const units = ['DG 6', 'DG 7', 'PV 1', 'PV 2', 'BSS 1', 'BSS 2'];

	$: searchParam = $page.url.search;
	$: valueSearch = searchParam.length > 0 ? searchParam.slice(7) : getYearMonth();

	$: dataBulan = yearMonthID(valueSearch);
</script>

<section>
	<h1 class="mb-4 text-center">REKAP DATA</h1>
	<div class="row mb-2 px-2">
		<div class="col-6">
			<div class="row d-flex align-items-center">
				<label for="inputMonth" class="col-sm-2 col-form-label">Pilih bulan</label>
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
		<div class="col-6  d-flex align-items-center justify-content-end">
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
						IRRADIANCE
						<p>(kW)</p>
					</div></th
				>
				<th class="align-middle" scope="col" rowspan="2">CUACA</th>
				<th class="align-middle" scope="col" rowspan="2">MODE OPERASI</th>
			</tr>
			<tr>
				{#each units as unit}
					<th scope="col">{unit}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Selasa, 25 November 2023</td>
				<td>Pemeliharaan</td>
				<td>Pemeliharaan</td>
				<td>Pemeliharaan</td>
				<td>Pemeliharaan</td>
				<td>Pemeliharaan</td>
				<td>Pemeliharaan</td>
				<td>700</td>
				<td>Cerah Berawan</td>
				<td>2PV-2BSS-2DG</td>
			</tr>
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
</style>
