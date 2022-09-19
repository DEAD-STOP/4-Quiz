const questions1 = {
    question: `What's the something of something?`,
    choices: [`Thing1`, `Thing2`, `Thing3`, `Thing4`],
    answer: `Thing1`
};

let timer = 80;
var timerNumb = document.getElementById("timer");
// timerNumb.value = timer;

function tick () {
    timer-=1
    console.log(timer)
}

let interval = setInterval(tick, 1000);