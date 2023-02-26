export const averageIrradiance = (data) => {
	let hasilRataRata = {};
	let jumlahEntri = {};

	for (let i = 0; i < data.length; i++) {
		let waktu = data[i].waktu;
		let value = data[i].value;

		if (!(waktu in hasilRataRata)) {
			hasilRataRata[waktu] = value;
			jumlahEntri[waktu] = 1;
		} else {
			hasilRataRata[waktu] += value;
			jumlahEntri[waktu]++;
		}
	}

	for (let waktu in hasilRataRata) {
		hasilRataRata[waktu] /= jumlahEntri[waktu];
	}

	return hasilRataRata;
};
