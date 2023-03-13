import { redirect } from '@sveltejs/kit';
import { API_ENDPOINT } from '../../../lib/js/endpoint';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('email', data.get('email'));
		formData.append('password', data.get('password'));

		const res = await fetch(`${API_ENDPOINT}/login`, {
			method: 'POST',
			body: formData
		});

		const result = await res.json();

		if (!!result.access_token) {
			cookies.set('accessToken', result.access_token, { path: '/', sameSite: 'strict' });
			throw redirect(302, '/');
		}

		// console.log(!!result.access_token);

		return result;
	}
};