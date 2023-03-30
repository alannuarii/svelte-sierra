<script>
	import { date, getToday } from '../../lib/js/date';

	let time = '00:00:00';
	let today = getToday();

	setInterval(() => {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();

		hours = (hours < 10 ? '0' : '') + hours;
		minutes = (minutes < 10 ? '0' : '') + minutes;
		seconds = (seconds < 10 ? '0' : '') + seconds;

		time = `${hours} : ${minutes} : ${seconds}`;
	}, 1000);
</script>

<div class="text-center bg-dark text-light py-2">
	<h5>{date(today)}</h5>
	<span class="">{time}</span>
</div>

<style>
	h5 {
		margin: 0px;
		font-size: 16px;
	}
	span {
		font-size: 30px;
        margin: 0px;
        font-weight: 700;
	}
</style>
