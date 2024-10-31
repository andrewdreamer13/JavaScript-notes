// AJAX - Asynchronous JavaScript And XML
// AJAX - can get data from server without page reload
// server for trainings -' json-server' in terminal

// Object XMLHttpRequest()

// Properties of Object XMLHttpRequest()

// readyState :
// 0 = method open() is not calling yet
// 1 =  method open() was called
// 2 = headers were got
// 3 = answer's body is getting
// 4 = answer's getting is finished

// onreadystatechange:
// contains event handler witch will be calling with readyState

// status:
// status code HTTP from server (200, 404, 403,500)

// statusText
// HTTP response status message (string) for example 'OK' for 200 or 'not found' for 404

// response (responseText in legacy code):
// data from server in text format

// responseType ;
// expected response type.For example 'text' or 'json'

// responseXML :
//  data from server in XML format

// Methods of Object XMLHttpRequest()

// open() :
// set up a request to the server

// send() :
// open a connection and send a request to the server

// abort() :
// cancel current request

//setRequestHeader(name, value) :
// set up a request header   xhr.setRequestHeader('Content-Type', 'application/json');

//getResponseHeader(name) :
// return parameter's meaning as a string   xhr.getResponseHeader('Content-Type')

// getAllResponseHeaders() :
// return all headers as a string


// http request methods ;

// http - HyperText Transfer Protocol 

// GET - gets information about a resource
// POST - creates a resource
// PUT - replaces the whole resource
// PATCH - edits resource
// DELETE - deletes the resource
// HEAD - gets only the http headers from the resource


// example

//  const myRequest = new XMLHttpRequest();
//   myRequest.open(Method,url) - method can be POST or GET. url can be name of folder in my project.For example index.php or mailer.php
//   myRequest.send([data]) - data only when POST with GET empty inside of brackets
//   myRequest.addEventListener('readystatechange', handlerFunc);// state of request
//   function handlerFunc() {
//     if(myRequest.readyState === 4 && myRequest.status === 200) {
//       console.log(myRequest.responseText);
//     }
//   };


// example how to create dynamic cards from server data
// method GET

function wrapGetRequest() {

  function req() {

    const people = document.querySelector('.people');
    let icon;

    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/people');
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function () { // insted of readystatechange we can write load
      if (request.readyState === 4 && request.status === 200) { //  if(request.status === 200)
        const data = JSON.parse(request.response);
        console.log(data);
        createCards(data); // call function  createCards with data as an argument
      } else {
        console.error('Error');
      }
    })
    console.log(this); // button
    this.remove();


    function createCards(response) { // creates cards and appends them into div people
      response.forEach((item) => {
        let card = document.createElement('div');
        card.classList.add('card');
        if (item.sex === 'male') {
          icon = 'images/mars.png';
        } else {
          icon = 'images/female.png';
        }
        card.innerHTML = `
        <img src="${item.photo}" alt="photo">
        <div class="name">${item.name} ${item.surname}</div>
        <div class="sex">
          <img src="${icon}" alt="male">
        </div>
        <div class="age">${item.age}</div>
       `;
        people.append(card);
      })
    }
  }

  const button = document.querySelector('.people__button');
  button.addEventListener('click', req, {
    once: true
  });
}
wrapGetRequest();


function wrapPostRequest() {

  function req() {
    const user = {
      "name": "Elena",
      "surname": "Breed",
      "sex": "female",
      "age": 36,
      "id": 1313,
    }
    const userJson = JSON.stringify(user);

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/users'); // send data to the server
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    request.send(userJson);

    const request2 = new XMLHttpRequest();
    request2.open('GET', 'http://localhost:3000/users'); //  get data from the server
    request2.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    request2.send();

    request2.addEventListener('load', function () {
      if (request2.status === 200) {
        const data = JSON.parse(request2.response);
        console.log(data);

      } else {
        console.error('Error');
      }
    })
  }
  const button = document.querySelector('.users__button');
  button.addEventListener('click', req);
}
wrappPostRequest();


//----------------------------------------------------------------------

// Object FormData()
//let formData = new FormData([form]); in brackets name of form from witch we send data
// Sending request from form on site
// method POST
// format formData
// format JSON

