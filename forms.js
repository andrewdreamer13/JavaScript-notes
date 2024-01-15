// Content
// 1
// 2
// 3
// 4





// FORMS

// form has attribute 'novalidate' to prevent browser validation
// attribute 'action' 

//' document.forms' -  alive collection of all forms in HTML document

const allForms = document.forms;

console.log(allForms);
console.log(allForms[0]);
console.log(allForms[1]);

// array from document.forms
const forms = Array.from(document.forms);
console.log(forms)

// 'document.querySelectorAll' -  not alive collection of all forms in HTML document

const allForms2 = document.querySelectorAll('form');
console.log(allForms2);
console.log(allForms2[0]);
console.log(allForms2[1]);

document.querySelector('.registration').insertAdjacentHTML(
  'afterend',
  `<form class="form new__form" name="new" action="#">
  <h2 class="registration__title form-title">new form</h2>
  </form>`
);
console.log(allForms); // got third form
console.log(allForms2); // did not get third form

// getting form by its attribute 'name'

console.log(document.forms.request);
console.log(document.forms.registration);

//  Property 'elements'. How to get elements of form 

const requForm = document.forms.request;
console.log(requForm);
console.log(requForm.elements); // getting colection of elements
console.log(requForm.elements.phone); // getting element of form by its name
console.log(requForm.phone); // getting element of form by its name(without elements)

// getting radio buttons

const allRadios = requForm.elements.radio; // getting colection of radio buttons
console.log(allRadios);
console.log(allRadios[0]);

const lastRadio = allRadios[3];
lastRadio.style.display = 'block';

// How to get parent form of any element in form

console.log(allRadios[0].form);

// How to get value of inputs ('input.value' if input type text or number) 

console.log(requForm.elements.name.value); // shows value of attribute 'value'
requForm.elements.name.value = 'Milana'; // changes value of attribute 'value'

// How to get value of inputs ('input.checked' if input type checkbox or radio)

console.log(allRadios[0].value); // shows value of attribute 'value'
console.log(allRadios[2].value); // shows value of attribute 'value'
console.log(allRadios[0].checked); // shows if input checked or not
console.log(allRadios[3].checked); // shows if input checked or not
allRadios[3].checked = true; // how to change checked input radio
console.log(allRadios[3].checked); // shows if input checked or not


const allCheckBoxes = requForm.querySelectorAll('input[type="checkbox"');
console.log(allCheckBoxes);
console.log(allCheckBoxes[0].value); // shows value of attribute 'value'
console.log(allCheckBoxes[0].checked); // shows if input checked or not
console.log(allCheckBoxes[1].value); // shows value of attribute 'value'
console.log(allCheckBoxes[1].checked); // shows if input checked or not
console.log(allCheckBoxes[1].name); // shows name of input
allCheckBoxes[1].checked = true;  // how to change checked input checkbox

// input type file cannot be changed
console.log(requForm.elements.file);
requForm.elements.file = '';

// Select
// for the default option 'disabled selected' or 'selected hidden' attributes
const formSelect =  requForm.elements.cities;
console.log(formSelect);
console.log(formSelect.value); // shows value of selected option
console.log(formSelect.selectedIndex); // shows index of selected option
console.log(formSelect.options[formSelect.selectedIndex].textContent); // shows text of the selected option
const index = formSelect.selectedIndex;
console.log(formSelect.options[index].textContent);// another way to see the text in selected option
console.log(formSelect.options); // shows colection of options
console.log(formSelect[3]); // shows value of pointed value
console.log(formSelect[3].value); // shows value of pointed value
console.log(formSelect[3].text); // shows text of pointed value
formSelect.options[3].selected = true; // changes selected option with true
console.log(formSelect.value); // shows value of selected option
formSelect.selectedIndex = 1; //changes selected option with index 
console.log(formSelect.value); // shows value of selected option
formSelect.value = 'lviv'; // changes value of selected option
console.log(formSelect.value); // shows value of selected option

// adding new option in select object Option(text, value, defaultSelected, selected)

const newOption = new Option('Melitopol','melitopol', true, true); // creates new option in select
newOption.classList.add('form__option');
formSelect.append(newOption); // add new option to the end of select

// creates an array from selected options in multiple select
// do not forget to add 'multiple' attribute to the select in html and 'selected' attribute to the options
const selectedCities = Array.from(formSelect.options).filter((option) => option.selected).map((option) => option.value);
console.log(selectedCities);

// example with event change in the select

formSelect.addEventListener('change', function() {
  console.log(this.value); // shows the selected option's value
});

// creating a select with js from object

const cities = {
  '001': 'kharkiv',
  '002': 'kiyiv',
  '003': 'odesa',
  '004': 'poltava'
}

const selectCity = document.createElement('select');
selectCity.classList.add('form__select');
selectCity.setAttribute('name', 'bigCities');
selectCity.setAttribute('id', 'cityselect2');

