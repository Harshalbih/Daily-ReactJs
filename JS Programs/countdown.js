//countdown
let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
let x = setInterval(function() {

    let now = new Date().getTime();

    let timeLeft = countDownDate - now;

    const days = Math.floor( timeLeft/(1000*60*60*24) );
    const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = Math.floor( (timeLeft/1000/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );

    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
    }, 2000);

//convert time to 24hour
let s = "07:05:45PM";
  
function timeConversion(s) {
    const time = s.slice(0,-2);
    const modifier = s.slice(-2);
    let [hours, minutes, seconds] = time.split(':');
    if (hours == '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours) + 12;
    }
    return `${hours}:${minutes}:${seconds}`;
}
timeConversion(s);