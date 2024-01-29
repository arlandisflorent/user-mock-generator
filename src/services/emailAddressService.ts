import { mailExtensionList, mailProviderList, mailSeparatorList } from '../assets/constants/mailConstants';
import { getRandomBool, getRandomNumber, getRandomFromArray } from './helper';

export const generateEmailAddress = (firstname: string, lastname: string): string => {
	const shouldAddNumber = getRandomBool();

	const firstPart = shouldAddNumber ?
		`${firstname}${getRandomFromArray(mailSeparatorList)}${lastname}${getRandomNumber(0, 100)}` :
		`${firstname}${getRandomFromArray(mailSeparatorList)}${lastname}`;

	const lastPart = `${getRandomFromArray(mailProviderList)}.${getRandomFromArray(mailExtensionList)}`;

	return `${firstPart}@${lastPart}`;
};