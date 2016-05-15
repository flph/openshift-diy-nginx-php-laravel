function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getIntArray(min, max) {
	var array = [];
	while(min<=max){ array.push(min); min++;};
	return array;
};

function shuffleArray(array){
	//Fisher-Yates algorithm
	for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x){};
	return array;
};