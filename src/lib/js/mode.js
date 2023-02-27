export const modeOperasi = (pltd, pv, bss, cuaca, irr) => {
	if (pv === 1 && bss === 0 && pltd === 0 && cuaca === 1 && irr < 700) {
		const mode = '1PV';
		return mode;
	} else if (pv === 1 && bss === 1 && pltd === 0 && cuaca === 1 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 1 && pltd === 1 && cuaca === 1 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 0 && cuaca === 1 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 1 && cuaca === 1 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 2 && cuaca === 1 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 0 && pltd === 0 && cuaca === 1 && irr < 700) {
		const mode = '1PV';
		return mode;
	} else if (pv === 2 && bss === 1 && pltd === 0 && cuaca === 1 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 1 && pltd === 1 && cuaca === 1 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 0 && cuaca === 1 && irr < 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 1 && cuaca === 1 && irr < 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 2 && cuaca === 1 && irr < 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 1 && bss === 0 && pltd === 0 && cuaca === 0 && irr > 700) {
		const mode = '1PV';
		return mode;
	} else if (pv === 1 && bss === 1 && pltd === 0 && cuaca === 0 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 1 && pltd === 1 && cuaca === 0 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 0 && cuaca === 0 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 1 && cuaca === 0 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 2 && cuaca === 0 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 0 && pltd === 0 && cuaca === 0 && irr > 700) {
		const mode = '1PV';
		return mode;
	} else if (pv === 2 && bss === 1 && pltd === 0 && cuaca === 0 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 1 && pltd === 1 && cuaca === 0 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 0 && cuaca === 0 && irr > 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 1 && cuaca === 0 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 2 && cuaca === 0 && irr > 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 1 && bss === 0 && pltd === 0 && cuaca === 0 && irr < 700) {
		const mode = '1PV';
		return mode;
	} else if (pv === 1 && bss === 1 && pltd === 0 && cuaca === 0 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 1 && pltd === 1 && cuaca === 0 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 0 && cuaca === 0 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 1 && cuaca === 0 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 2 && cuaca === 0 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 0 && pltd === 0 && cuaca === 0 && irr < 700) {
		const mode = '1PV';
		return mode;
	} else if (pv === 2 && bss === 1 && pltd === 0 && cuaca === 0 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 1 && pltd === 1 && cuaca === 0 && irr < 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 0 && cuaca === 0 && irr < 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 1 && cuaca === 0 && irr < 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 2 && cuaca === 0 && irr < 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 1 && bss === 0 && pltd === 1 && cuaca === 1 && irr > 700) {
		const mode = '1PV';
		return mode;
	} else if (pv === 1 && bss === 0 && pltd === 1 && cuaca === 1 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 1 && pltd === 1 && cuaca === 1 && irr > 700) {
		const mode = '1PV-1BSS-1ENGINE';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 0 && cuaca === 1 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 1 && cuaca === 1 && irr > 700) {
		const mode = '1PV-1BSS-1ENGINE';
		return mode;
	} else if (pv === 1 && bss === 2 && pltd === 2 && cuaca === 1 && irr > 700) {
		const mode = '1PV-1BSS-1ENGINE';
		return mode;
	} else if (pv === 2 && bss === 0 && pltd === 0 && cuaca === 1 && irr > 700) {
		const mode = '1PV';
		return mode;
	} else if (pv === 2 && bss === 1 && pltd === 0 && cuaca === 1 && irr > 700) {
		const mode = '1PV-1BSS';
		return mode;
	} else if (pv === 2 && bss === 1 && pltd === 1 && cuaca === 1 && irr > 700) {
		const mode = '1PV-1BSS-1ENGINE';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 0 && cuaca === 1 && irr > 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 1 && cuaca === 1 && irr > 700) {
		const mode = '2PV-2BSS';
		return mode;
	} else if (pv === 2 && bss === 2 && pltd === 2 && cuaca === 1 && irr > 700) {
		const mode = '2PV-2BSS-2ENGINE';
		return mode;
	}
};
