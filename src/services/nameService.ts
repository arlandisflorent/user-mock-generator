export const NameService = {} as any;
import { firstnameListString, lastnameListString } from '../assets/constants/nameConstants';

// remove spaces and accents, convert to lower case
NameService.standardizeNameForMail = (name: string) => {
  return name.trim()
    .toLowerCase()
    .replace(/[éèêë]/g, 'e')
    .replace(/[ç]/g, 'c')
    .replace(/[à]/g, 'a')
    .replace(/[ùüû]/g, 'u');
}

// take a string and return array of standardized strings
NameService.createArray = (nameListString: string) => {
  const nameList = nameListString.split('\n');
  return nameList.map((name) => NameService.standardizeNameForMail(name));
}

NameService.getFirstnameList = () => {
  return NameService.createArray(firstnameListString);

}

NameService.getLastnameList = () => {
  return NameService.createArray(lastnameListString);
}

