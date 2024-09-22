
// DOM - Document Object Model

const html = document.documentElement; // Object html
const body = document.body; // Object body
const head = document.head; // Object head
console.log(html, body, head);
console.log(document.documentURI); //http://127.0.0.1:5500/
console.log(document.title);//  <title>JavaScript basic</title> - content of the title tag
console.log(document.referrer); // shows URL of the page from which an user have come to the current page (http://127.0.0.1:5500/)

// Object Image()
// how to change src at any image in html
const img = new Image();
img.srs = 'images/team-1.jpg';

const image1 = document.querySelector('#image1');
image1.src = img.srs;
console.log(image1.width)
console.log(image1.height)
console.log(image1.src);


// NODES

// document.documentElement - html tag
// document.head - head tag
// document.body - body tag

// Property 'childNodes ' - child nodes. HTML colection(pseudo-array).Has property 'length'

for (let child of document.body.childNodes) {
  console.log(child);
}

const square2 = document.querySelector(".random-square2");
console.log(square2.childNodes[0]);
console.log(square2.childNodes[2]);

// Properties 'firstChild'  and  'lastChild' - element's first child node and element's last child node

const first = html.firstChild; // const html = document.documentElement
const last = html.lastChild;
console.log(first, last);

const square = document.querySelector(".random-square");
console.log(square.firstChild); // #text
console.log(square.lastChild); // #text

// Method 'hasChildNodes'- returns true  or false

const test = document.querySelector(".test");
console.log(test.hasChildNodes());

// Property  nextSibling  and  previousSibling and parentNode

const linkBox = document.querySelector(".link-box");
const link1 = document.querySelector(".link-1");
const link2 = document.querySelector(".link-2");

console.log(link1.nextSibling);
console.log(link2.previousSibling);

console.log(link1.parentNode);
console.log(link2.parentNode);

// ELEMENTS

// Property 'children'   HTML collection(pseudo-array).Has property 'length'

const linkBox2 = document.querySelector(".link-box2");
const link3 = document.querySelector(".link-3");
const link4 = document.querySelector(".link-4");

console.log(linkBox2.children); // shows elements inside parent
console.log(linkBox2.children.length); // console.log length of children collection

// Properties  'firstElementChild'  'lastElementChild'

console.log(linkBox2.firstElementChild);
console.log(linkBox2.lastElementChild);

// property 'parentElement'

console.log(linkBox2.parentElement); // shows parent of element
console.log(link3.parentElement); // shows parent of item
console.log(link4.parentElement); // shows parent of item

// Properties 'previousElementSibling'  'nextElementSibling'

console.log(linkBox2.previousElementSibling); // shows previous neighbour of element
console.log(linkBox2.nextElementSibling); // shows next neighbour of element

console.log(link3.nextElementSibling); //  shows next neighbour of element
console.log(link4.previousElementSibling); //  shows previous neighbour of element



// METHODS FOR SEARCHING ELEMENTS IN DOM

// OLD METHODS  getElementsByTagName(tag)  getElementsByClassName(class)  getElementsByName(name) return alive colection

//  getElementsByTagName(tag)  returns colection of tags

const tags = document.getElementsByTagName("div");
console.log(tags);

//  getElementsByClassName(class)  return colections of elements with class name

const lies = document.getElementsByClassName("item");
console.log(lies);

for (let li of lies) {
  li.style.fontSize = 25 + "px";
}

//  getElementsByName(name)  returns colection of atributes names

const btns = document.getElementsByName("radio");
console.log(btns);

// Method getElementById

const div1 = document.querySelector("#div-1");

console.log(div1);
div1.style.background = "orange";
div1.style.color = "#fff";

// Method querySelector

const selector = document.querySelector(".selector");
console.log(selector);
selector.innerHTML = "I am a querySelector";

// Method querySelectorAll returns not alive collection

const items = document.querySelectorAll(".list__item");

items.forEach((item) => {
  console.log(item);
});

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  items[i].style.fontSize = 30 + "px";
}



// Method matches  returns true  or  false

const items2 = document.querySelectorAll(".list2__item");

items2.forEach((item) => {
  if (item.matches(".item")) {
    console.log(item);
  }
});

// Method closest() shows the nearest ancestor(parent) of the pointed item  or return null

const items3 = document.querySelectorAll(".list3__item");

items.forEach((item) => {
  console.log(item.closest("ul")); // shows items's ancestor with pointed class or tag
});

