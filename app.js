/* --- DOM elementide käsitlemine --- */

let val;

val = document.getElementById('task-title');
document.getElementById('task-title').style.background = '#000';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
document.getElementById('task-title').textContent = 'My Tasks';
document.getElementById('task-title').innerText = 'My Favourite Tasks'
document.getElementById('task-title').innerHTML = '<span style="color: red">My Tasks</span>'
val = document.querySelector('h4');
val = document.querySelector('#task-title');
val = document.querySelector('.collection-item:nth-child(even)');
val = document.querySelector('.collection-item:nth-child(odd)');

console.log(val);