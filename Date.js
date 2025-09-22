// new Date()

// new Date(year, month, day, hour, minutes, seconds) - parameters of new Date in JavaScript

console.log(new Date(2020, 3, 12, 20, 45, 0));

// new Date('YYYY-MM-DDTHH:mm:ss.sssZ') - parameters of new Date in ISO format.Format for working with server

console.log(new Date('1977-01-28T12:00:00'));

// new Date(timestamp) - unix format  

console.log(new Date(1684120603)) // SECONDS SINCE JAN 01 1970. (UTC)  6:16:51 AM

// to see a real date you have to add 000 after numbers in the brackets

console.log(new Date(1684120603000))

// to see a real date in UNIX format 

console.log(Date.now()); // result - 1684121132332
console.log(new Date(1684121132332)); // result - Mon May 15 2023 06:25:32 GMT+0300 (Восточная Европа, летнее время)

// working with  new Date

const date = new Date();

// Static methods of Date

console.log(Date.now()); // 1730886702000 - current date as a number in milliseconds from 1970
console.log(Date.parse(date)); // 1730887707000 - current date as a number in milliseconds from 1970
console.log(Date.UTC(2024, 11, 6)); // 1733443200000 - current date as a number in milliseconds from 1970

// Methods of instance

console.log(date); // Wed Nov 06 2024 11:52:07 GMT+0200 (Восточная Европа, стандартное время)
console.dir(date); // shows all methods of Date
console.dir(date.getTime()); // 1730892413532 as a string
console.log(date.getTime()); // 1730892413532 as a number
console.log(date.getFullYear()); //  shows a year - 2024
console.log(date.getMonth() + 1); // shows a month(months are counted from 0 to 11) to see the current month it's needed to add +1
console.log(date.getDate()); // method getDate() shows a day
console.log(date.getDay() + 1); // shows a day of the week from 0 to 6(Sunday=0). to see the current day it's needed to add +1
console.log(date.getHours()); // local time on user's computer
console.log(date.getMinutes()); 
console.log(date.getSeconds()); 
console.log(date.getMilliseconds());
console.log(date.getUTCHours());

console.log(date.getUTCFullYear());
console.log(date.getUTCHours()); // time without time zone offset 

date.setFullYear(2023);
date.setMonth(4)
date.setDate(17); // set a day
date.setHours(18);
date.setMinutes(23);
date.setSeconds(45);
date.setMilliseconds(300)
date.setTime(12);

// Method toLocaleString()

console.log(date.toLocaleString()) // 06.11.2024, 13:46:47
console.log(date.toLocaleDateString()); // 06.11.2024
console.log(date.toLocaleTimeString()); // 13:46:47

console.log(date.toLocaleDateString('en-US')); // 11/6/2024
console.log(date.toLocaleTimeString('en-US')); // 1:52:15 PM

console.log(date.toLocaleDateString('en-GB')); // 06/11/2024
console.log(date.toLocaleTimeString('en-GB')); // 13:52:51

console.log(date.toLocaleString()); // shows user's date with current time as a string 
console.log(date.toLocaleDateString()); // shows user's date as a string 

console.log(date.toLocaleString('ua')); // shows user's date with current time as a string .In brackets there is an argument - name of country
console.log(date.toLocaleString('en')); // shows user's date with current time as a string .In brackets there is an argument - name of country
console.log(date.toLocaleString('en-US')); // shows user's date with current time as a string .In brackets there is an argument - name of country

const endOfPromotion = new Date('2024.11.10').toLocaleString('ua');
console.log(endOfPromotion); // 10.11.2024, 00:00:00

console.log(Date.now());
const date2 = new Date('Tue May 16 2023 06:47:17 GMT+0300');
console.log(date2);
document.querySelector('.time').innerHTML = date2;
document.querySelector('.time2').innerHTML = date2.toUTCString();
document.querySelector('.time3').innerHTML = date2.toDateString();


// function for working with time parameters