for(let id in cities) {
  const option = document.createElement('option');
  option.value = id;
  option.textContent = cities[id];
}
document.querySelector('#userForm').append(selectCity);

//  creating a select with js from object with selected for option

const cities2 = [
  {'city': 'lviv', 'id': '87654'},
  {'city': 'Melitopol', 'id': '65437', 'selected': true},
  {'city': 'Kharkiv', 'id': '02437'},
  {'city': 'Vinitsa', 'id': '1325637'},
]

const selectCity2 = document.createElement('select');
selectCity2.classList.add('form__select');
selectCity2.setAttribute('name', 'bigCities');
selectCity2.setAttribute('id', 'cityselect2');

for(let i = 0; i < cities2.length; i++) {
  const option = document.createElement('option');
  option.value = cities2[i].id;
  option.textContent = cities2[i].city
  if(cities2[i].selected) {
    option.selected = true;
  }
  selectCity2.append(option)
}
document.querySelector('#userForm').append(selectCity2);


// Events in form  //' focus' ' blur' 

const enterName =  requForm.elements.name;
console.log(enterName);

enterName.addEventListener('focus', function() {
  enterName.classList.add('border')
})

enterName.addEventListener('blur', function() {
  enterName.classList.remove('border')
})

//Events  focusin  and focusout works like focus and blur , but can hoist 

requForm.addEventListener('focusin', function() {
  requForm.classList.add('border')
})

requForm.addEventListener('focusout', function() {
  requForm.classList.remove('border')
})

//  // tabindex="-1" makes an ordinary element be in focus(div,p,h1,span...)

const lorem = document.querySelector('.focused-text');

lorem.addEventListener('focus', function() {
  lorem.classList.add('border')
})

lorem.addEventListener('blur', function() {
  lorem.classList.remove('border')
})

// Methods' focus() ' and ' blur()'

enterName.focus();

setInterval(() => {
  enterName.blur(); 
}, 5000);

// activeElement

console.log(document.activeElement);

//Event 'change'

const requFormRadios = requForm.querySelectorAll('input[type="radio"]');
console.log(requFormRadios)

requFormRadios.forEach((radio,index) => {
  radio.addEventListener('change',() =>{
    console.log(`event change ${index} radio`)
  })
});

// Event 'input'

const enterPhone = requForm.elements.phone;
console.log(enterPhone);

enterPhone.addEventListener('input', () => {
  console.log(enterPhone.value);
  lorem.textContent = enterPhone.value;
});

// Events 'copy'  'paste' 'cut'

// Event 'submit'

requForm.addEventListener('submit', (event) => {
console.log('form is sending');
if(!enterPhone.value) {
  console.log('phone number is needed')
event.preventDefault();
}
})

// Method submit

requForm.addEventListener('blur', () => {
  requForm.submit()
})

// CreateObjectURL() URL's method to create way to file
  
const requestForm = document.querySelector('.request');
const requestFormFile = requForm.querySelector('.form__file');


requestFormFile.addEventListener('change', () => {
  let selectedFile = requestFormFile.files[0];
  let fileUrl = URL.createObjectURL(selectedFile);

  requestFormFile.closest('form').insertAdjacentHTML(
    'beforeend',
    `<div class="form-img-box">
    <img class="form-img" src="${fileUrl}">
    </div>
    `
  )
})

 // example with input password shows and hides password

 const password = document.querySelector('#password');
const check = document.querySelector('#check');
const label = document.querySelector('#label');

check.addEventListener('input', unpassword);

function unpassword() {
  if(check.checked) {
    password.type = 'text';
    label.style.background = '#e50d0d80'
  }else {
    password.type = 'password';
    label.style.background = 'rgba(0,0,0,0.5)'
  }
}


// formData - Object

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

  console.log(`My name is ${userDataObject.userName}. I am from ${userDataObject.cities}. I am ${userDataObject.userAge} old. I prefer to drink ${userDataObject.drinks}`)
}

// example with getting data from form with selectors

const form = document.querySelector('#userForm');

form.addEventListener('submit', getUserData);

function getUserData(e) {
  e.preventDefault();

  const userName = form.querySelector('[name="userName"]');
  const userAge = form.querySelector('[name="userAge"]');
  const userCity = form.querySelector('[name="cities"]');
  const userAdult = form.querySelector('[name="userAdult"]');
 
  const values = {
    userName: userName.value,
    userAge: userAge.value,
    userCity: userCity.value,
    userAdult: userAdult.checked
  }

  console.log(values)
}

// example with cycle 'for of'

const form1 = document.querySelector('#userForm');

form.addEventListener('submit', getUserData);

function getUserData(e) {
  e.preventDefault();

  const values = {};

  for(let field of form1) {
    const{name} = field;
    if(name) {
      const {type, checked,value} = field;
       values[name] = isCheckboxOrRadio(type) ? checked : value
    }
  }
 
console.log(values)

}

function isCheckboxOrRadio(type) {
  return ['checkbox','radio'].includes(type);
}