import jwtDecode from 'jwt-decode';
import { API_ENDPOINT } from '../../lib/js/endpoint';

export const load = async ({ cookies }) => {
	const token = cookies.get('accessToken');
	const decode = jwtDecode(token);

	const res1 = await fetch(`${API_ENDPOINT}/irradiance/tanggal`);
	const data1 = res1.json();

	return {
		token: decode,
		data1
	};
};
