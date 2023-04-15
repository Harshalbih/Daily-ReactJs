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