function addZero(d) {
  return d < 10 ? '0' + d : d;
}

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function getUserTime(time) {
  let year = time.getFullYear();
  let month = addZero(time.getMonth() + 1);
  let date = addZero(time.getDate());
  let weekDay = days[time.getDay()];
  let hour = addZero(time.getHours());
  let minute = addZero(time.getMinutes());

  // console.log(year,month,date,weekDay,hour,minute);
  return `${ year}.${ month}.${ date} ${ weekDay} ${ hour}:${minute}`
}
console.log(getUserTime(new Date()));// 2024.11.06 wednesday 14:15
document.querySelector('.time4').innerHTML = `Today: ${ getUserTime(new Date())}`;

// function for working with time range

const showBtn = document.querySelector("#show"); // button
const showDays = document.querySelector("#date-range"); // div to show result
let dayCount = ''; // amount of days

showBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let dateStart = document.querySelector("#date-start").value; // date in format 2024-11-05
  let dateEnd = document.querySelector("#date-end").value; // date in format 2024-11-05
  dateStart = Date.parse(dateStart); // date in format 1730764800000
  dateEnd = Date.parse(dateEnd); // date in format 1730764800000
  
  for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) { // hours + minutes + seconds + milliseconds = 1 day
    dayCount++;
     showDays.innerHTML += `<div>${new Date(i).toISOString().substring(0, 10)}</div>`;

  }

  showDays.innerHTML += `Amount of days- ${dayCount}`; // amount of days
});


// Counter with Object Date() Days to the New Year

const showDays = document.querySelector("#days");
const showHours = document.querySelector("#hours");
const showMinutes = document.querySelector("#minutes");
const showSeconds = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();
//console.log(currentYear);// 2024

const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
//console.log(nextYear);

function updateCounter() {
  const currentTime = new Date();
  //console.log(currentTime);

  const diff = nextYear - currentTime;
  //console.log(diff);

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  //console.log(daysLeft);

  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  //console.log(hoursLeft);

  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  //console.log(minutesLeft);

  const secondsLeft = Math.floor(diff / 1000) % 60;
  //console.log(secondsLeft);

  showDays.textContent = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  showHours.textContent = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  showMinutes.textContent = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  showSeconds.textContent = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

// calling the update function on page loading
updateCounter();
// calling the update function every seconds with setInterval

setInterval(() => updateCounter(), 1000);


// Example with number of days until the end of the sale

const daysLeftOutput = document.querySelector("#sale-days");

function countDaysLeft () {

  const currentDay = new Date();
  const endOfSale = new Date('2024.12.23');
  const diff = Math.floor((endOfSale - currentDay) / 1000 / 60 / 60 / 24);

  const daysLeft  = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  console.log(daysLeft.format(diff, 'day'));
  daysLeftOutput.innerHTML = daysLeft.format(diff, 'day');
  
}
countDaysLeft ();

// function to get a day of the from date

function getWeekDay (data) {
  const date = new Date(data);
  return date.toLocaleString('ru-Ru', {
    weekday: 'short'
  }).toUpperCase()
};
console.log(getWeekDay('2024.11.06')); // CP

// examples with options for the second parameter in toLocaleString

// 1
let date1 = new Date();
let options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric', 
  timeZoneName: 'short',
  hour12: true 
};

console.log(date1.toLocaleString('en-US', options));
// Output: "Thursday, November 6, 2024, 2:45:07 PM EST" (Output will vary based on current date/time and locale)

// 2

let date2 = new Date();
let options1 = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
  hour12: true
};

console.log(date2.toLocaleString('en-US', options1));
// Example output: "Wednesday, November 6, 2024, 2:46:15 PM EET"

// 3

let date3 = new Date();
let options2 = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'UTC'
};

console.log(date3.toLocaleString('en-GB', options2));
// Example output: "06/11/24, 12:46:15"

// 4

let date4 = new Date();
let options3 = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'long',
  hour12: false,
  timeZone: 'America/New_York'
};

console.log(date4.toLocaleString('en-US', options3));
// Example output: "Wed, Nov 6, 2024, 7:46:15 AM Eastern Standard Time"


// Another way to work with object Date are libraries luxon and Moment.js or data-fns