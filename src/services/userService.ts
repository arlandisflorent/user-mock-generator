import { mailExtensionList, mailProviderList, mailSeparatorList } from '../assets/constants/mailConstants';
import { Helper } from './helper';
import { NameService } from './nameService';
import { User } from '../assets/models/user';
import { DateService } from './dateService';
import { CreditCardService } from './creditCardService';

export const UserService = {} as any;

// return between 8 & 10 random characters
UserService.generatePassword = ():string => {
	return Math.random().toString(36).slice(-Helper.getRandomNumber(8, 10));
};


// generate a list of fake users
UserService.generateUserList = (listSize: number):User[] => {
	const firstnameList = NameService.getFirstnameList();
	const lastnameList = NameService.getLastnameList();
	const result = [];

	for (let i = 0; i < listSize; i++) {
		const firstname = Helper.selectRandom(firstnameList);
		const lastname = Helper.selectRandom(lastnameList);
		result.push(
			new User(
				firstname,
				lastname,
				`${firstname}${Helper.selectRandom(mailSeparatorList)}${lastname}@${Helper.selectRandom(mailProviderList)}.${Helper.selectRandom(mailExtensionList)}`,
				UserService.generatePassword(),
				DateService.generateDate(),
				CreditCardService.generateCreditCard()
			)
		);
	}
	return result;
};