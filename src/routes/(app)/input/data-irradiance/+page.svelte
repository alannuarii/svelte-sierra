<script>
	import { getBefore4Day } from '../../../../lib/js/date';
	export let data;
	let dates = data.data;
	let fourDays = getBefore4Day();
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
</script>

<section>
	<form method="POST" enctype="multipart/form-data" class="row">
		<div class="offset-3 col-lg-6">
			<h1 class="mb-2 text-center">DATA IRRADIANCE</h1>
			<h3 class="mb-4 text-center">PLTS Sangihe</h3>
			<div class="row mb-3  border p-4">
				<label for="inputEmail4" class="form-label text-center mb-2"
					><span class="badge text-bg-secondary p-2">Input Data Irradiance</span></label
				>
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Tanggal</label>
					<input type="date" class="form-control" id="exampleFormControlInput1" name="tanggal" />
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
					<input type="file" class="form-control" name="irradiance" />
				</div>
				<div>
					<p class="mb-2">Keterangan:</p>
					<ul>
						<li>Ekstensi file adalah .csv</li>
					</ul>
				</div>
			</div>
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
		font-size: 17px;
		border-radius: 0px;
	}
	p {
		margin: 0px;
	}
	.tanggal {
		margin: 0px;
		font-size: 13px;
	}
</style>
