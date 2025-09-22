

// BOM Browser Object Model:
// window -  an object with current browser tab  window is a global object
// document - an open html document object

// location - browser address bar object
// location's properties:
// location.href - url address of the current tab in the window (https://www.youtube.com/watch?v=jdVRDdm6R6I&list=PLSMHX8qO78juP-FO5NH2jfmyrU1h1rGFY&index=1&t=633s)
// location.protocol - protocol's name (https://)
// location.host(location.hostname) - name of the host (/www.youtube.com)
// location.port - port's number
// location.pathname - a way to the script with script's own name ()
// location.hash - url's hash
// location.search - parameter string

console.log(window.location.href); // http://127.0.0.1:5500/ - url address of the current tab in the window
window.location.href = 'https:/google.com'; // how to change the curent tab to another one - first way
window.location.assign( 'https:/google.com'); // how to change the curent tab to another one - second way

// history - page navigation history object
// history's methods:
// back() - go back
// forward() - go next step
// go(n) - go by 'n' steps
// pushState(state, unused, url) - adds page visit's count 


// navigator - object with information about the browser
// console - browser debug console object
// status - bar status object
// screen
// frames

// alert()
// confirm()
// prompt()


// Browser methods:

// IntersectionObserver()
// MutationObserver()
// ResizeObserver()
// FileReader()
// requestAnimationFrame API

// setTimeout(func, duration)
setTimeout(() => {
  
}, timeout);

// setInterval(func, duration)
setInterval(() => {
  // function
}, interval);

// example with setInterval
let count = 0;
const time = setInterval(() => {
  count++;
  document.querySelector('#time').textContent = count;
  if(count >= 5) {
    clearInterval(time)
  }
}, 1000);

// example with setInterval and setTimeout

const flowersSrc = [
  'img/flower1.png',
  'img/flower2.png',
  'img/flower3.png',
  'img/flower4.png',
  'img/flower5.png',
  'img/flower6.png',
  'img/flower7.png'
];

const flowers = document.querySelector('.flowers__img');
let currentIndex = 0;

function getFlower() {
  setInterval(() => {
    flowers.classList.remove('flowers__img--vis');

    setTimeout(() => {
      flowers.src = flowersSrc[currentIndex];
      flowers.classList.add('flowers__img--vis');
      currentIndex++;
      if (currentIndex >= flowersSrc.length) {
        currentIndex = 0;
      }
    }, 100);

  }, 3000); 
}

getFlower();

// clearTimeout()
// clearInterval()

// example with clearInterval in setTimeout

const flashingText = document.querySelector('.flash');

const flashDelay = setInterval(() => {
  if(flashingText.style.opacity == 1) {
    flashingText.style.opacity = 0 ;
  } else {
    flashingText.style.opacity = 1
  }
}, 1000);

setTimeout(() => {
  clearInterval(flashDelay)
}, 9000);

// example with IntersectionObserver
const body = document.querySelector('body')
const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  console.log(observer)
});
observer.observe(body);

// example with FileReader
const input = document.querySelector('#file-input');
const file = input.files[0];

const reader = new FileReader();
reader.onload = () => {
  console.log(reader.result)
}

reader.readAsText(file); // reads text files
reader.readAsDataURL(file); // reads URL from images, video, audio files 




// Data storages:
// localStorage
// SessionStorage
// WebSQL
// IndexedDB


// Web flows:
// worker

window.navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos)
});


// FormData - Object

const userForm = document.querySelector('#userForm'); // gets form from DOM

userForm.addEventListener('submit', getUserData); // call submit in the form

function getUserData(e) {  // creates function for submit
  e.preventDefault();

  const userData = new FormData( userForm); // creates new formData object
  console.log(userData)

  for(let data of userData) { // iterates FormData 
    console.log(data)  //  gets data from form
  }

  const userName = userData.get('userName'); // gets input's value with its name attribute. Shows an array
  console.log(userName);

  const userAge = userData.get('userAge');  // gets input's value with its name attribute.  Shows an array
  console.log(userAge);

  const userDataObject = Object.fromEntries(userData); // Shows an object where key = name attribute and meaning = input's value
  console.log(userDataObject);

  // userDataObject = {
  //   userName: 'value',
  //   userAge: 'value',
  //   cities: 'selected option's value',
  //   drinks: 'checked radio input's value'
  // }


  // getting data from userDataObject
  console.log(`My name is ${userDataObject.userName}. I am from ${userDataObject.cities}. I am ${userDataObject.userAge} old. I prefer to drink ${userDataObject.drinks}`)
}


// fullscreen browser API
// can increase any DOM element size to fullscreen

const img = document.createElement('img');
img.classList.add('scalable-img');
img.src = 'images/team-1.jpg';
img.alt = 'team';
document.body.appendChild(img);

img.addEventListener('click', resizeImg);

function resizeImg() {
  if (!document.fullscreenElement) {
    img.requestFullscreen();
  }else {
     if(document.fullscreenEnabled) {
      document.exitFullscreen();
     }
  }
}