// DOM - Document Object Model

// Objects for interaction in DOM tree
// document - entry point to the HTML document
// element nodes - HTML tags
// text nodes - text in the tags
// comments - elements with comments


// NODES

// document.documentElement - html tag
// document.head - head tag
// document.body - body tag

const html = document.documentElement; // Object html
const body = document.body; // Object body
const head = document.head; // Object head
console.log(html, body, head);
console.log(document.documentURI); //http://127.0.0.1:5500/
console.log(document.title); //  <title>JavaScript basic</title> - content of the title tag
console.log(document.referrer); // shows URL of the page from which an user have come to the current page (http://127.0.0.1:5500/)

// Property 'childNodes ' - child elements of a tag. HTML Collection(pseudo-array).Has property 'length'

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

// property 'parentElement'- shows parent of element

console.log(linkBox2.parentElement); // shows parent of element
console.log(link3.parentElement); // shows parent of item
console.log(link4.parentElement); // shows parent of item

// Properties 'previousElementSibling'  'nextElementSibling'

console.log(linkBox2.previousElementSibling); // shows previous neighbour of element
console.log(linkBox2.nextElementSibling); // shows next neighbour of element

console.log(link3.nextElementSibling); //  shows next neigрbour of element
console.log(link4.previousElementSibling); //  shows previous neighbour of element

// METHODS FOR SEARCHING ELEMENTS IN DOM

// OLD METHODS  getElementsByTagName(tag)  getElementsByClassName(class)  getElementsByName(name) return alive Collection

//  getElementsByTagName(tag)  returns Collection of tags

const tags = document.getElementsByTagName("div");
console.log(tags);

//  getElementsByClassName(class)  return Collections of elements with class name

const lies = document.getElementsByClassName("item");
console.log(lies);

for (let li of lies) {
  li.style.fontSize = 25 + "px";
}

//  getElementsByName(name)  returns Collection of attributes names

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

console.log(document.body.constructor.name); // HTMLBodyElement
console.log(document.body instanceof HTMLBodyElement); // true

console.log(document.querySelector('div').constructor.name); // HTMLDivElement
console.log(document.querySelector('div') instanceof HTMLDivElement); // true

// property nodeName   Shows names of nodes in the document

console.log(body.nodeName); // BODY
console.log(document.querySelector(".parent-1").nodeName);
console.log(document.querySelector(".some-text").nodeName);

// property tagName   Shows names of tags

console.log(body.tagName); // BODY
console.log(document.querySelector(".parent-1").tagName);
console.log(document.querySelector(".some-text").tagName);

// property innerHTML  allows to read and change content of tag.Allows to add a new tag into the existing tag

document.querySelector(".some-text").innerHTML = "I am a some text";
console.log(document.querySelector(".some-text").innerHTML);

document.querySelector(".link-box3").innerHTML =
  '<a href="#">I am a link box</a>';
document.querySelector(".link-box3").innerHTML += "<p>Some text</p>";

// property outerHTML allows to read and change content of tag.
// Allows to add a new tag into the existing tag and instead of the existing tag

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
  return (hiddenText.hidden = !hiddenText.hidden);
}, 1000);

// ATTRIBUTES
// we can get standard attributes with .(dot) like a property in object console.log(img.src)

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

// Property dataset for 'data-' attributes

console.log(block.dataset.bg); // gets meaning of 'data-bg'
block.dataset.bg = "#000";
console.log(block.dataset.bg);
block.style.background = block.getAttribute("data-bg");

title.setAttribute('data-num', '20');
console.log(title.dataset.num); // 20

// CREATING and adding DOM elements

// Method 'createElement' - creates new element in HTML document

let circle = document.createElement("div"); //creating new element
circle.className = "new"; // assigning a class to a new element
circle.innerHTML = "I am a circle"; // assigning content to a new element

// Method 'node.append(elem)' - adds new element to the end of the pointed node

document.body.append(circle);

