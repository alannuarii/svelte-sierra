<script>
	import { checkFriday, getNext7Day, date4 } from '../../lib/js/date';
	import Alert from './Alert.svelte';

	export let unit;
	export let unit1;
	export let unit2;
	export let jenis;
	export let form;

	const days1 = ['jumat1', 'sabtu1', 'minggu1', 'senin1', 'selasa1', 'rabu1', 'kamis1'];
	const days2 = ['jumat2', 'sabtu2', 'minggu2', 'senin2', 'selasa2', 'rabu2', 'kamis2'];

	let dates = [];
	let jumat;
	let end;
	let checkJumat = false;
	let checkError = false;
	let checkAlert = false;

	const objResponse = form ? form : {};
	const response = objResponse ? objResponse.message : '';
	if ('error' in objResponse) {
		checkError = true;
	}

	const get7day = (event) => {
		let friday = new Date(event.target.value);
		let start = new Date(event.target.value);
		start.setDate(start.getDate() + 6);
		end = start.toISOString().slice(0, 10);
		for (let i = 0; i < 7; i++) {
			let newDate = friday.toISOString().slice(0, 10).split('-').reverse().join('-');
			dates.push(newDate);
			dates = [...dates];
			friday.setDate(friday.getDate() + 1);
		}
	};

	$: checkJumat = checkFriday(jumat);
	$: {
		const next7Day = getNext7Day();

		const selectedDate = new Date(jumat);

		if (next7Day < selectedDate) {
			checkAlert = true;
		} else {
			checkAlert = false;
		}
	}
</script>

<section>
	{#if response}
		{#if checkError}
			<Alert message={response} color="danger" icon="x-circle" />
		{:else}
			<Alert message={response} color="success" icon="check-circle" />
		{/if}
	{/if}
	<form method="POST" class="row">
		<input type="hidden" name="jenis" value={jenis} />
		<div class="col-lg-12">
			<h1 class="mb-2 text-center">RENCANA OPERASI MINGGUAN</h1>
			<h3 class="mb-4 text-center">{unit}</h3>
			<div class="row mb-3 text-center border shadow-sm head pt-3 px-3">
				<label for="inputEmail4" class="form-label mb-2"
					><span class="badge p-2">PERIODE ROM</span></label
				>
				<div class="alert alert-danger text-center" class:d-none={!checkAlert} role="alert">
					Anda tidak diperbolehkan memasukkan tanggal setelah <span>{date4(getNext7Day())}</span>
				</div>
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Start (Jumat)</label>
						<input
							type="date"
							class="form-control"
							id="exampleFormControlInput1"
							name="tanggal"
							on:change={get7day}
							bind:value={jumat}
						/>
						<p class="text-danger mt-1 {checkJumat ? 'd-none' : 'd-block'}">Tanggal harus Jumat!</p>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">End</label>
						<input
							type="date"
							class="form-control"
							id="exampleFormControlInput1"
							bind:value={end}
							disabled
						/>
					</div>
				</div>
			</div>
			<div class="row gx-5 mb-4">
				<div class="col-lg-6 border shadow-sm u1 px-5 pt-4 pb-3">
					<div class="text-center">
						<label for="inputEmail4" class="form-label mb-4"
							><span class="badge p-2">{unit1}</span></label
						>
					</div>
					{#each days1 as day, i}
						<div class="mb-3 py-0 mb-3">
							<div class="row">
								<div class="col-lg-2 d-flex flex-column align-items-center justify-content-center">
									<label for="inputEmail4" class="form-label day"
										>{day.toLocaleUpperCase().slice(0, -1)}</label
									>
									<p class:d-none={!dates.length}>{dates[i]}</p>
								</div>
								<div
									class="col-lg py-2 d-flex justify-content-evenly align-items-center border bg-secondary-subtle border-dark-subtle"
								>
									<div class="form-check me-4">
										<input
											class="form-check-input"
											type="radio"
											name={day}
											id="flexRadioDefault1"
											value="1"
											checked
										/>
										<label class="form-check-label" for="flexRadioDefault1">Stand by</label>
									</div>

									<div class="form-check">
										<input
											class="form-check-input"
											type="radio"
											name={day}
											id="flexRadioDefault2"
											value="0"
										/>
										<label class="form-check-label" for="flexRadioDefault2">Pemeliharaan</label>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<div class="col-lg-6 border shadow-sm u2 px-5 pt-4 pb-3">
					<div class="text-center">
						<label for="inputEmail4" class="form-label mb-4"
							><span class="badge p-2">{unit2}</span></label
						>
					</div>
					{#each days2 as day, i}
						<div class="mb-3 py-0 mb-3">
							<div class="row">
								<div class="col-lg-2 d-flex flex-column align-items-center justify-content-center">
									<label for="inputEmail4" class="form-label day"
										>{day.toLocaleUpperCase().slice(0, -1)}</label
									>
									<p class:d-none={!dates.length}>{dates[i]}</p>
								</div>
								<div
									class="col-lg py-2 d-flex justify-content-evenly align-items-center border bg-secondary-subtle border-dark-subtle"
								>
									<div class="form-check me-4">
										<input
											class="form-check-input"
											type="radio"
											name={day}
											id="flexRadioDefault1"
											value="1"
											checked
										/>
										<label class="form-check-label" for="flexRadioDefault1">Stand by</label>
									</div>

									<div class="form-check">
										<input
											class="form-check-input"
											type="radio"
											name={day}
											id="flexRadioDefault2"
											value="0"
										/>
										<label class="form-check-label" for="flexRadioDefault2">Pemeliharaan</label>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="d-flex justify-content-center">
				<button class="btn w-25 text-light" type="submit" disabled={!checkJumat || checkAlert}>Submit</button>
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
	button {
		border-radius: 0px;
	}
	.form-label {
		margin: 0px;
		font-weight: 500;
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
		font-size: 10px;
	}
	.btn {
		background-color: #43a6a3;
		border-color: transparent;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
	.head {
		border-radius: 25px;
	}
	.u1 {
		border-radius: 25px 0 0 25px;
	}
	.u2 {
		border-radius: 0 25px 25px 0;
	}
	.alert{
		font-size: 15px;
	}
	@media screen and (max-width: 1100px) {
		.day{
			font-size: 14px;
			margin-right: 25px;
		}
	}
</style>
