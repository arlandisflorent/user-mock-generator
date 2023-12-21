import { firstnameListString, lastnameListString } from '../assets/constants/nameConstants';

// remove spaces and accents, convert to lower case
export const standardizeNameForMail = (name: string): string => {
	return name.trim()
		.toLowerCase()
		.replace(/[éèêë]/g, 'e')
		.replace(/[ç]/g, 'c')
		.replace(/[à]/g, 'a')
		.replace(/[ùüû]/g, 'u');
};

// take a string and return array of standardized strings
export const createArrayForEmail = (nameListString: string): string[]  => {
	const nameList = nameListString.split('\n');
	return nameList.map((name) => standardizeNameForMail(name));
};

export const getFirstnameList = (): string[] => {
	return createArrayForEmail(firstnameListString);

};

export const getLastnameList = (): string[] => {
	return createArrayForEmail(lastnameListString);
};

