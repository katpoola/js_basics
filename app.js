/* --- events --- */
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const list = document.querySelector('ul');
const clearBtn = document.querySelector('#clear');

// events
form.addEventListener('submit', addTask);
list.addEventListener('click', delTask);
clearBtn.addEventListener('click', delAll);


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