function wrappSendFormData() {

  const form = document.querySelector('#post-form');
  const outBtn = document.querySelector('#out-btn');
  const changeBtn = document.querySelector('#change-btn');
  const outBlock = document.querySelector('.out-form');
  const deleteBtn = document.getElementsByClassName('out-form__delete-button');



  form.addEventListener('submit', sendFormData);
  outBtn.addEventListener('click', getFormData);
  changeBtn.addEventListener('click', changeUserData);

  function sendFormData(e) {
    e.preventDefault();
    const formData = new FormData(form)
    const values = Object.fromEntries(formData.entries());

    console.log(values)
    const userJson = JSON.stringify(values);

    const sendRequest = new XMLHttpRequest();
    sendRequest.open('POST', 'http://localhost:3000/users'); // send data from form to the server
    sendRequest.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    sendRequest.send(userJson);
  }

  function getFormData() {

    const getRequest = new XMLHttpRequest();
    getRequest.open('GET', 'http://localhost:3000/users'); //  get data from the server to the outblok
    getRequest.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    getRequest.send();

    getRequest.addEventListener('load', function (e) {
      e.preventDefault();
      if (getRequest.status === 200) {
        const data = JSON.parse(getRequest.response);

        //console.log(data);
        // data.forEach((user) => {
        //   console.log(user);
        // })

        createUser(data);
        deleteItem();

      } else {
        console.error('Error');
      }
    })

  }

  function createUser(response) {
    response.forEach((user) => {
      let userData = document.createElement('div');
      userData.classList.add('out-form__item');

      userData.innerHTML = `
      <ul>
      <li>Name:${user.name}</li>
      <li>Surname:${user.surname}</li>
      <li>Sex:${user.sex}</li>
      <li>Age:${user.age}</li>
      <li>Id:${user.id}</li>
      </ul> 
      <button class="out-form__delete-button" id="${user.id}">delete</button>
    `;
      outBlock.append(userData);
    })
  }

  function deleteItem() {

    const deleteBtnArr = Array.from(deleteBtn);
    deleteBtnArr.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const listItem = this.parentElement;
        listItem.remove();

        const sendRequest = new XMLHttpRequest();
        sendRequest.open('DELETE', `http://localhost:3000/users/${btn.id}`); // remove data from form to the server
        sendRequest.send();

        sendRequest.addEventListener('load', (e) => {
          e.preventDefault();
          if (sendRequest.status === 200) {
            console.log('server answered')
          } else {
            console.error('Error');
          }
        })
      })
    })

  }

  function changeUserData(e) {
    e.preventDefault();

    const formData = new FormData(form)
    const updateUser = Object.fromEntries(formData.entries());
    const updateUserJson = JSON.stringify(updateUser);


    const sendRequest = new XMLHttpRequest();
    sendRequest.open('PUT', `http://localhost:3000/users/${updateUser.id}`); // changes user's data on the server
    sendRequest.setRequestHeader('Content-type', 'application/json');
    sendRequest.send(updateUserJson);
    sendRequest.addEventListener('load', (e) => {
      e.preventDefault();
      if (sendRequest.status === 200) {
        console.log('server answered')
      } else {
        console.error('Error');
      }
    })
  }



};
wrappSendFormData();




// Fetch API

// fetch
// then
// async
// await
// throw
// catch
// json() - method which works with responses from server (response.json())
// promise
// axios - library for requests
// json placeholder - web site with fake API for testing and prototyping.
// https://gorest.co.in/ - web site with fake API for testing and prototyping.


// Promise

// resolve - function as parameter of object Promise.Return successfull result
// reject -  function as parameter of object Promise.Return rejected result
// then() - method of object Promise for positive result. As  a parameter gets  response.json()  (.then(value))
// catch() - method of object Promise for negative result
// Promise.all([]) - method of object Promise.Waits when the latest request will be done
// Promise.race([]) - Waits when the first request will be done
// states :
// pending - waiting for the answer
// fulfilled - successfull answer
// rejected - answer with mistake

const newPromise = new Promise((resolve, reject) => {
  fetch('http://localhost:3000/users/1239')
    .then((responseData) => { // responseData contains answer from server
      if (responseData.ok) {
        console.log('The data is got');
        resolve(responseData.json()); // responseData.json() contains answer from server in json format
      } else {
        reject('Something wrong'); // function reject work in catch()  'Something wrong' = error
      }
    })
});

newPromise.then((data) => { // parameter data =  responseData.json()
    console.log(data);
    return data // returns data to be able to get it in nextData in next .then()
  })
  .then((nextData) => { // parameter nextData =  data = responseData.json()
    console.log(nextData)
  })
  .catch((error) => {
    console.log(error);
  })

//----------------------------

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 300);
});

promise1.then((value) => {
    console.log(value) // Expected output: "hello"
  })
  .catch(console.error); // Expected output: Error

