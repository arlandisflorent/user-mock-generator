import { addYears, format } from 'date-fns';
import { CreditCard } from '../assets/models/creditCard';
import { getRandomNumber } from './helper';
import { getRandomDate } from './dateService';

// Visa :- Starting with 4, length 13 or 16 digits.
export const generateVisaNumber = ():number => {
	const cardNumberArray = new Array(16);
	cardNumberArray[0] = 4;
	for (let i = 1; i < cardNumberArray.length; i++) {
		cardNumberArray[i] = Math.floor(Math.random() * 10);
	}
	const cardNumberString = cardNumberArray.join().replace(/,/gm, '');
	return parseInt(cardNumberString, 10);
};


export const generateCVV = ():number => {
	return getRandomNumber(100, 999);
};

export const generateValidationDate = ():string => {
	const startDate = new Date();
	const endDate = addYears(new Date(), 3);
	return format(getRandomDate(startDate, endDate), 'MM/yyyy');
};

export const generateCreditCard = ():CreditCard => {
	return new CreditCard(
		generateVisaNumber(),
		generateCVV(),
		generateValidationDate(),
	);
};