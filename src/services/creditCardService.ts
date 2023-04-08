export const CreditCardService = {} as any;
import { addYears, format } from 'date-fns';
import { Helper } from './helper';
import { DateService } from './dateService';
import { CreditCard } from '../assets/models/creditCard';

// Visa :- Starting with 4, length 13 or 16 digits.
CreditCardService.generateVisaNumber = ():number => {
	const cardNumberArray = new Array(16);
	cardNumberArray[0] = 4;
	for (let i = 1; i < cardNumberArray.length; i++) {
		cardNumberArray[i] = Math.floor(Math.random() * 10);
	}
	const cardNumberString = cardNumberArray.join().replace(/,/gm, '');
	return parseInt(cardNumberString, 10);
};


CreditCardService.generateCVV = ():number => {
	return Helper.getRandomNumber(100, 999);
};

CreditCardService.generateValidationDate = ():string => {
	const startDate = new Date();
	const endDate = addYears(new Date(), 3);
	return format(DateService.getRandomDate(startDate, endDate), 'MM/yyyy');
};

CreditCardService.generateCreditCard = ():CreditCard => {
	return new CreditCard(
		CreditCardService.generateVisaNumber(),
		CreditCardService.generateCVV(),
		CreditCardService.generateValidationDate(),
	);
};