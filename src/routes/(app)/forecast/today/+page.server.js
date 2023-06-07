import { getToday } from '../../../../lib/js/date';
import { API_ENDPOINT } from '../../../../lib/js/endpoint';

export const load = async (params) => {
	const today = getToday();
  
	const [res1, res2, res3] = await Promise.all([
	  fetch(`${API_ENDPOINT}/forcast-today/${today}`).then(res => res.json()),
	  fetch(`${API_ENDPOINT}/weather-today`).then(res => res.json()),
	  fetch(`${API_ENDPOINT}/irradiance-array/${today}`).then(res => res.json())
	]);
  
	return {
	  data1: res1,
	  data2: res2,
	  data3: res3
	};
  };
  
