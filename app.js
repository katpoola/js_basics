/* --- sõnetöötlus --- */

const firstName = 'Kadi';
const surName = 'Tamm';
const age = 20;
const tags = 'arendus,veeb';

let val;

// concatenation - es5
val = '<ul>' + '<li>' + firstname + '</li>' + '<li>' + surname + '</li>' + '<li>' + age + '</li>' + '<li>' + tags + '</li>'+ '</ul>';

val = '<ul>' + 
		'<li>' + firstname + '</li>' + 
		'<li>' + surname + '</li>' + 
		'<li>' + age + '</li>' + 
		'<li>' + tags + '</li>'+ 
	'</ul>';		// vana versioon

// string templating - es6
val = `
	<ul>
		<li>Eesnimi: ${firstName}</li>
		<li>Perenimi: ${surName}</li>
		<li>Vanus: ${age}</li>
		<li>Alad: ${tags}</li>
	</ul>
`		// parem versioon


console.log(val);
document.body.innerHTML = val;