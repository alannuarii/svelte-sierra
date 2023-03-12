<script>
	import mode1 from '../../lib/pdf/mode1.pdf';
</script>

<div
	class="modal fade"
	id="modalSOP"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-xl">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">SOP Mode Operasi</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<!-- svelte-ignore a11y-missing-attribute -->
				<object type="application/pdf" data={mode1} width="100%" height="560px">
					<p>
						Maaf, browser Anda tidak mendukung tampilan PDF. Silakan unduh file untuk melihatnya.
					</p>
				</object>
			</div>
		</div>
	</div>
</div>
