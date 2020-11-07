const inpt = document.querySelector('.todoInput');
const inptValue = document.querySelector('.todoInput').value;
const listItems = document.querySelector('.listItems');

const list = function () {
  const todoList = document.createElement('ul');

  const todoItem = document.createElement('li');

  todoItem.textContent = inpt.value;

  todoList.appendChild(todoItem);
  listItems.appendChild(todoList);
  //   document.body.appendChild(todoList);
};

const handleEvent = function (e) {
  // update the console log when enter key is pressed!
  if (e.keyCode === 13) {
    console.log('pressed!');
    console.log(inpt.value);
    list();
  }
};

// btn.addEventListener('click', handleEvent);
// inpt.addEventListener('input', handleEvent);

inpt.addEventListener('keypress', handleEvent);
