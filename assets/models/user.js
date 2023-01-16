module.exports = class User {
  constructor(firstname, lastname, email, password, dateOfBirth, creditCard) {
    this.firstname = firstname,
      this.lastname = lastname,
      this.email = email,
      this.password = password,
      this.dateOfBirth = dateOfBirth,
      this.creditCard = creditCard
  }
}