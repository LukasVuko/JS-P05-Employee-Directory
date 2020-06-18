class Employee {
  constructor(firstName, lastName, img, email, city, phone, address, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.img = img;
    this.email = email;
    this.city = city;
    this.phone = phone;
    this.address = {
      number: address.street.number,
      streetName: address.street.name,
      state: address.state,
      postcode: address.postcode,
    };
    this.birth = birthday;
    this.cardDisplay = true;
    this.modalDisplay = false;
  }

  addCardToDocument() {
    const HTML = `
        <div class="card" id=>
            <div class="card-img-container">
                <img class="card-img" src="${this.img}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${
                  this.firstName + ' ' + this.lastName
                }</h3>
                <p class="card-text">${this.email}</p>
                <p class="card-text cap">${this.city}, ${this.address.state}</p>
            </div>
        </div>
        `;
    document.getElementById('gallery').innerHTML += HTML;
  }

  addEmployeeInsideModal() {
    const HTML = `
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${this.img}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${this.firstName} ${this.lastName}</h3>
                <p class="modal-text">${this.email}</p>
                <p class="modal-text cap">${this.city}</p>
                <hr>
                <p class="modal-text">${this.phone}</p>
                <p class="modal-text">${this.address.number}, ${this.address.streetName}, ${this.city}, ${this.address.state} ${this.address.postcode}</p>
                <p class="modal-text">Birthday: ${this.birth}</p>
            </div>
            `;
    document.getElementsByClassName('modal')[0].innerHTML = HTML;

    this.showModal();

    document.getElementById('modal-close-btn').addEventListener('click', () => {
      document.getElementsByClassName('modal-container')[0].hidden = true;
    });
  }

  showModal() {
    document
      .getElementsByClassName('modal-container')[0]
      .removeAttribute('hidden');
  }
}
