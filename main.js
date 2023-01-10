// Variables

let $days = document.querySelector('.days');
let $hours = document.querySelector('.hours');
let $minutes = document.querySelector('.minutes');
let $seconds = document.querySelector('.seconds');

// Funciones

const getRemainTime = function(deadline){
    let now = new Date();
    let remainTime = (new Date(deadline) - now) / 1000;
    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    let remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

// console.log(getRemainTime('wen Jan 1 2025 12:32:53 GMT+0100'));

const countDown = (deadline, e, message)=> {
    let element = document.getElementById(e);

    let timerUpdate = setInterval( ()=> {
        let time = getRemainTime(deadline);
        element.innerHTML =`${time.remainDays} ${time.remainHours} ${time.remainMinutes} ${time.remainSeconds}`;

        if(time.remainTime < 1){
            clearInterval(timerUpdate);
            element.innerHTML = message;
        }
    }, 1000)
};

countDown('wen Jan 1 2025 00:00:00 GMT+0100', 'clock', 'Feliz año nuevo 2025');