console.log(promise1);
// Expected output: [object Promise]

// second example with promise

const promise2 = new Promise(function (resolve, reject) {
  fetch('http://localhost:3000/users/1984')
    .then((response) => {
      console.log(response);
      console.log(response.statusText);
      if (response.ok) {
        resolve(response.json())
      } else {
        reject(response)
      }
    })
    .catch((error) => {
      reject(error)
    })
});

promise2.then(successFunc, errorFunc);

function successFunc(data) {
  console.log(data);
  console.log('SUCCESS');
}

function errorFunc() {
  console.log(promise2);
  console.log('PROBLEMS')
}

// third example with promise  chain of then()

fetch('http://localhost:3000/users/1239')
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    fetch('http://localhost:3000/users/2007')
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
  })

// fourth example with promise 'promiseAll


const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    fetch('http://localhost:3000/users/1984')
      .then((response) => {
        resolve(response.json())
      })
  }, 3000);
});

const promise4 = new Promise(function (resolve, reject) {
  fetch('http://localhost:3000/users/2007')
    .then((response) => {
      resolve(response.json())
    })
});

Promise.all([promise3, promise4])
  .then((data) => {
    console.log(data)
  });


//  example with Promise get beer from server

const getBeer = new Promise(function (resolve, reject) {
  fetch('https://api.sampleapis.com/beers/ale')
    .then((response) => {
      if (response.ok) {
        resolve(response.json())
      } else {
        reject('<< CANNOT FIND BEER >>')
      }
    })
});
getBeer.then((beerList) => {
    console.log(beerList);
  })
  .catch((error) => {
    console.log(error)
  });


// Fetch

fetch('http://localhost:3000/users')
  .then((response) => { // response contains the answer from server
    return response.json() // response.json() contains the answer from server in json format
  })
  .then((data) => { // data = response.json()
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });

// fetch with POST request

const user = {
  "name": "Brenda",
  "surname": "Wilson",
  "sex": "female",
  "age": 26,
  "id": 1201
}

fetch('http://localhost:3000/users/1201', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
  })
  .then((response) => {
    return response
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });


fetch('http://localhost:3000/users/4567', {
  method: "DELETE", 
  headers: {
    "Content-Type": "application/json"
  }
})
.then((response) => {                
  return response            
})
.then((data) => {                   
  console.log(data)
})
.catch((error) => {
  console.log(error)
});

//-------------------

fetch('http://localhost:3000/users')
  .then((response) => {
    return response.json()
  })
  .then((user) => {
    console.log(user)
  })
  .catch((error) => {
    console.log(error)
  });


// async functions
// async function returns object Promise() and can use callback function then()

async function getUsers(url) { // Method 'GET'
  try {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users)
  } catch (error) {
    console.error(error)
  }

}
getUsers('http://localhost:3000/users');

// second example with Method 'GET'

async function getData(url) {
  const response = await fetch(url);
  return await response.json();
}

getData('http://localhost:3000/cards').then((cards) => {
  console.log(cards)
});

// third example with Method 'GET' and displaying users's list on the screen

async function getUsers() {
  const response = await fetch('https://gorest.co.in/public/v2/users');
  return response.json();
}

async function showUsers () {
 const users = await getUsers();
 const userList = document.querySelector('.users');
 users.forEach((user) => {
   userList.innerHTML += `
    <ol>
       <li>${user.name}</li>
       <li>${user.email}</li>
       <li>${user.gender}</li>
       <li>${user.status}</li>
     </ol>
   `
 })
}
showUsers();


// Another examples with promise, fetch, async await

// promise
// fetch
// async await
// rendering data from server

// promise
const newPromise = new Promise((resolve, reject) => {
  // resolve({name: 'Andrew', age: 47});
  reject('Something wrong');
})
// method 'then' has two callback functions. The first function is for resolve and the second one is for reject
// we can write just the first function(resolve) for the negative result we use method 'catch'
newPromise
//.then((value) => {console.log(value)}, (error) => {console.log(error)}) // then with two functions resolve and reject
 .then((value) => {console.log(value)}) // then with one function- resolve
 .then(() => null, (error) => {console.log(error)}) // then with null instead function for resolve and function for reject
 .catch((error) => {console.log(error + ' with promise')}); // catch contains reject function
console.log(newPromise);

// then chaining

