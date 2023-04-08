export const NameService = {} as any;
import { firstnameListString, lastnameListString } from '../assets/constants/nameConstants';

// remove spaces and accents, convert to lower case
NameService.standardizeNameForMail = (name: string): string => {
	return name.trim()
		.toLowerCase()
		.replace(/[éèêë]/g, 'e')
		.replace(/[ç]/g, 'c')
		.replace(/[à]/g, 'a')
		.replace(/[ùüû]/g, 'u');
};

// take a string and return array of standardized strings
NameService.createArrayForEmail = (nameListString: string): string[]  => {
	const nameList = nameListString.split('\n');
	return nameList.map((name) => NameService.standardizeNameForMail(name));
};

NameService.getFirstnameList = (): string[] => {
	return NameService.createArrayForEmail(firstnameListString);

};

NameService.getLastnameList = (): string[] => {
	return NameService.createArrayForEmail(lastnameListString);
};

