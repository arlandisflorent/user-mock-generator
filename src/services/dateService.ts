import { format, subYears } from 'date-fns';

// get random date between interval
export const getRandomDate = (start: Date, end: Date):Date => {
	if (start >= end) {
		throw 'start must be inferior to end';
	}

	return new Date(Math.random() * (end.getTime() - start.getTime()) + start.getTime());
};

// generate random date that is at least 18 years old
export const generateBirthDate = (ageMin:number, ageMax:number):string => {
	const startDate = new Date(subYears(new Date(), ageMax));
	const endDate = new Date(subYears(new Date(), ageMin));
	return format(getRandomDate(startDate, endDate), 'dd/MM/yyyy');
};