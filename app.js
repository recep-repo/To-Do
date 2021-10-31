const dateElement = document.getElementById("date");
const addItem = document.querySelector(".add-item")
const list = document.querySelector(".list");
const input = document.getElementById("input");
const addToDo = document.getElementById('add-button')

const options = {weekday:"long", month:"short", day:"numeric"};
const today = new Date()
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

const addToDoList = todo => {
    const addLi = `<li class="item">
    <i class="far fa-check-circle complete"></i>
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML += addLi;

};

addItem.addEventListener('submit', e => {
  e.preventDefault();
  const todo = input.value.trim();
  if (todo.length) {
    addToDoList(todo);
    addItem.reset();
  }
});

addToDo.addEventListener('click', e => {
  e.preventDefault();
  const todo = input.value.trim();
  if (todo.length) {
    addToDoList(todo);
    addItem.reset();
  }
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

list.addEventListener('click', e => {
  if (e.target.classList.contains("complete")) {
    if ((e.target.parentElement).style.textDecoration != 'line-through')
      (e.target.parentElement).style.textDecoration = 'line-through';
    else (e.target.parentElement).style.textDecoration = 'none';
  }
});

 
  





