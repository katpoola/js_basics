/* --- tingimuslaused --- */

/*
if (tingimus) {
	// tingimus if puhul
} else {
	// tegevused else puhul
}
*/

const id = 100

// võrdub   				  == 
// võrdub + tüübikontroll     ===
// ei võrdu   				  !=
// ei võrdu + tüübikontroll   !==

if(id !== 100) {
	console.log('OK');
} else {
	console.log('NOT OK!');
};

let testId;
if (typeof testId !== 'undefined') {
	console.log('id is ok')
} else {
	console.log('id is not exist')
};


// < ja >

if (id > 100) {
	console.log('id is > 100')
} else {
	console.log('id is =< 100')
};


// if - else if - else

let color = 'green';

if (color === 'red') {
	console.log('Stop!');
} else if (color === 'yellow') {
	console.log('Attention!');
} else if (color === 'green') {
	console.log('Go!');
} else {
		console.log('Color is not allowed!')
};


// and - &&

let name = 'Kadi';
let age = 70;

if (age > 0 && age <= 12) {
	console.log(`${name} on laps`);
} else if (age > 12 && age < 18) {
	console.log(`${name} on noor`);
} else {
	console.log(`${name} on täiskasvanud`);
};


// or - ||

if (age < 18 || age > 65) {
	console.log(`${name} ei saa registreerida!`);
} else {
	console.log(`${name} saab registreerida.`);
};


// ? - ternary operator

console.log(id === 100 ? 'OK' : 'NOT OK');

if (id === 10) 
	console.log('OK');
else 
	console.log('NOT OK');