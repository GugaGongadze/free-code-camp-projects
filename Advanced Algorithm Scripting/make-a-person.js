const Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFullName = function() {
      console.log(`${firstName} ${lastName}`);
    return `${firstName} ${lastName}`;
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.setFirstName = function(newFirstName) {
    firstName = newFirstName;
    return firstName;
  };

  this.setLastName = function(newLastName) {
    lastName = newLastName;
    return lastName;
  };

  this.setFullName = function(newFullName) {
    firstName = newFullName.split(' ')[0];
    lastName = newFullName.split(' ')[1];

    return `${firstName} ${lastName}`;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();