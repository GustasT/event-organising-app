class User {
  firstName;
  lastName;
  email;
  birthday;

  constructor(firstName, lastName, email, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthday = birthday;
  }
}
module.exports = User;
