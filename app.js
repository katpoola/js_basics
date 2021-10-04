/* --- event elements --- */

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// keyboard events

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);

// focus & blur events

// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);

// cut & paste events

//taskInput.addEventListener('cut', runEvent);
//taskInput.addEventListener('paste', runEvent);

// input event
taskInput.addEventListener('input', runEvent);



function runEvent(e) {
	console.log(`Event is ${e.type}`);
	console.log(e.target.value);
};

