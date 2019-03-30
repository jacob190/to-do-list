const tasksListArr = [];

const form = document.querySelector('.list-form');
const taskInput = document.querySelector('.list-form__input');
const addTaskBtn = document.querySelector('.list-form__btn');
const searchTaskInput = document.querySelector('.list-form__search');
const tasksList = document.querySelector('.tasks-list');
const searchInput = document.querySelector('.list-form__search')


const renderTasksList = (arr) => {
    tasksList.textContent = "";
    arr.forEach((arrElement, keyIndex) => {
        arrElement.dataset.key = keyIndex;
        tasksList.appendChild(arrElement);
    })
}

const deleteTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key
    tasksListArr.splice(index, 1)
    renderTasksList(tasksListArr);
}


const addTask = (e) => {
    e.preventDefault();

    const taskTitle = taskInput.value;
    if (taskTitle === "") return;

    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = taskTitle + ' <button>x</button>';
    tasksListArr.push(task)
    renderTasksList(tasksListArr);

    tasksList.appendChild(task);
    taskInput.value = "";

    task.querySelector('button').addEventListener('click', deleteTask);

}

const searchTask = (e) => {
    const searchTxt = e.target.value.toLowerCase();
    const filteredTasksListArr = tasksListArr.filter(task => task.textContent.toLowerCase().includes(searchTxt));
    renderTasksList(filteredTasksListArr);
}


form.addEventListener('submit', addTask);
searchInput.addEventListener('keyup', searchTask);