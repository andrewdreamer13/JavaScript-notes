
// EVENTS

// onclick

// first method with onclick
// event with attribute 'onclick' in the html element
// <button class="button" id="scroll" onclick="function name">scroll</button>

const button = document.querySelector('#scroll');

// second method with onclick
button.onclick = function() {
  console.log('click')
}

// third method with onclick
button.onclick = getClick;

function getClick() {
  console.log('get click')
}



// addEventListener('event', function, options)
// can be called several times on the same element

// first variant to call event with function inside
button.addEventListener('click', () => {
  console.log('click')
});

// second variant to call event with function from outside
button.addEventListener('click', getClick);

function getClick() {
  console.log('get click')
}

// third variant to call event with options

const options = {
  capture: false, // the phase in which the event handler should work( capturing an event during a diving)
  once: true, // if false == infinite . if true == one(removeEventListener)
  pasive: false, // if true the event handler will never call preventDefault()
};

button.addEventListener('click', getTime, options);

function getTime() {
  console.log(Date().slice(0, 15));
}

//  removeEventListener() - stops function

function getLog() {
  console.log('get log');
  button.removeEventListener('click', getLog)
}

button.addEventListener('click', getLog);



// Object event

const clickBtn5 = document.querySelector(".click-btn5");

function showEvent(event) {
   console.log(event.type); // shows type of event
   console.log(event); // shows content of object event
   console.log(event.target); // shows element on which was called event
   console.log(event.currentTarget); // shows the element on which event handler was assigned
   console.log(event.clientX); // shows coordinates on which was called  event handler
   console.log(event.clientY); // shows coordinates on which was called  event handler
   console.log(event.which); //shows which button on mouse was clicked
   console.log(event.relatedTarget); // shows from which element was moved mouse
   console.log(event.repeat); // shows event repeating
}

clickBtn5.addEventListener("click", showEvent);
clickBtn5.addEventListener("mouseenter", showEvent);

// Event Bubbling and Event Capturing

const outBox = document.querySelector('.out-box');
const middleBox = document.querySelector('.middle-box');
const innerBox = document.querySelector('.inner-box');

outBox.addEventListener('click', function (event) {
  console.log('This is out-box');
  console.log('event.target-', event.target);
  console.log('currentTarget-', event.currentTarget);
} ,{ capture: true } //option capture - an event during a diving
);

middleBox.addEventListener('click', function (event) {
  //event.stopPropagation(); // stop bubbling
    console.log('This is middle-box');
    console.log('event.target-', event.target);
    console.log('currentTarget-', event.currentTarget);
  });

innerBox.addEventListener('click', function (event) {
 // event.stopPropagation(); // stop bubbling
  console.log('This is inner-box');
  console.log('event.target-', event.target);
  console.log('currentTarget-', event.currentTarget);
});


// Event delegation

const btnParent = document.querySelector('.delegation');
const btns = document.querySelectorAll('.delegation__button');

// function for the buttons

function showText() {
  console.log('Some text');
}

// example without delegation   first way to call event handler

btns.forEach((btn) =>{
  btn.addEventListener('click', (event) => {
    showText();
    console.log(event.target); // button on which was click
    console.log(event.currentTarget); // button on which was click
  })
});

// example with delegation  second way to call event handler

btnParent.addEventListener('click', (event) => {
  if(event.target.closest('.delegation__button')) {
    showText();
    console.log(event.target); // button on which was click
    console.log(event.currentTarget); // btnParent
  }
  
})

// third example with delegation

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuSpanOne = document.querySelector('.menu__span-one');
const menuSpanTwo = document.querySelector('.menu__span-2');


document.addEventListener('click', function (event) {
  if (event.target.closest('.menu__btn')) {
    menuList.classList.toggle('visible');
    menuSpanOne.classList.toggle('none');
    menuSpanTwo.classList.toggle('display-block');
  }
  if (!event.target.closest('.menu')) {
    menuList.classList.remove('visible');
    menuSpanOne.classList.remove('none');
    menuSpanTwo.classList.remove('display-block');
  }
});

document.addEventListener('keyup', function (event) {
  console.log(event.code);
  if (event.code === 'Escape') {
    menuList.classList.remove('visible');
    menuSpanOne.classList.remove('none');
    menuSpanTwo.classList.remove('display-block');
  }
})

//  event.preventDefault -  canceling standard browser actions

const googleLink = document.querySelector('.google-link');

googleLink.addEventListener('click', function (event) {
    googleLink.style.backgroundColor = 'red';
    event.preventDefault(); // if we use 'onclick' insted of 'addEventListener' we must write return false
  } //,{'passive':true} // if true the event handler will never call preventDefault()
);


// Mouse events

//  Simple events -  mousedown  mouseup  mousemove  mouseenter  mouseleave  mouseover  mouseout
// Complex events - click  dblclick contextmenu

// mousedown

const btn10 = document.querySelector('.button10');

btn10.addEventListener('mousedown', function (event) {
  console.log(`button on mouse number ${event.which}`);
})

// event.which = 1 - left button
// event.which = 2 - central button
// event.which = 1 - right button


// mousemove

const mouseBlock1 = document.querySelector('.mousemove-block-1');

