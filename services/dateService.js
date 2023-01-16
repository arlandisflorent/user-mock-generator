const Helper = require('./helper');
const moment = require('moment');

const DateService = (module.exports = {});

// generate random date that is at least 18 years old
DateService.generateDate = () => {
  const endDate = moment().subtract(18, 'years');
  const startDate = moment().subtract(60, 'years');
  return moment(Helper.getRandomNumber(startDate, endDate)).format('DD/MM/YYYY');
}