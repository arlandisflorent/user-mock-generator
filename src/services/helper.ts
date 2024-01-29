// get random number between interval
export const getRandomNumber = (start: number, end: number): number => {
	if (start >= end) {
		throw 'start must be inferior to end';
	}
	return Math.floor(Math.random() * (end - start) + start);
};

export const getRandomFromArray = <T>(array: T[]): T => {
	return array[Math.floor(Math.random() * array.length)];
};

export const getRandomBool = (): boolean => {
	return !!Math.round(Math.random());
};