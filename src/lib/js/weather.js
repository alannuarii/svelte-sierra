export const weatherCode = [
	{ 0: 'Cerah' },
	{ 1: 'Cerah Berawan' },
	{ 2: 'Cerah Berawan' },
	{ 3: 'Berawan' },
	{ 4: 'Berawan Tebal' },
	{ 5: 'Udara Kabur' },
	{ 10: 'Asap' },
	{ 45: 'Kabut' },
	{ 60: 'Hujan Ringan' },
	{ 61: 'Hujan Sedang' },
	{ 63: 'Hujan Lebat' },
	{ 80: 'Hujan Lokal' },
	{ 95: 'Hujan Petir' },
	{ 97: 'Hujan Petir' }
];

export const convertWeather = (weather) => {
	if (weather === 0) {
		return weather = 'Cerah';
	} else if (weather === 1) {
		return weather = 'Cerah Berawan';
	} else if (weather === 2) {
		return weather = 'Cerah Berawan';
	} else if (weather === 3) {
		return weather = 'Berawan';
	} else if (weather === 4) {
		return weather = 'Berawan Tebal';
	} else if (weather === 5) {
		return weather = 'Udara Kabur';
	} else if (weather === 10) {
		return weather = 'Asap';
	} else if (weather === 45) {
		return weather = 'Kabut';
	} else if (weather === 60) {
		return weather = 'Hujan Ringan';
	} else if (weather === 61) {
		return weather = 'Hujan Sedang';
	} else if (weather === 63) {
		return weather = 'Hujan Lebat';
	} else if (weather === 80) {
		return weather = 'Hujan Lokal';
	} else if (weather === 95) {
		return weather = 'Hujan Petir';
	} else if (weather === 97) {
		return weather = 'Hujan Petir';
	}
};


