const newYear = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);
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
};

setInterval(() => updateSec(), 1000);
setInterval(() => {
    const afterBirth = document.getElementById('afterBirth');
    if (afterBirth) {
        blink(afterBirth);
    }
}, 950);
