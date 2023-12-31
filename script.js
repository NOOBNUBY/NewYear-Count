const newYear = new Date(2024, 0);
let diffSec;

const blink = element => {
	element.classList.add("blink");
	setTimeout(() => element.classList.remove("blink"), 200);
};

const updateSec = () => {
	const afterBirth = document.getElementById('afterBirth');
	diffSec = (newYear.getTime() - new Date().getTime()) / 1000;
	if (afterBirth) {
		afterBirth.innerHTML = Math.round(diffSec);
	}
	if(diffSec <= 0) {
		clearInterval(updateSec);
		const afterBirth = document.getElementById('afterBirth');
		const title = document.getElementById('title');
		title.innerHTML = 'Happy New Year!';
		afterBirth.innerHTML = '';
	}
};

setInterval(() => updateSec(), 1000);
setInterval(() => {
	const afterBirth = document.getElementById('afterBirth');
    if (afterBirth) {
        blink(afterBirth);
    }
}, 950);
