class Employee {
  constructor(firstName, lastName, img, email, city, phone, address, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.img = img;
    this.email = email;
    this.city = city;
    this.phone = phone;
    this.address = {
      street: address.street.number,
      name: address.street.name,
      state: address.state,
      postcode: address.postcode,
    };
    this.birth = birthday;
    this.display = true;
  }
}
