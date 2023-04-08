import { mailExtensionList, mailProviderList, mailSeparatorList } from '../assets/constants/mailConstants';
import { User } from '../assets/models/user';
import { generateCreditCard } from './creditCardService';
import { generateBirthDate } from './dateService';
import { getRandomNumber, selectRandom } from './helper';
import { getLastnameList, getFirstnameList } from './nameService';

// return between 8 & 10 random characters
export const generatePassword = (): string => {
	return Math.random().toString(36).slice(-getRandomNumber(8, 10));
};


// generate a list of fake users
export const generateUserList = (
	size = 25,
	ageMin = 18,
	ageMax = 65
): User[] => {
	const firstnameList = getFirstnameList();
	const lastnameList = getLastnameList();
	const result = [];

	for (let i = 0; i < size; i++) {
		const firstname = selectRandom(firstnameList);
		const lastname = selectRandom(lastnameList);
		result.push(
			new User(
				firstname,
				lastname,
				`${firstname}${selectRandom(mailSeparatorList)}${lastname}@${selectRandom(mailProviderList)}.${selectRandom(mailExtensionList)}`,
				generatePassword(),
				generateBirthDate(ageMin, ageMax),
				generateCreditCard()
			)
		);
	}
	return result;
};