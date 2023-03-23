import { redirect } from '@sveltejs/kit';
import { API_ENDPOINT } from '../../../lib/js/endpoint';

// export const actions = {
// 	default: async ({ request, cookies }) => {
// 		const data = await request.formData();

// 		const formData = new FormData();
// 		formData.append('email', data.get('email'));
// 		formData.append('password', data.get('password'));

// 		const res = await fetch(`http://127.0.0.1:3000/login`, {
// 			method: 'POST',
// 			body: formData
// 		});

// 		const result = await res.json();

// 		if (!!result.access_token) {
// 			cookies.set('accessToken', result.access_token, { path: '/', sameSite: 'strict' });
// 			throw redirect(302, '/');
// 		}

// 		return result;
// 	}
// };

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.set('email', data.get('email'));
		formData.set('password', data.get('password'));

		const parsedData = {};
		for await (const [name, value] of formData.entries()) {
			parsedData[name] = value;
		}

		const res = await fetch('https://api2.sierra.my.id/login', {
			method: 'POST',
			body: JSON.stringify(parsedData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const result = await res.json();

		// console.log(result)

		if (!!result.access_token) {
			cookies.set('accessToken', result.access_token, { path: '/', sameSite: 'strict' });
			throw redirect(302, '/');
		}

		return result;
	}
};