mouseBlock1.addEventListener('mousemove', function (event) {
  mouseBlock1.innerHTML = `ClientX = ${event.clientX} <br> ClientY = ${event.clientY}`
})

// mouseover  mouseout have property 'relatedTarget' (can bubble)

const mouseBlock2 = document.querySelector('.mousemove-block-2');

mouseBlock2.addEventListener('mouseover', function (event) {
  mouseBlock2.textContent = 'Mouse is in';
  console.log(event.target);
  console.log(event.relatedTarget); // shows from which element was moved mouse
})

mouseBlock2.addEventListener('mouseout', function (event) {
  mouseBlock2.textContent = 'Mouse is out';
  console.log(event.target); // shows from which element was moved mouse
  console.log(event.relatedTarget);

})

//  mouseover  mouseout can bubble inside element

// first example
const mouseBlock3 = document.querySelector('.mousemove-block-3');

mouseBlock3.addEventListener('mouseover', function (event) {
  console.log(event.target);
  console.log(event.relatedTarget); // shows from which element was moved mouse
})

mouseBlock3.addEventListener('mouseout', function (event) {
  console.log(event.target); // shows from which element was moved mouse
  console.log(event.relatedTarget);

})

// second example

const mouseBlock5 = document.querySelector('.mousemove-block-5');

mouseBlock5.addEventListener('mouseover', function (event) { // mouseenter does not work
  let target = event.target.closest('.mousemove-block__inner');
  if (!target) {
    return false;
  }
  target.style.cssText = 'border:5px solid orange';
})

mouseBlock5.addEventListener('mouseout', function (event) { // mouseleave does not work
  let target = event.target.closest('.mousemove-block__inner');
  if (!target) {
    return false;
  }
  target.style.cssText = '';
})



// mouseenter mouseleave  have property 'relatedTarget'( does not buble)

const mouseBlock4 = document.querySelector('.mousemove-block-4');

mouseBlock4.addEventListener('mouseenter', function (event) {
  // mouseBlock4.textContent = 'Mouse enters';
  console.log(event.target);
  console.log(event.relatedTarget); // shows from which element was moved mouse
})

mouseBlock4.addEventListener('mouseleave', function (event) {
  // mouseBlock4.textContent = 'Mouse leaves';
  console.log(event.target); // shows from which element was moved mouse
  console.log(event.relatedTarget);

});


// keyboard events

// keydown  keyup   

// event.code   event.key  - shows code and key of buttons

document.addEventListener('keydown', function (event) {
  // console.log(`Button ${event.code}, ${event.key} is pressed`);
})

document.addEventListener('keyup', function (event) {
  // console.log(`Button ${event.code}, ${event.key} is unpressed`);
})

document.addEventListener('keydown', function (event) {
  // console.log(`Button ${event.code}, ${event.key} is pressed`);
  console.log(event.repeat);
})

// example with textarea letter counter

const textArea = document.querySelector('.message');
const textLimit = textArea.getAttribute('maxlength')
const textCounter = document.querySelector('.span-num');
textCounter.innerHTML = textLimit;

textArea.addEventListener('keyup', textSetCounter);
textArea.addEventListener('keydown', function (event) {
  if (event.repeat) {
    textSetCounter();
  }
});

function textSetCounter(event) {
  const textCounterRes = textLimit - textArea.value.length;
  textCounter.innerHTML = textCounterRes;
}

// Event scroll

window.addEventListener('scroll', function () {
  // console.log(`${scrollY}px`)
});

// function for scroll effects

function scrollEffect(element, effect) {

  window.addEventListener('scroll', function () {
    const scrolled = scrollY;
    const windowHeight = window.innerHeight / 2;
    const windowCenter = scrolled + windowHeight;

    const animElem = document.querySelector(`${element}`);
    const animElemTop = animElem.offsetTop;
    const animElemHeight = animElem.offsetHeight / 2;
    const animElemCenter = animElemTop + animElemHeight;

    if (windowCenter >= animElemCenter) {
      animElem.classList.add(`${effect}`);
    } else {
      animElem.classList.remove(`${effect}`);
    }
  });

}
scrollEffect('.block3', 'block3-transform');
scrollEffect('.block4', 'block4-transform');


// DOMContentLoaded - only HTML tree is  loaded. the event 'DOMContentLoaded' works on the object 'document'

 document.addEventListener('DOMContentLoaded', readyLoad); // Event DOMContentLoaded works for html document

// load - all resurses are loaded(css, img,).  the event 'load' works on the object 'window'

 window.addEventListener('load', readyState); // Event load works for window

// document.readyState - state of document at this moment.Has three states :
// 1 - 'loading' - document is loading
// 2 - 'interactive' - document is fully read
// 3 - 'complete' - document is fully read and loaded

function readyLoad() {
  const loadImg = document.querySelector('.check-loading');
  console.log(document.readyState);
  console.log('document is loaded');
  console.log(loadImg.offsetWidth);
}

function readyState() {
  const loadImg = document.querySelector('.check-loading');
  console.log(document.readyState);
  console.log('document is loaded');
  console.log(loadImg.offsetWidth);
}

// beforeunload and unload - user leaves the page.  the event 'load' works on the object 'window'

window.addEventListener('beforeunload', beforeUnload);

function beforeUnload(event) { // shows modal window with warning
  event.preventDefault();
  event.returnValue = '';
}

