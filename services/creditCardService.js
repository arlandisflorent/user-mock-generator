const CreditCard = require('../assets/models/creditCard');
const moment = require('moment');
const Helper = require('./helper')

const CreditCardService = (module.exports = {});

// Visa :- Starting with 4, length 13 or 16 digits.
CreditCardService.generateVisaNumber = () => {
  const cardNumberArray = new Array(16)
  cardNumberArray[0] = 4;
  for (let i = 1; i < cardNumberArray.length; i++) {
    cardNumberArray[i] = Math.floor(Math.random() * 10);
  }
  let cardNumberString = cardNumberArray.join().replace(/,/gm, '');
  return parseInt(cardNumberString, 10);
}


CreditCardService.generateCVV = () => {
  return Helper.getRandomNumber(100, 999);
}

CreditCardService.generateValidationDate = () => {
  const endDate = moment().add(3, 'years');
  const startDate = moment();
  return moment(Helper.getRandomNumber(startDate, endDate)).format('MM/YY');
}

CreditCardService.generateCreditCard = () => {
  return new CreditCard(
    CreditCardService.generateVisaNumber(),
    CreditCardService.generateCVV(),
    CreditCardService.generateValidationDate(),
  )
}