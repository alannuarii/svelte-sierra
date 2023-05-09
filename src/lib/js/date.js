export function date(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
	// 'Senin, 20 Februari 2023'
}

export const date2 = (tanggal) => {
	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day} ${months[monthIndex]} ${year}`;
	return formattedDate;
	// 6 Mei 2023
};

export const getToday = () => {
	let tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() + 8);
	tomorrow = tomorrow.toISOString().slice(0, 10);
	return tomorrow;
	// 2023-02-21 tanggal hari ini
};

export const getTomorrow = () => {
	let tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() + 32);
	tomorrow = tomorrow.toISOString().slice(0, 10);
	return tomorrow;
	// 2023-02-21 tanggal besok
};

export const formatTanggal = (format) => {
	const date = new Date(format);
	const year = date.getFullYear();
	const month = ('0' + (date.getMonth() + 1)).slice(-2);
	const day = ('0' + date.getDate()).slice(-2);
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
	// 2023-02-21
};

export const formatTanggalObject = (data) => {
	const result = data.map((item) => {
	  const dateStr = item.tanggal;
	  const dateObj = new Date(dateStr);
	  const year = dateObj.getFullYear();
	  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
	  const day = ('0' + dateObj.getDate()).slice(-2);
	  return `${year}-${month}-${day}`;
	});
	return result;
	// [ '2023-05-09', '2023-05-08' ]
  };

export const yearMonthNow = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const dateString = `${year}-${month.toString().padStart(2, '0')}`;
	return dateString;
	// 2023-02 tahun dan bulan saat ini
};

export const yearMonthID = (format) => {
	const date = new Date(format); // Membuat objek Date dari string
	const month = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(date); // Mengambil nama bulan dalam bahasa Indonesia
	const year = date.getFullYear(); // Mengambil tahun
	const formattedDate = `${month} ${year}`;
	return formattedDate;
	// Feburari 2023
};

export const getBefore4Day = () => {
	var dateArray = [];

	for (let i = 0; i < 4; i++) {
		let date = new Date();
		date.setHours(date.getHours() + 8);
		date.setDate(date.getDate() - i);
		dateArray.push(date.toISOString().slice(0, 10));
	}
	return dateArray;
	// [ '2023-05-09', '2023-05-08', '2023-05-07', '2023-05-06' ]
};


