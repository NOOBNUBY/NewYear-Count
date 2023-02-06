const birthDate = new Date("2007-02-06T00:00:00");
let diffSec;

const blink = element => {
	element.classList.add("blink");
	setTimeout(() => element.classList.remove("blink"), 200);
};

const updateSec = () => {
	diffSec = (new Date().getTime() - birthDate.getTime()) / 1000;
	afterBirth.innerHTML = Math.round(diffSec);
};

setInterval(() => updateSec(), 1000);
setInterval(() => blink(afterBirth), 950);
