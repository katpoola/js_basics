/* --- massiivitöötlus --- */

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['õun', 'banaan', 'apelsin', 'virsik'];

const mix = [22, 'Tere', true, undefined, null, {a:1 ,b:2}, new Date()];

let val;


val = numbers.length; // massiivi pikkus
val = Array.isArray(numbers); // massiivi kontroll
val = numbers[3]

numbers[2] = 100 // asendamine

// lisamine
numbers.push(250); // taha
numbers.unshift(120); // ette

// maha võtmine
numbers.pop(); // tagant
numbers.shift(); // eest

// index
val = numbers.indexOf(100);

// lõikamine
numbers.splice(2, 1);

// ühendamine
val = numbers.concat(numbers2);

// sorteerimine
val = fruits.sort();
val = numbers.sort();  // ei tööta väga hästi

val = numbers.sort(function(x, y){
	return x - y;
	}); // väiksemast suuremaks
val = numbers.sort(function(x, y){
	return y - x;
	}); // suuremast väiksemaks

// massiivi keskele lisamine
val = numbers.splice(3, 0, 100);

console.log(numbers);
console.log(val);
