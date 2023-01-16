const NameConstants = require('../assets/constants/nameConstants');

const NameService = (module.exports = {});

// remove spaces and accents, convert to lower case
NameService.standardizeNameForMail = (string) => {
  return string.trim()
    .toLowerCase()
    .replace(/[éèêë]/g, 'e')
    .replace(/[ç]/g, 'c')
    .replace(/[à]/g, 'a')
    .replace(/[ùüû]/g, 'u');
}

// take a string and return array of standardized strings
NameService.createArray = (nameListString) => {
  const nameList = nameListString.split('\n');
  return nameList.map((name) => NameService.standardizeNameForMail(name));
}

NameService.getFirstnameList = () => {
  return NameService.createArray(NameConstants.firstnameListString);

}

NameService.getLastnameList = () => {
  return NameService.createArray(NameConstants.lastnameListString);
}

