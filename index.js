const inpt = document.querySelector('.todoInput');
// const inptValue = document.querySelector('.todoInput').value;
const ulList = document.querySelector('.listItems');
const date = document.querySelector('#heading-date');
const day = document.querySelector('#subheading-day');

(function () {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  Date.prototype.getMonthName = function () {
    return months[this.getMonth()];
  };
  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };
})();

const now = new Date();

day.textContent = now.getDayName();
date.textContent = `${now.getMonthName()}, ${now.getDate()}, ${now.getFullYear()}`;

const list = function () {
  const todoItem = document.createElement('li');
  todoItem.textContent = inpt.value;
  // ulList.classList.add('undone');
  // todoItem.classList.add('undone');
  ulList.appendChild(todoItem);
  ulList.classList.add('undone');
  inpt.value = '';
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

const handleList = function (e) {
  const targetEvent = e.target;
  // console.log('you prssed togle');
  console.log(e.target);
  console.log(e.currentTarget);

  targetEvent.classList.toggle('done');
};

inpt.addEventListener('keypress', handleEvent);
ulList.addEventListener('click', handleList);
window.onload = () => {
  inpt.focus();
};
