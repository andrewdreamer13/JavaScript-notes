//Drag and drop

// draggable="true" - at first we must add 'draggable="true"' at html element
// item.draggable = true - set argument draggable

// dragstart - event for the draggable element
// drag -      event for the draggable element
// dragend -   event for the draggable element

// dragenter - event for the element in which we put draggable element
// dragleave - event for the element in which we put draggable element
// dragover -  event for the element in which we put draggable element
// drop -      event for the element in which we put draggable element

// touchstart
// touchend
// touchcancel
// touchmove
// touchenter
// touchleave

// event.dataTransfer.setData('id', event.target.id);
// event.dataTransfer.getData('id');
// event.dataTransfer.clearData('id', event.target.id);
// instad of dataTransfer we can use variable in global scope



// first example - drag img from box to box

const section1 = document.querySelector('#section1');
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const img1 = document.querySelector('#img1');

box2.addEventListener('dragover', allowDrop);
box1.addEventListener('dragover', allowDrop);
section1.addEventListener('dragover', allowDrop);

box2.addEventListener('drop', drop);
box1.addEventListener('drop', drop);
section1.addEventListener('drop', drop);

box2.addEventListener('dragleave', dragLeave);
box1.addEventListener('dragleave', dragLeave);

img1.addEventListener('dragstart', dragStart);
img1.addEventListener('dragend', dragEnd);

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  let itemId = event.dataTransfer.getData('id');
  event.target.append(document.querySelector(`#${itemId}`));
  console.log(itemId)
}

function dragLeave(event) {
  event.target.style.backgroundColor = '#1a1818'
}

function dragStart(event) {
  event.dataTransfer.setData('id', event.target.id);
  setTimeout(() => {
    event.target.classList.add('hide');
  }, 0);
}

function dragEnd(event) {
  event.target.classList.remove('hide');
}

// example with variable in the global scope insted of dataTransfer

const dragItems = document.querySelectorAll('.dragItem');
const dropZones = document.querySelectorAll('.dropZone');
let draggedItem = null; // variable instad of dataTransfer

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragstart', handlerDragStart);
  dragItem.addEventListener('dragend', handlerDragEnd);
  // dragItem.addEventListener('drag', handlerDrag);
})

function handlerDragStart(event) {
  draggedItem = this;
}

function handlerDragEnd(event) {
  draggedItem = null;
}

function handlerDrag(event) {
  console.log('drag')
}


dropZones.forEach((dropZone) => {
  dropZone.addEventListener('dragenter', handlerDragEnter);
  dropZone.addEventListener('dragleave', handlerDragLeave);
  dropZone.addEventListener('dragover', handlerDragOver);
  dropZone.addEventListener('drop', handlerDrop);
}) 

function handlerDragEnter(event) {
  console.log('dragenter');
}

function handlerDragLeave(event) {
    console.log('dragleave');
}

function handlerDragOver(event) {
  event.preventDefault();
}

function handlerDrop(event) {
 this.append(draggedItem);
}

// second example - dragging elements with querySelectorAll

// const dragItems = document.querySelectorAll('.dragItem');
// const dropZones = document.querySelectorAll('.dropZone');

dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragstart', handlerDragStart);
  dragItem.addEventListener('dragend', handlerDragEnd);
  // dragItem.addEventListener('drag', handlerDrag);
})

function handlerDragStart(event) {
  event.dataTransfer.setData('dragItem', this.dataset.item);
}

function handlerDragEnd(event) {
  console.log('dragend', this)
}

function handlerDrag(event) {
  console.log('drag')
}

dropZones.forEach((dropZone) => {
  dropZone.addEventListener('dragenter', handlerDragEnter);
  dropZone.addEventListener('dragleave', handlerDragLeave);
  dropZone.addEventListener('dragover', handlerDragOver);
  dropZone.addEventListener('drop', handlerDrop);
}) 

function handlerDragEnter(event) {
  console.log('dragenter');
  
}

function handlerDragLeave(event) {
    console.log('dragleave');
    
}

function handlerDragOver(event) {
  event.preventDefault();
  console.log('dragover');
  
}

function handlerDrop(event) {
 const itemData = event.dataTransfer.getData('dragItem');
 const dragItem = document.querySelector(`[data-item="${itemData}"]`);
 this.append(dragItem);

//  const cloneItem = dragItem.cloneNode(true);
//  this.append(cloneItem);
}

