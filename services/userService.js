const MailConstants = require('../assets/constants/mailConstants');
const User = require('../assets/models/user');
const NameService = require('./nameService');
const DateService = require('./dateService');
const CreditCardService = require('./creditCardService');
const Helper = require('./helper');

const UserService = (module.exports = {});

// return between 8 & 10 random characters
UserService.generatePassword = () => {
  return Math.random().toString(36).slice(-Helper.getRandomNumber(8, 10));
}


// generate a list of fake users
UserService.generateUserList = (listSize) => {
  const firstnameList = NameService.getFirstnameList();
  const lastnameList = NameService.getLastnameList();
  const mailProviderList = MailConstants.providerList;
  const mailExtensionList = MailConstants.extensionList;
  const separatorList = MailConstants.separatorList;
  const result = [];

  for (let i = 0; i < listSize; i++) {
    const firstname = Helper.selectRandom(firstnameList);
    const lastname = Helper.selectRandom(lastnameList);
    result.push(
      new User(
        firstname,
        lastname,
        `${firstname}${Helper.selectRandom(separatorList)}${lastname}@${Helper.selectRandom(mailProviderList)}.${Helper.selectRandom(mailExtensionList)}`,
        UserService.generatePassword(),
        DateService.generateDate(),
        CreditCardService.generateCreditCard()
      )
    )
  }
  return result;
}