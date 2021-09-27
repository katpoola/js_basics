let date = new Date();
let weekDay = date.getDay();

if (weekDay === 1) {
	console.log('Esmaspäev');
} else if (weekDay === 2) {
	console.log('Teisipäev');
} else if (weekDay === 3) {
	console.log('Kolmapäev');
} else if (weekDay === 4) {
	console.log('Neljapäev');
} else if (weekDay === 5) {
	console.log('Reede');
} else if (weekDay === 6) {
	console.log('Laupäev');
} else if (weekDay === 0) {
	console.log('Pühapäev');
} else {
	console.log('ERROR!!!!!!!!');
}


switch(weekDay){
	case 1:
		console.log('Esmaspäev');
		break;
	case 2:
		console.log('Teisipäev');
		break;
	case 3:
		console.log('Kolmapäev');
		break;
	case 4:
		console.log('Neljapäev');
		break;
	case 5:
		console.log('Reede');
		break;
	case 6:
		console.log('Laupäev');
		break;
	case 0:
		console.log('Pühapäev');
		break;
};