export const Helper = {} as any;

// get random number between interval
Helper.getRandomNumber = (start: number, end: number):number => {
	if (start >= end) {
		throw 'start must be inferior to end';
	}
	return Math.floor(Math.random() * (end - start) + start);
};

// randomly select from  array
Helper.selectRandom = <T>(array: T[]):T => {
	return array[Math.floor(Math.random() * array.length)];
};