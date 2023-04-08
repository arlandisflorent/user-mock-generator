import { format, subYears } from 'date-fns';

export const DateService = {} as any;

// get random date between interval
DateService.getRandomDate = (start: Date, end: Date):Date => {
	if (start >= end) {
		throw 'start must be inferior to end';
	}

	return new Date(Math.random() * (end.getTime() - start.getTime()) + start.getTime());
};

// generate random date that is at least 18 years old
DateService.generateDate = ():string => {
	const startDate = new Date(subYears(new Date(), 60));
	const endDate = new Date(subYears(new Date(), 18));
	return format(DateService.getRandomDate(startDate, endDate), 'dd/MM/yyyy');
};