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
    this.cardDisplay = true;
    this.modalDisplay = false;
  }

  addCardToDisplay() {
    const HTML = `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${this.img}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${
                  this.firstName + ' ' + this.lastName
                }</h3>
                <p class="card-text">${this.email}</p>
                <p class="card-text cap">${this.city}, ${this.state}</p>
            </div>
        </div>`;
    document.getElementById('gallery').innerHTML += HTML;
  }

  addModalToDislpay() {
    // Create Modal and parent container
    // Add to append below galler ID
  }

  toggleModal(boolean) {
    if (boolean) {
      // show Modal
    } else {
      // hide modal
    }
  }
}
