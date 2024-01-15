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

console.log(Date.now()); // resalt - 1684121132332
console.log(new Date(1684121132332)); // resalt - Mon May 15 2023 06:25:32 GMT+0300 (Восточная Европа, летнее время)

// working with  new Date

const date = new Date();

console.log(date); // shows a real time
console.dir(date); // shows all methods of Date
console.log(date.getDate()); // method getDate() shows a day
console.log(date.getMonth()); // method getDate() shows a month
console.log(date.getFullYear()); // method getDate() shows a year

date.setDate(17); // set a day
console.log(date.getDate()); // get a day

console.log(date.getUTCHours());
console.log(date.getHours());

console.log(date.toLocaleString()); // shows user's date with current time as a string 
console.log(date.toLocaleDateString()); // shows user's date as a string 

console.log(date.toLocaleString('ua')); // shows user's date with current time as a string .In brackets there is an argument - name of country
console.log(date.toLocaleString('en')); // shows user's date with current time as a string .In brackets there is an argument - name of country
console.log(date.toLocaleString('en-US')); // shows user's date with current time as a string .In brackets there is an argument - name of country

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

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'suturday'];

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
console.log(getUserTime(new Date()));
document.querySelector('.time4').innerHTML = `Today: ${ getUserTime(new Date())}`;


// function for working with time range

const dateBtn = document.querySelector('.date-form__btn');
const dateOut = document.querySelector('.time6');
const dateAmount = document.querySelector('.time7');
let dayCount = ''; // amount of days

dateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let dateStart = document.querySelector('#start').value;
  let dateEnd = document.querySelector('#end').value;
  dateStart = Date.parse(dateStart); // convert date to UNIX time / resalt- 1684454400000
  dateEnd = Date.parse(dateEnd); // convert date to UNIX time / resalt- 1684454400000

  for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
    dayCount++;
    dateOut.innerHTML += new Date(i).toISOString().substring(0, 10) + '<br>';
  }

  dateAmount.innerHTML = `Amount of days- ${dayCount}`; // amount of days
})

// Another way to work with object Date are libraries luxon and Moment.js or data-fns