const child = document.querySelector(".child-2");

console.log(child); // shows pointed item
console.log(child.closest(".child-1")); // shows item's ancestor with pointed class or tag
console.log(child.closest(".parent")); // shows item's ancestor with pointed class or tag

// Method A.contains(B) returns true if element B is a child of element A

const parent1 = document.querySelector(".parent-1");
const child1 = document.querySelector(".child-12");

if (parent1.contains(child1)) {
  console.log("div contains li");
}

// DOM NODE PROPERTIES

// property nodeName   Shows names of tags

console.log(body.nodeName);
console.log(document.querySelector(".parent-1").nodeName);
console.log(document.querySelector(".some-text").nodeName);

// property tagName   Shows names of tags

console.log(body.tagName);
console.log(document.querySelector(".parent-1").tagName);
console.log(document.querySelector(".some-text").tagName);

// property innerHTML  allows to read and change content of tag.Allows to add a new tag into the existing tag

document.querySelector(".some-text").innerHTML = "I am a some text";
console.log(document.querySelector(".some-text").innerHTML);

document.querySelector(".link-box3").innerHTML =
  '<a href="#">I am a link box</a>';
document.querySelector(".link-box3").innerHTML += "<p>Some text</p>";

// property outerHTML allows to read and change content of tag.
// Allows to add a new tag into the existing tag and insted of the existing tag

console.log(document.querySelector(".some-title"));
document.querySelector(".some-title").outerHTML =
  '<p class="paragraph">This is a tag p</p>';
console.log(document.querySelector(".some-title")); // null
console.log(document.querySelector(".paragraph"));

// property textContent  allows to read and change content of tag

document.querySelector(".content").textContent += " and Goodbye";

// Properties  'NodeValue'  and 'data' - applies to comments and text elements

console.log(document.querySelector(".link-box3").nextSibling.nextSibling);
document.querySelector(".link-box3").nextSibling.nextSibling.data =
  "New comment"; // changes comment
console.log(document.querySelector(".link-box3").nextSibling.nextSibling);

//   hidden  ===  display:none;

const hiddenText = document.querySelector(".hidden-text");
hiddenText.hidden = true;

setInterval(() => {
   return hiddenText.hidden = !hiddenText.hidden;
}, 1000);

// ATTRIBUTES
// we can get standart atributes with .(dot) like a property in object console.log(img.src)

const img = document.querySelector(".team-img");

// Method console.dir(elem) shows in console list with all properties of the pointed element

console.dir(img);

// Method 'attributes' shows array of element's attributes
console.log(img.attributes);

// Cycle 'for of' shows values of  element's attributes
for (let value of img.attributes) {
  console.log(value);
}

// elem.hasAttribute(name) - checks if an element has an attribute. Returns true or false

console.log(img.hasAttribute("src"));

// elem.getAttribute(name)  - gets attribute value

console.log(img.getAttribute("alt"));

// elem.setAttribute(name, value) - sets attribute value

img.setAttribute("alt", "image");

for (let value of img.attributes) {
  console.log(value);
}

// elem.removeAttribute(name) - remove attribute

img.removeAttribute("class");

for (let value of img.attributes) {
  console.log(value);
}

// example with getting 'data-' attribute

const block = document.querySelector(".block");

block.style.background = block.getAttribute("data-bg");

// Property dataset for 'data-' atrbutes

console.log(block.dataset.bg); // gets meaning of 'data-bg'
block.dataset.bg = "#000";
console.log(block.dataset.bg);
block.style.background = block.getAttribute("data-bg");

// CREATING and adding DOM elements

// Method 'createElement' - cretes new element in HTML document

let circle = document.createElement("div"); //creating new element
circle.className = "new"; // assigning a class to a new element
circle.innerHTML = "I am a circle"; // assigning content to a new element

// Method 'node.append(elem)' - adds new element to the end of the pointed node

document.body.append(circle);

// Method 'node.prepend(elem)' - adds new element to the beginning of the pointed node

document.body.prepend(circle);

// Method node.before(elem) -  adds new element before  the pointed node

document.querySelector(".block").before(circle);

// Method node.after(elem) -  adds new element after the pointed node

document.querySelector(".block").after(circle);

// Method 'node.replaceWith(elem)' - replaces the pointed node by new element

const teamImg = document.querySelector(".team-img2");
teamImg.replaceWith(circle);

