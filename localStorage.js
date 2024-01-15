// localStorage

// localStorage.setItem('key' ,'value');
// localStorage.getItem('key');
// localStorage.removeItem('key');
// localStorage.clear();
// localStorage.length


// Changing and saving background color 

const greenBtn = document.querySelector('#green');
const redBtn = document.querySelector('#red');

window.addEventListener('load', () => {

  if (localStorage.getItem('bgcolor') !== null) {
    let color = localStorage.getItem('bgcolor');
    document.body.style.backgroundColor = color;
  }

})

greenBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#49f03d';
  localStorage.setItem('bgcolor', '#49f03d');
})

redBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#ec3a3a';
  localStorage.setItem('bgcolor', '#ec3a3a');
})


// Saving and changing arrays in localStorage

const users = ['user1', 'user2', 'user3'];

localStorage.setItem('users', JSON.stringify(users));
let usersFromStorage = JSON.parse(localStorage.getItem('users'));
console.log(usersFromStorage);

users.push('user4')
localStorage.setItem('users', JSON.stringify(users));
usersFromStorage = JSON.parse(localStorage.getItem('users'));
console.log(usersFromStorage);

// Saving and changing arrays in localStorage with functions


// Saving and changing objects in localStorage

const members = {
  'irina': 'woman',
  'andrew': 'man',
  'nazar': 'man',
  'sveta': 'woman',
}
console.log(members)

localStorage.setItem('members', JSON.stringify(members));
let membersFromStorage = JSON.parse(localStorage.getItem('members'));
console.log(membersFromStorage);

members.milana = 'woman';
console.log(members)
localStorage.setItem('members', JSON.stringify(members));
membersFromStorage = JSON.parse(localStorage.getItem('members'));
console.log(membersFromStorage);

// Saving data from form

let formData = {};
const userForm = document.querySelector('.user-data');
const submitBtn = document.querySelector('.user-data__btn');

userForm.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('userData', JSON.stringify(formData));
})

if(localStorage.getItem('userData')) {

  let formDataFromStorage = JSON.parse(localStorage.getItem('userData'));

  for(let key in formDataFromStorage) {
    if( userForm.elements[key].type === 'checkbox' && formDataFromStorage[key] === 'on' ) {
      userForm.elements[key].checked = true;
    } else {
      userForm.elements[key].value =  formDataFromStorage[key];
    }
  }
}

submitBtn.addEventListener('click', (event) => {
  // event.preventDefault();
   localStorage.removeItem('userData');
 
})


// Saving data from cart
