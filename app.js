/* --- deklareerimine --- */

function greeting(firstName = 'Kadi', lastName = 'Tamm') {
	/*
	if (typeof firstName === 'undefined') {
		firstName = 'Sussy';
	}
	if (typeof lastName === 'undefined') {
		lastName = 'Baka';
	}
	*/
	return 'Tere, ' + firstName + ' ' + lastName;
}
// kasutamine
greet = greeting('Katriin', 'Poolakese')
console.log(greet);

// funktsioon defineeritud nagu const
const square = function(number = 3) {
	return Math.pow(number, 2);
};
console.log(square());

// funktsioon, mis kohe töötab koodis
(function() {
	console.log('Function work');
})();

(function(name) {
	console.log('Tere, ' + name);
})('Kata');

// funktsioon objekti atribuudina
const todoList = {
	add: function(task) {
		console.log(task + ' is added');
	},
	edit: function(oldTask, newTask) {
		console.log(`${oldTask} is chaged to ${newTask}`);
	},
	delete: function(task) {
		console.log(task + ' is deleted');
	}
};

todoList.add('Study JS');
todoList.edit('Study JS', 'Study Typescript')
todoList.delete('Study JS')
