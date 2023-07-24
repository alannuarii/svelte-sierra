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

export const date3 = (tanggal) => {
	const parsedDate = new Date(tanggal);
	const formattedDate = `${parsedDate.getDate().toString().padStart(2, '0')}-${(
		parsedDate.getMonth() + 1
	)
		.toString()
		.padStart(2, '0')}-${parsedDate.getFullYear()}`;

	return formattedDate;

	// convert from Fri, 05 May 2023 00:00:00 GMT to 05-05-2023
};

export const date4 = (tanggal) => {
	var dateObj = new Date(tanggal);
	var day = dateObj.getUTCDate();
	var month = dateObj.getUTCMonth() + 1; // Menggunakan "+1" karena bulan dimulai dari 0 (Januari=0, Februari=1, dst.)
	var year = dateObj.getUTCFullYear();

	// Mengatur format tanggal
	var formattedDate = day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
	return formattedDate;

	// convert Thu, 23 Feb 2023 00:00:00 GMT to 23/02/2023
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

export const getThursday = () => {
	const today = new Date();

	const daysUntilThursday = (4 - today.getDay() + 7) % 7;
	const nextThursday = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + daysUntilThursday
	);

	const nextThursdayDate = `${nextThursday.getFullYear()}-${String(
		nextThursday.getMonth() + 1
	).padStart(2, '0')}-${String(nextThursday.getDate()).padStart(2, '0')}`;

	return nextThursdayDate;
	// 2023-05-11
};

export const getFriday = () => {
	const today = new Date();

	const daysUntilFriday = (5 - today.getDay() + 7) % 7;
	const nextFriday = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + daysUntilFriday
	);

	const nextFridayDate = `${nextFriday.getFullYear()}-${String(nextFriday.getMonth() + 1).padStart(
		2,
		'0'
	)}-${String(nextFriday.getDate()).padStart(2, '0')}`;

	return nextFridayDate;
	// 2023-05-11
};

export const checkFriday = (friday) => {
	const date = new Date(friday);

	// Memeriksa apakah hari dalam objek Date adalah Jumat (nilai 5)
	if (date.getDay() === 5) {
		return true; // Jika hari adalah Jumat, kembalikan true
	} else {
		return false; // Jika bukan hari Jumat, kembalikan false
	}
};

export const getYearMonth = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	let month = currentDate.getMonth() + 1; // Ditambahkan 1 karena bulan dimulai dari 0
	month = month < 10 ? `0${month}` : month; // Untuk memastikan bulan selalu memiliki 2 digit (misalnya, 01 untuk Januari)

	// Format tanggal dan bulan dalam format "YYYY-MM"
	const formattedDate = `${year}-${month}`;
	return formattedDate;
	// 2023-07
};
