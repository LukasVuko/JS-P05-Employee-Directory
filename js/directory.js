class Directory {
  constructor() {
    this.maxNumberOfEmployees = 12;
    this.employeeList = this.createListOfEmployeeObjects();
  }

  createListOfEmployeeObjects() {
    // Fetch response
    // Iterate through the response, park values inside new Employee();
    // Push 12 of these into an array
    // return that array of employee objects into employee list
    return fetch('https://randomuser.me/api/?results=12')
      .then((response) => response.json())
      .then((res) => res.results.map((employee) => employee));
  }

  generateHTML() {
    // Create employee cards and add them to document
    // Create employe modals and add them to document
  }

  showOrHideEmployeeCard(boolean, id) {
    if (boolean) {
      // Show employee card
    } else {
      // Hide employee card
    }
  }

  showOrHideEmployeeModal(boolean, id) {
    if (boolean) {
      // Show employee modal
    } else {
      // Hide employee modal
    }
  }
}