const promise = new Promise((resolve, reject) => {
  resolve('Success promise');
  reject('Rejected promise');
})
promise
  .then((value) => value + ' with first then')
  // .then((value) => {throw new Error('Error in the second then')})
  .then((value) => value + ' with third then')
  .then((value) => console.log(value)) //' Success promise' 'with first then' 'with second then' 'with third then'
  .catch((error) => console.log(error)); // Error: Error in the second then


// example with with appending tag script to the head of the document

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script loading error ${src}`));
  
      document.head.append(script);
    });
  }

  // loadScript('js/audio.js');


 // fetch() - send request to the server

const getWine = fetch('https://api.sampleapis.com/wines/reds')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))

console.log(getWine)

 // GET - get data from server

const getBeer = fetch('https://api.sampleapis.com/beers/ale/18', {method: 'GET'})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))

console.log(getBeer)


 // POST - send data to server

 // example - 1
 const newBeer = {
  "price": "$15.49",
  "name": "Sierra Nevada Pale Ale",
  "rating": {
  "average": 4.266364643483868,
  "reviews": 414
  },
  "image": "https://www.totalwine.com/media/sys_master/twmmedia/h19/h43/11735160193054.png",
  "id": 181
 }

 fetch('https://api.sampleapis.com/beers/ale',
   {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"	
    },
      body: JSON.stringify(newBeer),
  })
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))

// example - 2
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify({
    userId: 1,
    title: "buy vegetables",
    completed: true
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"	
  }
})
.then(response => response.json())
.then(json => console.log(json))


 // PUT - full changing the existing file on server
 
 fetch('https://jsonplaceholder.typicode.com/todos/5', {
  method: 'PUT',
  body: JSON.stringify({
    userId: 1,
    id: 5,
    title: "updated resource",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"	
  }
})
.then(response => response.json())
.then(json => console.log(json))


// PATCH - partial data change in the existing file on server

fetch('https://jsonplaceholder.typicode.com/todos/2', {
  method: 'PATCH',
  body: JSON.stringify({
    title: "my custom title"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"	
  }
})
.then(response => response.json())
.then(json => console.log(json))

// DELETE - deletes item from server

fetch('https://jsonplaceholder.typicode.com/todos/3', {
  method: 'DELETE'
})

const getBeer1 = fetch('./beer.json', {method: 'GET'})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))

console.log(getBeer1)

fetch('./beer.json', {
  method: 'PUT',
  body: JSON.stringify({newBeer}),
  headers: {
    "Content-type": "application/json; charset=UTF-8"	
  }
})
.then(response => response.json())
.then(json => console.log(json))

// getting data from json file in project with GET
function getUser () {
  fetch('http://localhost:3000/users')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
}
getUser();

// adding data to the json file in the project with POST
const newUser1 = {
  "name": "Debora",
  "surname": "Smith",
  "sex": "female",
  "age": 45,
 }

 function addUser () {
  fetch('http://localhost:3000/users',
    {
     method: "POST",
     headers: {
       "Content-type": "application/json; charset=UTF-8"	
     },
       body: JSON.stringify(newUser1),
   })
 }

 const addBtn = document.querySelector('#people');

 addBtn.addEventListener('click', addUser)


 // removing data from the json file in the project with DELETE

 function delUser () {
  fetch('http://localhost:3000/users/1c2d', {
    method: 'DELETE'
  })
 }

 const removeBtn = document.querySelector('#remove');

 removeBtn.addEventListener('click', delUser)

 // replace data with PATCH

 function replaceData () {
  fetch('http://localhost:3000/users/921a', {
    method: 'PATCH',
    body: JSON.stringify({
      "age": 18
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"	
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
 }
replaceData()
 

// rendering data from json file or server
function getUserList () {
  const listContainer = document.querySelector('.users');
  fetch('http://localhost:3000/users')
  .then((response) => response.json())
  .then((data) => data)
  .then((data) => {
    data.forEach((item) => {
      listContainer.innerHTML += `
      <ul>
        <li>${item.name}</li>
        <li>${item.surname}</li>
        <li>${item.sex}</li>
        <li>${item.age}</li>
       </ul>
      `
    })
    
  })
  .catch((error) => console.log(error))
}
getUserList();

// rendering data from json file or server with async await
async function getUsers() {
  const response = await fetch('http://localhost:3000/users');
  return response.json();
}

async function showUsers () {
 const users = await getUsers();
 
 const userList = document.querySelector('.users');
 users.forEach((item) => {
   userList.innerHTML += `
    <ol>
        <li>${item.name}</li>
        <li>${item.surname}</li>
        <li>${item.sex}</li>
        <li>${item.age}</li>
     </ol>
   `
 })
}
showUsers();


 

