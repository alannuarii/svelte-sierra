<script>
	export let unit;
	const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
</script>

<section>
	<form class="row">
		<div class="offset-3 col-lg-6">
			<h1 class="mb-2 text-center">RENCANA OPERASI MINGGUAN</h1>
			<h3 class="mb-4 text-center">{unit}</h3>
			<div class="row mb-3 text-center border pt-2">
				<label for="inputEmail4" class="form-label mb-2"
					><span class="badge text-bg-secondary p-2">PERIODE ROM</span></label
				>
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">Start</label>
						<input type="date" class="form-control" id="exampleFormControlInput1" />
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="exampleFormControlInput1" class="form-label">End</label>
						<input type="date" class="form-control" id="exampleFormControlInput1" disabled />
					</div>
				</div>
			</div>
			{#each days as day, i}
				<div class="mb-3 py-0 mb-3">
					<div class="row">
						<div class="col-lg-2 d-flex align-items-center">
							<label for="inputEmail4" class="form-label">{day.toLocaleUpperCase()}</label>
						</div>
						<div
							class="col-lg py-2 d-flex justify-content-evenly align-items-center border bg-secondary text-light"
						>
							<div class="form-check me-4">
								<input class="form-check-input" type="radio" name={day} id="flexRadioDefault1" />
								<label class="form-check-label" for="flexRadioDefault1">Stand by</label>
							</div>

							<div class="form-check">
								<input class="form-check-input" type="radio" name={day} id="flexRadioDefault2" />
								<label class="form-check-label" for="flexRadioDefault2">Pemeliharaan</label>
							</div>
						</div>
					</div>
				</div>
			{/each}
			<div class="d-flex justify-content-center">
				<button class="btn btn-primary w-50" type="submit">Submit</button>
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
	}
	button {
		border-radius: 0px;
	}
	.form-label {
		margin: 0px;
		font-weight: 700;
	}
	span {
		font-size: 18px;
		border-radius: 0px;
	}
</style>
