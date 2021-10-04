/* --- DOM elementide loomine --- */
let val;

// elemendi loomine
const li = document.createElement('li');

// klassi lisamine
li.className = 'collection-item';

// teksti lisamine
li.appendChild(document.createTextNode('Study JS element creation'));

// kodune töö - loo link X näitamiseks
const link = document.createElement('a');
link.className = 'secondary-content';
link.appendChild(document.createTextNode('X'));
link.setAttribute('href', '#');
li.appendChild(link);

// lisame li elemendi ul-isse
const ul = document.querySelector('ul');
ul.appendChild(li);

console.log(li);