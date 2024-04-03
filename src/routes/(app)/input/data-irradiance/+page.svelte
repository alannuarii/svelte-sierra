<script>
	import { getBefore4Day, date4 } from '../../../../lib/js/date';
	import Alert from '../../../components/Alert.svelte';
	export let data;
	export let form;

	let dates = data.data1.data.length > 0 ? data.data1.data : [];
	let lastIrr = data.data2.data.length > 0 ? data.data2.data[0].tanggal : [];
	let fourDays = getBefore4Day();
	let checkFileUpload = false;
	let checkError = false;
	let selectDate = '';
	let checkAlert = false;
	let nextDate = '';

	$: {
		nextDate = new Date(lastIrr);
		nextDate.setDate(nextDate.getDate() + 1);

		const selectedDate = new Date(selectDate);

		if (nextDate < selectedDate) {
			checkAlert = true;
		} else {
			checkAlert = false;
		}
	}

	const objResponse = form ? form : {};
	const response = objResponse ? objResponse.message : '';
	if ('error' in objResponse) {
		checkError = true;
	}

	const savedData = dates.map((obj) => {
		const tanggalObj = new Date(obj.tanggal);
		return tanggalObj.toLocaleDateString('id-ID', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	});
	const arrayDays = fourDays.map((tanggal) => {
		const tanggalObj = new Date(tanggal);
		return tanggalObj.toLocaleDateString('id-ID', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	});

	const handleFileUpload = (event) => {
		const check = event.target.files[0].type;
		if (check === 'text/csv') {
			checkFileUpload = true;
		} else {
			checkFileUpload = false;
		}
	};
</script>

<section>
	{#if response}
		{#if checkError}
			<Alert message={response} color="danger" icon="x-circle" />
		{:else}
			<Alert message={response} color="success" icon="check-circle" />
		{/if}
	{/if}
	<form method="POST" enctype="multipart/form-data" class="row">
		<div class="offset-3 col-lg-6">
			<h1 class="mb-2 text-center">DATA IRRADIANCE</h1>
			<h3 class="mb-4 text-center">PLTS Sangihe</h3>
			<div class="row mb-3 border bg-white shadow-sm p-4">
				<label for="inputEmail4" class="form-label text-center mb-2"
					><span class="badge">Input Data Irradiance</span></label
				>
				<div class="alert alert-danger text-center" class:d-none={!checkAlert} role="alert">
					Anda harus memasukkan tanggal <span>{date4(nextDate)}</span>
				</div>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Tanggal</label>
					<input
						type="date"
						class="form-control"
						id="exampleFormControlInput1"
						name="tanggal"
						bind:value={selectDate}
						required
					/>
					<div class="p-2"><h6>Data terakhir : {date4(lastIrr)}</h6></div>
					<div class="d-flex flex-wrap justify-content-evenly mt-2">
						{#each arrayDays as day}
							<p class="tanggal">
								<i
									class={savedData.includes(day)
										? 'bi-check-square-fill text-success'
										: 'bi-x-square-fill text-danger'}
								/>
								{day}
							</p>
						{/each}
					</div>
				</div>
				<div class="mb-4">
					<label for="exampleFormControlInput2" class="form-label">Upload File</label>
					<input type="file" class="form-control" name="irradiance" on:change={handleFileUpload} />
				</div>
				<div>
					<p class="mb-2">Keterangan:</p>
					<ul>
						<li>Ekstensi file adalah .csv</li>
					</ul>
				</div>
			</div>
			<div class="d-flex justify-content-center">
				<button class="btn w-25 text-light" type="submit" disabled={!checkFileUpload || checkAlert}
					>Submit</button
				>
			</div>
		</div>
	</form>
</section>

<style>
	h1 {
		font-weight: 300;
		margin: 0px;
	}
	h3 {
		font-weight: 500;
		margin: 0px;
		color: #43a6a3;
	}
	h6 {
		margin: 0px;
		font-size: 13px;
		font-style: italic;
		font-weight: 600;
	}
	button {
		border-radius: 0px;
	}
	.form-label {
		margin: 0px;
		font-weight: 700;
	}
	.alert span {
		font-weight: 700;
	}
	label span {
		font-size: 20px;
		color: #43a6a3;
		font-weight: 700;
	}
	p {
		margin: 0px;
	}
	.tanggal {
		margin: 0px;
		font-size: 13px;
	}
	.btn {
		background-color: #43a6a3;
		border-color: transparent;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
	.border {
		border-radius: 25px;
	}
	.alert {
		font-size: 15px;
	}
	@media screen and (max-width: 1100px) {
		.tanggal {
			font-size: 11px;
		}
	}
</style>
