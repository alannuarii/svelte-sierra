<script>
	import mode1 from '../../lib/pdf/1PV.pdf';
	import mode2 from '../../lib/pdf/1PV-1BSS.pdf';
	import mode3 from '../../lib/pdf/1PV-1BSS-1ENGINE.pdf';
	import mode4 from '../../lib/pdf/1PV-1BSS-2ENGINE.pdf';
	import mode5 from '../../lib/pdf/1PV-2BSS.pdf';
	import mode6 from '../../lib/pdf/2PV.pdf';
	import mode7 from '../../lib/pdf/2PV-1BSS.pdf';
	import mode8 from '../../lib/pdf/2PV-1BSS-2ENGINE.pdf';
	import mode9 from '../../lib/pdf/2PV-2BSS.pdf';
	import mode10 from '../../lib/pdf/2PV-2BSS-1ENGINE.pdf';
	import mode11 from '../../lib/pdf/2PV-2BSS-2ENGINE.pdf';
	import mode12 from '../../lib/pdf/2PV-2ENGINE.pdf';

	export let mode;
	let modepdf;

	const modeOps = [
		{ mod: '1PV', pdf: mode1 },
		{ mod: '1PV-1BSS', pdf: mode2 },
		{ mod: '1PV-1BSS-1ENGINE', pdf: mode3 },
		{ mod: '1PV-1BSS-2ENGINE', pdf: mode4 },
		{ mod: '1PV-2BSS', pdf: mode5 },
		{ mod: '2PV', pdf: mode6 },
		{ mod: '2PV-1BSS', pdf: mode7 },
		{ mod: '2PV-1BSS-2ENGINE', pdf: mode8 },
		{ mod: '2PV-2BSS', pdf: mode9 },
		{ mod: '2PV-2BSS-1ENGINE', pdf: mode10 },
		{ mod: '2PV-2BSS-2ENGINE', pdf: mode11 },
		{ mod: '2PV-2ENGINE', pdf: mode12 }
	];

	const modeObj = modeOps.find((obj) => obj.mod === mode);
	if (modeObj) {
		modepdf = modeObj.pdf;
	}
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
				<object type="application/pdf" data={modepdf} width="100%" height="560px">
					<p>
						Maaf, browser Anda tidak mendukung tampilan PDF. Silakan unduh file untuk melihatnya.
					</p>
				</object>
			</div>
		</div>
	</div>
</div>
