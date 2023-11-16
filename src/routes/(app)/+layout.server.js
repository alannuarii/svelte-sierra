import jwtDecode from 'jwt-decode';
import { API_ENDPOINT } from '$env/static/private';

export const load = async ({ cookies }) => {
	const token = cookies.get('accessToken');
	const decode = jwtDecode(token);

	const res1 = await fetch(`${API_ENDPOINT}/irradiance/tanggal`);
	const data1 = await res1.json();

	return {
		token: decode,
		data1
	};
};
