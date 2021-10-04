/* --- DOM elementide loomine --- */
let val;

// elemendi loomine
const li = document.createElement('li');

// klassi lisamine
li.className = 'collection-item';

// teksti lisamine
li.appendChild(document.createTextNode('Study JS element creation'));

// kodune töö - loo link X näitamiseks
const a = document.createElement('a');
a.className = 'secondary-content';
a.appendChild(document.createTextNode('X'))
li.appendChild(a);

// lisame li elemendi ul-isse
const ul = document.querySelector('ul');
ul.appendChild(li);

console.log(li);