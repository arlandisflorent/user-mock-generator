const Helper = require('./helper');
const {format, subYears} = require('date-fns');

const DateService = (module.exports = {});

// get random date between interval
DateService.getRandomDate = (start, end) => {
  if (start >= end) {
    throw 'start must be inferior to end'
  }

  return new Date(Math.random() * (end.getTime() - start.getTime()) + start.getTime());
}

// generate random date that is at least 18 years old
DateService.generateDate = () => {
  const startDate = new Date(subYears(new Date(), 60));
  const endDate = new Date(subYears(new Date(), 18));
  return format(DateService.getRandomDate(startDate, endDate), 'dd/MM/yyyy');
}