/* --- objektideitöötlus --- */

const person = {
	firstName: 'Kadi',
	lastName: 'Tamm',
	age: 23,
	email: 'kadi.tamm@gmail.com',
	hobbies: ['music', 'sport'],
	address: {
		city: 'Tallinn',
		county: 'Harjumaa'
	},
	getBirthdayYear: function(){
		return 2021 - this.age;
	}
};

let val;
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.address['city'];
val = person.getBirthdayYear();

console.log(val);
