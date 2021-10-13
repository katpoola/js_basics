/* --- events --- */
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const list = document.querySelector('ul');
const clearBtn = document.querySelector('#clear');
const taskFilter = document.querySelector('#filter');

// events
form.addEventListener('submit', addTask);
list.addEventListener('click', delTask);
clearBtn.addEventListener('click', delAll);
taskFilter.addEventListener('keyup', filterTasks);

// page reload event
document.addEventListener('DOMContentLoaded', getFromLS());

// adding task
function addTask(e) {
	const li = document.createElement('li');
	const link = document.createElement('a');
	
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');

	li.appendChild(link);
	list.appendChild(li);

	addTaskToLS(taskInput.value);

	taskInput.value = '';
	e.preventDefault();
};

// deleting task
function delTask(e) {
	if (e.target.textContent == 'X') {
		if (confirm('Do you want to delete this task?')) {
			e.target.parentElement.remove();
			delTaskFromLS(e.target.parentElement.firstChild.textContent);
		};
	};
};

// deleting all
function delAll() {
	if (confirm('Do you want to delete all tasks?')) {
		while (list.firstChild) {
			list.removeChild(list.firstChild);
		};
	};
	localStorage.clear();
};

// add task to local storage
function addTaskToLS(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	};
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

// delete task from local storage
function delTaskFromLS(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	};
	tasks.forEach(function(tasksElement, tasksIndex) {
		if (tasksElement === task) {
			tasks.splice(tasksIndex, 1);
		};
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

// get tasks from local storage
function getFromLS(e) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	};
	tasks.forEach(function(tasksElement) {
		const li = document.createElement('li');
		const link = document.createElement('a');
	
		li.className = 'collection-item';
		li.appendChild(document.createTextNode(tasksElement));

	
		link.className = 'secondary-content';
		link.appendChild(document.createTextNode('X'));
		link.setAttribute('href', '#');

		li.appendChild(link);
		list.appendChild(li);
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

// filter tasks
function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	const tasks = document.querySelectorAll('li');
	tasks.forEach(function(li) {
		const task = li.firstChild.textContent.toLowerCase();
		if (task.indexOf(text) != -1) {
			li.style.display = 'block';
		} else {
			li.style.display = 'none';
		}
	});
};