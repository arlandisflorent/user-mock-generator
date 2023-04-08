// get random number between interval
export const getRandomNumber = (start: number, end: number):number => {
	if (start >= end) {
		throw 'start must be inferior to end';
	}
	return Math.floor(Math.random() * (end - start) + start);
};

// randomly select from  array
export const selectRandom = <T>(array: T[]):T => {
	return array[Math.floor(Math.random() * array.length)];
};