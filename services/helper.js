const Helper = (module.exports = {});

// get random number between interval
Helper.getRandomNumber = (start, end) => {
  if (start >= end) {
    throw 'start must be inferior to end'
  }
  return Math.floor(Math.random() * (end - start) + start)
}

// randomly select from  array
Helper.selectRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}