// third example - drag img from box to box

function dragList() {

  const list = document.querySelector('.lists__list');
  const listBoxes = document.querySelectorAll('.lists__box');

  list.addEventListener('dragstart', dragStart);
  list.addEventListener('dragend', dragEnd)
  listBoxes.forEach((box) => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop)
  })

  function dragStart(e) {
    e.target.classList.add('hovered');
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }

  function dragEnd(e) {
    e.target.classList.remove('hovered', 'hide');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.target.classList.add('overed');
  }

  function dragLeave(e) {
    e.target.classList.remove('overed');
  }

  function drop(e) {
    e.target.append(list);
    e.target.classList.remove('overed');
  }

}
dragList();

// third example - drag item inside container

function dragItem() {

  const item = document.querySelector('#item1');
  const field = document.querySelector('#field1');
  console.log(field.getBoundingClientRect())
  console.log(field)

  item.draggable = true; // set argument draggable. Can be set in HTML

  let coordX; // variable for corect mouse position inside item
  let coordY; // variable for corect mouse position inside item
  let touchX = null; // variable for corect touch position inside item
  let touchY = null; // variable for corect touch position inside item


  item.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/html', 'dragstart');
    setTimeout(() => {
      event.target.classList.add('hide');
    }, 0);
    coordX = event.offsetX;
    coordY = event.offsetY;
  })


  item.addEventListener('dragend', (event) => {
    event.target.classList.remove('hide');
    item.style.position = 'absolute';
    item.style.top = (event.pageY - coordY) + 'px';
    item.style.left = (event.pageX - coordX) + 'px';
  })

  // functions for mobile

  item.addEventListener('touchstart', (event) => {
    document.body.classList.add('no-scroll');
    // let touch = event.targetTouches[0];
    // touchY = parseInt(`${touch.pageY - item.getBoundingClientRect().top}px`);
    // touchX = parseInt(`${touch.pageX - item.getBoundingClientRect().left}px`);
    // console.log(touchX, touchY)
  })

  item.addEventListener('touchmove', (event) => {
    let touch = event.targetTouches[0];
    item.style.position = 'absolute';
    item.style.top = `${touch.pageY - item.offsetHeight / 2}px`;
    item.style.left = `${touch.pageX - item.offsetWidth / 2}px`;

    if (item.getBoundingClientRect().top <= field.getBoundingClientRect().top) {
      item.style.top = field.getBoundingClientRect().top + 'px';
    }
  })

  item.addEventListener('touchend', (event) => {
    document.body.classList.remove('no-scroll');
  })


}
dragItem();


// fourth example - drag color to the correct box

moveColors();

