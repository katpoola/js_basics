/* --- events --- */
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// submit btn
form.addEventListener('submit', addTask);

// adding task
function addTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');
	const link = document.createElement('a');
	
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');

	li.appendChild(link);
	list.appendChild(li);

	taskInput.value = '';
	e.preventDefault();
};