// Method 'node.remove()' - removes element from DOM

document.querySelector(".block2").remove();

// Method cloneNode(true) - creates element's copy with all children inside

const cars = document.querySelector(".cars");
const newCars = cars.cloneNode(true);
circle.after(newCars);

// Method cloneNode(false) - creates element's copy without children inside

const bigBox = document.querySelector(".big-box");
const newBox = bigBox.cloneNode(false);
bigBox.after(newBox);

// Method 'createTextNode(text)' - creates new text

const newText = document.createTextNode("I am a new text");
document.querySelector(".block").after(newText);

// Method node.insertAdjacentHTML("beforebegin","html tag and content")

const fruitList = document.querySelector(".fruits");

fruitList.insertAdjacentHTML("beforebegin", "<h2>Fruit list<hr>");

// Method node.insertAdjacentHTML("afterbegin","html tag and content")

fruitList.insertAdjacentHTML(
  "afterbegin",
  '<li class="fruits__item">water melon</li>'
);

// Method node.insertAdjacentHTML("beforeend","html tag and content")

fruitList.insertAdjacentHTML(
  "beforeend",
  '<li class="fruits__item">strawberry</li>'
);

// Method node.insertAdjacentHTML("afterend","html tag and content")

fruitList.insertAdjacentHTML("afterend", "<hr><h2>End of the list");

// Method node.insertAdjacentText  insert only text


//  STYLE MANAGEMENT

// Method className gets class of element, can change class name in pointed element

console.log(document.querySelector("ul.fruits").className); // gets class of element

const bigBox2 = document.querySelector(".big-box2");
bigBox2.className = "new-style"; // change class name

// Method classList  -  colection of styles

// classList.add()

bigBox2.classList.add("red"); // adds new class

for (let cl of bigBox2.classList) {
  // shows all classes in element
  console.log(cl);
}

// clasList.remove()

bigBox2.classList.remove("red");

// classList.toggle()  toggles classes

bigBox2.addEventListener("click", () => {
  bigBox2.classList.toggle("red");
});

// classList.contains()  checks if the element has this class.  returns true  or  false

console.log(bigBox2.classList.contains("red"));

// Method style - only one style can be added

bigBox2.style.borderRadius = 10 + "px"; // only one style can be added

// Method style.cssText  - many styles can be added

bigBox2.style.cssText = `padding:20px; box-shadow:2px 2px 5px black; border:2px solid blue`;

// Method getComputedStyle(element, [pseudo]) - gets styles of element and its pseudo element

const getStyles = getComputedStyle(bigBox2);
console.log(getStyles); // shows all styles
console.log(getStyles.boxShadow); // shows one pointed style
console.log(getStyles.width); // shows one pointed style
console.log(getStyles.padding); // shows one pointed style

const getStylesAfter = getComputedStyle(bigBox, ["after"]);
console.log(getStylesAfter); // shows all styles
console.log(getStylesAfter.width); // shows one pointed style
console.log(getStylesAfter.backgroundColor); // shows one pointed style

// example with getComputedStyle()

const item = document.querySelector('.figura__item');
setInterval(() => {
    
  let styles = getComputedStyle(item);
  let left = parseFloat(styles.left);
  let top = parseFloat(styles.top);

  if(left < 150) {
    item.style.left = left + 10 + 'px'
  }
  if(top >= 140) {
    top = 140
  }
   if(top >= 0 && left === 150) {
    item.style.top = top + 10 + 'px';
   } 
 
}, 100);


// Method getBoundingClientrect() - gets parameters width,height,left,top,right,bottom of the pointed element relative to the browser window

const fixedElem = document.querySelector(".fixed-elem");

console.log(fixedElem.getBoundingClientRect());
console.log(fixedElem.getBoundingClientRect().left);
console.log(fixedElem.getBoundingClientRect().top);

const clientTop = fixedElem.getBoundingClientRect().top;
console.log(clientTop); // distance to the top of window
const pageTop = clientTop + window.scrollY; //  window.scrollY;
console.log(pageTop); // distance to the top of html document


const getPosition = bigBox2.getBoundingClientRect();
console.log(getPosition); // top left bottom right width height
console.log(getPosition.height); // height
console.log(getPosition.left); // left

// Method  parseInt()  gets number from string if string begins with number

console.log(parseInt(getStylesAfter.width)); // shows one pointed style


