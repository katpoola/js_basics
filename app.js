/* --- DOM elementide käsitlemine --- */

let val;

val = document.querySelectorAll('.collection-item');
val = document.querySelectorAll('li');

oddLi = document.querySelectorAll('li:nth-child(odd)');
evenLi = document.querySelectorAll('li:nth-child(even)');

oddLi.forEach(function(li) {
	li.style.background = '#aaa';	
});
evenLi.forEach(function(li) {
	li.style.background = '#ccc'

});
console.log(val);