function moveColors() {
  const colorSection = document.querySelector('.colors');
  const colorBox = document.querySelector('.colors__box');
  const colors = document.querySelectorAll('.colors__box-item');
  const colorReceivers = document.querySelectorAll('.colors__receiver-item');

  colors.forEach((color) => {
    color.style.backgroundColor = color.getAttribute('data-id');
    color.addEventListener('dragstart', dragStart);
    color.addEventListener('dragend', dragEnd);
    color.addEventListener('touchstart', touchDragStart);
    color.addEventListener('touchmove', touchDragMove);
    color.addEventListener('touchend', touchDragEnd);


  })

  colorReceivers.forEach((receiver) => {
    receiver.addEventListener('dragover', dragOver);
    receiver.addEventListener('dragenter', dragEnter);
    receiver.addEventListener('dragleave', dragLeave);
    receiver.addEventListener('drop', drop);

  })


  function dragStart(e) {
    e.dataTransfer.setData('data-id', e.target.dataset.id);
    e.target.classList.add('hovered');
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }

  function dragEnd(e) {
    e.target.classList.remove('hovered', 'hide');

  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.target.style.backgroundColor = e.target.getAttribute('data-id');
  }

  function dragLeave(e) {
    e.target.style.backgroundColor = 'transparent';
  }

  function drop(e) {
    let draggableElemData = e.dataTransfer.getData('data-id');
    let dropableElemData = e.target.getAttribute('data-id');
    e.target.style.backgroundColor = 'transparent';
    if (draggableElemData === dropableElemData) {
      e.target.prepend(document.querySelector(`[data-id='${ draggableElemData}']`));
      e.target.children[0].removeAttribute('draggable');
      e.target.children[0].style.cursor = 'auto';
    }
  }


  // functions for mobile

  let startPositionX;
  let startPositionY;
  let offsetTouchX = null;
  let offsetTouchY = null;

  let dropZone;
  let touch;

  function touchDragStart(e) {
    e.preventDefault();
    document.body.classList.add('no-scroll');

    // let touch = e.targetTouches[0];
    // offsetTouchX = touch.pageX - e.target.getBoundingClientRect().left;
    // offsetTouchY = touch.pageY - e.target.getBoundingClientRect().top;

    startPositionX = e.target.getBoundingClientRect().left;
    startPositionY = e.target.getBoundingClientRect().top;
    // console.log(offsetTouchX, offsetTouchY)
    console.log(startPositionX, startPositionY);

    //  startPositionX = parseInt(`${touch.pageX - e.target.getBoundingClientRect().left}px`) ;
    //  startPositionY = parseInt(`${touch.pageY - e.target.getBoundingClientRect().top}px`);
  }

  function touchDragMove(e) {
    touch = e.targetTouches[0];
    e.target.style.position = 'absolute';
    e.target.style.top = `${touch.pageY - e.target.offsetHeight / 2}px`;
    e.target.style.left = `${touch.pageX - e.target.offsetWidth / 2}px`;

  }


  function touchDragEnd(e) {
    e.preventDefault();
    document.body.classList.remove('no-scroll');
    //e.target.style.position = 'static';

    let dragElem = e.target;
    let dragElemData = dragElem.getAttribute('data-id');

    //console.log( dragElem);
    //  console.log( dragElemData);
    //console.log(dragElemCoord);

    colorReceivers.forEach((receiver) => {
      // receiver.getAttribute('data-id');

      if (receiver.getAttribute('data-id') === dragElem.getAttribute('data-id') && dragElem.getBoundingClientRect().bottom >= receiver.getBoundingClientRect().top && dragElem.getBoundingClientRect().left >= receiver.getBoundingClientRect().left && dragElem.getBoundingClientRect().right <= receiver.getBoundingClientRect().right) {
        dragElem.style.position = 'static';
        dragElem.style.pointerEvents = 'none';
        receiver.prepend(document.querySelector(`[data-id='${ dragElemData}']`));
        receiver.style.backgroundColor = '';
       }// else {
      //   receiver.style.backgroundColor = 'red';

      // }
    });


  }

}



// fifth example - game with flags

function putFlags() {

  const dragBox = document.querySelector('.flags__draggable-box');
  const dropBox = document.querySelector('.flags__drop-box');
  const controltBox = document.querySelector('.flags__control-box');
  const resalt = document.querySelector('#resalt');
  const startBtn = document.querySelector('#start-btn');
  let draggableObjects;
  let dropPoints;
  const data = ['italy', 'ukraine', 'germany', 'poland', 'france'];

  let deviceType = '';
  let initialX = 0;
  let initialY = 0;
  let currentElement = '';
  let moveElement = false;

  // detected touch device

  const isTouchDevice = () => {
    try {
      document.createEvent('TouchEvent');
      deviceType = 'touch';
      return true;
    } catch (e) {
      deviceType = 'mouse';
      return false;
    }
  };

  // random value from array

  const randomValueGenerator = () => {
    return data[Math.floor(Math.random() * data.length)]
  }
  for (let i = 0; i <= data.length; i++) {
    console.log(randomValueGenerator())
  }



  // win game display

  const stopGame = () => {
    controltBox.classList.remove('hide');
    startBtn.classList.remove('hide');
  }


  // drag and drop functions

  function dragStart(e) {
    if (isTouchDevice()) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
      moveElement = true; // start movement for touch
      currentElement = e.target;
    } else {
      e.dataTransfer.setData('text', e.target.id);
    }
  }

  // events fired on the drop target

  function dragOver(e) {
    e.preventDefault();
  }

  // for touchscreen movements









}
putFlags();

// const numbers = [1,2,3,4,5,6,7,8,9];

// const randomValueGenerator = () => {
//   return numbers[Math.floor(Math.random() * numbers.length)]
// }
// for (let i = 0; i < numbers.length; i++) {
//   if(i + 1 === i) {
//    continue
//   }else {
//     console.log(randomValueGenerator())
//   }

//}