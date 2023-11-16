import { API_ENDPOINT } from '$env/static/private';

export const load = async () => {
	const [res1, res2, res3] = await Promise.all([
	  fetch(`${API_ENDPOINT}/rompltd/week`).then(res => res.json()),
	  fetch(`${API_ENDPOINT}/rompv/week`).then(res => res.json()),
	  fetch(`${API_ENDPOINT}/rombss/week`).then(res => res.json())
	]);
  
	return {
	  data1: res1,
	  data2: res2,
	  data3: res3
	};
  };
  
