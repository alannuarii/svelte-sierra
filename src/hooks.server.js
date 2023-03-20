// import { redirect } from '@sveltejs/kit';

// export async function handle({ event, resolve }) {
// 	const token = event.cookies.get('accessToken');
// 	if (!token && event.route.id.startsWith('/(app)')) {
// 		throw redirect(302, '/login');
// 	}

// 	const response = await resolve(event);
// 	return response;
// }