// METRICS

// Property window.innerWidth  - shows width of the browser window with scroll track

console.log(window.innerWidth);

// Property window.innerHeight  - shows height of the browser window  with scroll track

console.log(window.innerHeight);

const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");

// Property elem.offsetWidth - full width of the element

console.log(box3.offsetWidth);
console.log(box4.offsetWidth);

// Property elem.offsetHeight - full height of the element

console.log(box3.offsetHeight);
console.log(box4.offsetHeight);

// Property elem.clientWidth  - basic width of element + padding - scroll track(15px) if it exists (only readable)
// also shows  width of the html document without scroll track

console.log(box3.clientWidth); // with border
console.log(box4.clientWidth); // with outline
console.log(document.documentElement.clientWidth); // width of the html

// Property  elem.clientHeight - basic height of element + padding - scroll track(15px) if it exists (only readable)
// also shows  height of the html document without scroll track

console.log(box3.clientHeight); // with border
console.log(box4.clientHeight); // with outline
console.log(document.documentElement.clientHeight); // height of the html

// offsetTop and offsetLeft - element's distantce from the parent
// If parent element has position relative in css -  offsetTop and offsetLeft will be from the parent
// If parent element has position static in css -  offsetTop and offsetLeft will be from the body

const gridItem1 = document.querySelector('.grid__item[data-color="black"]');
console.log(gridItem1.offsetTop);
console.log(gridItem1.offsetLeft);

// offsetParent and parentElement

const gridItem2 = document.querySelector('.grid__item[data-color="red"]');
console.log(gridItem2.offsetParent); // Shows body
console.log(gridItem2.parentElement); // Shows div class="grid"


// Property elem.clientLeft -  an indent the inner part of the element from the outer part on the left

const textBox = document.querySelector(".some-box");
console.log(textBox.clientLeft);

// Property elem.clientTop - an indent the inner part of the element from the outer part on the  top

console.log(textBox.clientTop);

// coordinates pageX and pageY
// shows coordinates relative to the document(body)

window.addEventListener('click', (event) => {
  console.log(event.pageX);
  console.log(event.pageY);
})

// coordinates clientX and clientY
// shows coordinates relative to the browser window

window.addEventListener('click', (event) => {
  console.log(event.pageX);
  console.log(event.pageY);
})

// Method getBoundingClientrect() - gets parameters width,height,left,top,right,bottom of the pointed element relative to the browser window

const fixedElem1 = document.querySelector(".fixed-elem");

console.log(fixedElem1.getBoundingClientRect());
console.log(fixedElem1.getBoundingClientRect().left);
console.log(fixedElem1.getBoundingClientRect().top);



// Property elem.scrollWidth - element width with scrolling inside the element  (only readable)

console.log(box3.scrollWidth);
console.log(document.body.scrollWidth);

// Property elem.scrollHeight - element height with scrolling inside the element  (only readable)

console.log(box3.scrollHeight);
console.log(document.body.scrollHeight);

// Property elem.scrollTop - the height by which the element is scrolled up  (can be changed)

console.log(document.documentElement.scrollTop); // can be used for html and body

box3.addEventListener("scroll", () => {
  console.log(box3.scrollTop);
});

box3.addEventListener("click", () => {
  box3.scrollTop += 20;
});

// Property elem.scrollLeft - the width by which the element is scrolled left (can be changed)

console.log(document.documentElement.scrollLeft); // can be used for html and body

box3.addEventListener("scroll", () => {
  console.log(box3.scrollLeft);
});

box3.addEventListener("mouseenter", () => {
  box3.scrollLeft += 20;
});


// Property'window.pageYOffset' or 'window.scrollY'  shifting the document vertically in px( amount of scrolled pixels)

console.log(window.pageYOffset);
console.log(window.scrollY);

// Property 'window.pageXOffset' or 'window.scrollX' shifting the document  horizontaly in px( amount of scrolled pixels)

console.log(window.pageXOffset);
console.log(window.scrollX);

// Method for scrolling  - window.scrollBy(X, Y)- scrolls the page from its current position by( X ,Y). Smooth scrolling

const transBtn2 = document.querySelector(".translate-btn2");

transBtn2.addEventListener("click", () => {
  window.scrollBy(0, 50);
});

// Method for scrolling - window.scrollTo(X, Y)- scrolls the page from its current position to the pointed coordinates (X, Y). Smooth scrolling
const transBtn3 = document.querySelector(".translate-btn3");

