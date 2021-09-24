/* --- sõnetöötlus --- */

const firstName = 'Kadi';
const surName = 'Tamm';
const age = 20;
const text = 'Tere, olen Kadi!';
const tags = 'arendus,veeb';

let val;

// concatenation - text + text
val = firstName + ' ' + surName;

// append
val = firstName;
val += surName;

val = text + ' Minu töö valdkond on ' + tags;

// escaping \*
val = 'See on \'jutumärkides\'';

// case
val = firstName.toLowerCase();
val = surName.toUpperCase();

// string index
val = surName[0];
val = surName.charAt(2); // viisakam vorm
val = surName.charAt(-1); // ei saa
val = surName.length;
val = surName.charAt(surName.length - 1);

val = surName.indexOf('a');
val = surName.lastIndexOf('m'); // viimati ilmuv

// string cutting
val = surName.substring(0, 2);
val = surName.slice(0, 2);
val = surName.slice(-3);

val = tags.split(',');

// log
console.log(val);