const list = document.querySelector(".list");
const arr = ["apple", "banana", "orange", "grapes", "plum"];

let currentIndex = 0;

function addListItem() {
  if (currentIndex < arr.length) {
    let li = document.createElement("li");
    li.textContent = arr[currentIndex];
    list.appendChild(li);
    currentIndex++;
  } else {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(addListItem, 2000);


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

const list = document.querySelector('ul');

const liRemove = setInterval(() => {
  if(list.lastElementChild == null) {
    clearInterval(liRemove);
    console.log('No more items');
    
  }else {
    list.lastElementChild.remove();
  }
  },1000)

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

// Method classList  -  Collection of styles

// classList.add()

bigBox2.classList.add("red"); // adds new class

for (let cl of bigBox2.classList) {
  // shows all classes in element
  console.log(cl);
}

// classList.remove()

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

const item = document.querySelector(".figura__item");
setInterval(() => {
  let styles = getComputedStyle(item);
  let left = parseFloat(styles.left);
  let top = parseFloat(styles.top);

  if (left < 150) {
    item.style.left = left + 10 + "px";
  }
  if (top >= 140) {
    top = 140;
  }
  if (top >= 0 && left === 150) {
    item.style.top = top + 10 + "px";
  }
}, 100);

// Method getBoundingClientRect() - gets parameters width,height,left,top,right,bottom of the pointed element relative to the browser window

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

const metrics = document.querySelector('.metrics');
const metricsText = document.querySelector('.metrics__text');
const metricsTextSpan = document.querySelector('.metrics__text > span');
const html = document.documentElement;

// window metrics

// window.innerWidth - width of the browser window include scrollbar
console.log(window.innerWidth);

//  window.innerHeight - height of the browser window include scrollbar
console.log(window.innerHeight);

// window.scrollY - shifting page up relative to the top of HTML document (window.scrollY = html.scrollTop)
console.log(window.scrollY);

// window.scrollX - shifting page left relative to the left of HTML document (window.scrollX = html.scrollLeft)
console.log( window.scrollX);

// coordinates pageX and pageY
// shows coordinates relative to the document(body)

window.addEventListener("click", (event) => {
  console.log(event.pageX);
  console.log(event.pageY);
});

// coordinates clientX and clientY
// shows coordinates relative to the browser window

window.addEventListener("click", (event) => {
  console.log(event.pageX);
  console.log(event.pageY);
});

// window.scrollBy(offsetX, offsetY) - scroll the page relative to its current position by offsetX, offsetY pixels
// html.addEventListener('click', scrollWindow);

function scrollWindow () {
  window.scrollBy(0, 50);
}

// window.scrollTo(pageX, pageY) - scroll the page to the pointed coordinate
html.addEventListener('click', scrollWindowTo);

function scrollWindowTo () {
  window.scrollTo(0, 500);
}

// Method scrollTo() - as an object with options. Does not work in safari browser

const scrollButton = document.querySelector("#scroll");
scrollButton.addEventListener("click", scrollToOptions);

function scrollToOptions() {
  window.scrollTo({
    left: 0,
    top: 1000,
    behavior: "smooth", // smooth, instant, auto
  });
}

// elements metrics

// offsetParent and parentElement
console.log(metrics.offsetParent); // Shows body
console.log(metrics.parentElement); // Shows body
console.log(metricsText.offsetParent); //  Shows div class="metrics"
console.log(metricsText.parentElement); // Shows div class="metrics"
console.log(metricsTextSpan.offsetParent); //  Shows div class="metrics"
console.log(metricsTextSpan.parentElement); // Shows p class="metrics__text"


// clientHeight = height of the visible content part within(inside) the block + padding(minus border and scroll)
console.log(metrics.clientHeight);
console.log(html.clientHeight);


//  clientWidth = width of the visible content part within(inside) the block + padding(minus border and scroll)
console.log(metrics.clientWidth);
console.log(html.clientWidth);

// scrollTop - shifting content up relative to the parent block
console.log(metrics.scrollTop);
console.log(html.scrollTop);


// scrollLeft - shifting content left relative to the parent block
console.log(metrics.scrollLeft);
console.log(html.scrollLeft);


// scrollHeight - full height of the content
console.log(metrics.scrollHeight);
console.log(html.scrollHeight);


// scrollWidth - full Width of the content
console.log(metrics.scrollWidth);
console.log(html.scrollWidth);

// example with setInterval

setInterval(() => {
  console.log(metrics.scrollTop,metrics.scrollLeft,metrics.scrollHeight,metrics.scrollWidth);
  
}, 2000);

// changing of scrollTop and scrollLeft

metrics.addEventListener('click', changePosition);
// html.addEventListener('click', changePosition);

function changePosition () {
  this.scrollTop += 20; // adds 20 px to the current position
  this.scrollLeft += 20; // adds 20 px to the current position
}

// offsetTop and offsetLeft - element's distance from the parent
// If parent element has position relative in css -  offsetTop and offsetLeft will be from the parent
// If parent element has position static in css -  offsetTop and offsetLeft will be from the body

// offsetTop - contains the coordinate of the block relative to the top of the html document (body)
console.log(metrics.offsetTop);

// offsetLeft - contains the coordinate of the block relative to the left of html document (body)
console.log(metrics.offsetLeft);

// offsetWidth - width of the element including all paddings(full width) = width in CSS styles
console.log(metrics.offsetWidth);

// offsetHeight - height of the element including all paddings(full height) = height in CSS styles
console.log(metrics.offsetHeight);


// clientTop - offset within the block from the top edge. Equal to border width
console.log(metrics.clientTop);

// clientLeft - offset within the block from the left edge. Equal to border width
console.log(metrics.clientLeft);

// Method getBoundingClientRect() - gets parameters width,height,left,top,right,bottom of the pointed element relative to the browser window

console.log(metrics.getBoundingClientRect());
console.log(metrics.getBoundingClientRect().left);
console.log(metrics.getBoundingClientRect().top);

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

// 1 - table.rows - '<tr></tr>' Collection

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
// 6 - tr.cells - '<th></th>' and '<td></td>' Collection

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

// Object Image()
// how to change src at any image in html
const img = new Image();
img.srs = "images/team-1.jpg";

const image1 = document.querySelector("#image1");
image1.src = img.srs;
console.log(image1.width);
console.log(image1.height);
console.log(image1.src);

//  slider
const slider = document.querySelector(".slider");
const sliderTrack = document.querySelector(".slider__track");
const nextBtn = document.querySelector(".next-button");
const prevBtn = document.querySelector(".prev-button");
const imagesBox = document.querySelectorAll(".slider__img-box");
const images = document.querySelectorAll(".slider__img");

let count = 0;

nextBtn.addEventListener("click", (event) => {
  count++;
  if (count >= imagesBox.length) {
    count--;
  } else {
    imagesBox.forEach((item) => {
      item.style.transform += `translateX(-100%)`;
    });
    //  console.log( event.target);
    //   console.log( event.currentTarget);
  }
  images[count].classList.add("active");
  images[count - 1].classList.remove("active");
});

prevBtn.addEventListener("click", (event) => {
  count--;
  if (count < 0) {
    count = 0;
  } else {
    imagesBox.forEach((item) => {
      item.style.transform += `translateX(100%)`;
    });
    // console.log( event.target);
    //  console.log( event.currentTarget);
    images[count].classList.add("active");
    images[count + 1].classList.remove("active");
  }
});
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

const elementDiv = document.createElement("div");
elementDiv.className = "new-div";
elementDiv.innerHTML = '<div class="inner">I am an inner</div>';
document.querySelector(".wrapper").append(elementDiv);
console.log(elementDiv);
console.log(elementDiv.querySelector(".inner"));