transBtn3.addEventListener("click", () => {
  window.scrollTo(0, 500);
});

// Method scrollTo() - as an object with options. Does not work in safary browser

const scrollButton = document.querySelector('#scroll');
scrollButton.addEventListener('click', scrollToOptions);

function scrollToOptions() {
  window.scrollTo({
    left:0,
    top:1000,
    behavior:'smooth' // smooth, instant, auto
  })
}

// Method elem.scrollIntoView(true) - translates the pointed element to the top of the window

const transBtn = document.querySelector(".translate-btn-top");

transBtn.onclick = () => {
  transBtn.style.backgroundColor = "red";
  document.querySelector(".translate").scrollIntoView(true);
};

// Method elem.scrollIntoView(false) - translates the pointed element to the bottom of the window

const transBtn1 = document.querySelector(".translate-btn-bottom");

transBtn1.onclick = () => {
  transBtn1.style.backgroundColor = "red";
  document.querySelector(".translate").scrollIntoView(false);
};


// elementsFromPoint(x, y) - shows the deepest element from pointed coordinates in visible part of the window

let getElem = document.elementsFromPoint(243, 318);
console.log(getElem);



// TABLE PROPERTIES

const table = document.querySelector("table");

// 1 - table.rows - '<tr></tr>' colection

console.log(table.rows[0]);
table.rows[1].style.background = "pink";
table.rows[2].style.background = "pink";

// 2 - table.caption - '<caption></caption>'

table.caption.style.fontSize = "30px";

// 3 - table.tHead - '<thead></thead>'

console.log(table.tHead);
table.tHead.style.background = "blue";

// 4 - table.tFoot - '<tfoot></tfoot>'

console.log(table.tFoot);
table.tFoot.style.background = "blue";

// 5 - table.tBodies - '<tbody></tbody>'
// 6 - tr.cells - '<th></th>' and '<td></td>' colection

console.log(table.rows[1].cells[1].innerHTML);
table.rows[1].cells[1].style.background = "green";
// 7 - tr.sectionRowIndex - line number of 'tr' in the current section(thead,tbody,tfoot)
// 8 - tr.rowIndex - line number of 'tr' in the in the whole table
// 9 - td.cellIndex - cell number(td) in a row(tr)

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.offsetWidth);
// console.log(document.documentElement.offsetHeight);
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.scrollWidth);

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.pageYOffset);
// console.log(window.pageXOffset);




//  slider
const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider__track');
const nextBtn = document.querySelector('.next-button');
const prevBtn = document.querySelector('.prev-button');
const imagesBox = document.querySelectorAll('.slider__img-box');
const images = document.querySelectorAll('.slider__img');

let count = 0;

nextBtn.addEventListener('click', (event) => {
  count++;
  if (count >= imagesBox.length) {
    count--;
  } else {
    imagesBox.forEach((item) => {
      item.style.transform += `translateX(-100%)`;
    })
    //  console.log( event.target);
    //   console.log( event.currentTarget);
  }
  images[count].classList.add('active');
  images[count - 1].classList.remove('active');
})

prevBtn.addEventListener('click', (event) => {
  count--;
  if (count < 0) {
    count = 0;
  } else {
    imagesBox.forEach((item) => {
      item.style.transform += `translateX(100%)`;
    })
    // console.log( event.target);
    //  console.log( event.currentTarget);
    images[count].classList.add('active');
    images[count + 1].classList.remove('active');
  }

})
// const sliderTopWindow = slider.getBoundingClientRect().top;
// console.log( sliderTopWindow)
// const sliderTopHtml = sliderTopWindow + window.pageYOffset;
// console.log(sliderTopHtml)

// console.log(document.querySelector('.slider').offsetTop);
// console.log(document.querySelector('.slider').clientTop);

// console.log(document.querySelector('.slider').offsetLeft);
// console.log(document.querySelector('.slider').offsetParent);

// console.log(sliderTrack.offsetTop);
// console.log(sliderTrack.offsetLeft);
// console.log(sliderTrack.offsetParent);


const elementDiv = document.createElement('div');
elementDiv.className = 'new-div';
elementDiv.innerHTML = '<div class="inner">I am an inner</div>';
document.querySelector('.wrapper').append(elementDiv);
console.log(elementDiv)
console.log(elementDiv.querySelector('.inner'));





