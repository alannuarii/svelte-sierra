import { getYearMonth } from '../../../lib/js/date';

export const load = async (params) => {
	const tahunBulan =
		params.url.searchParams.get('bulan') === null
			? getYearMonth()
			: params.url.searchParams.get('bulan');
};
