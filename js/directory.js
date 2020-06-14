class Directory {
  constructor() {
    this.maxNumberOfEmployees = 12;
    this.employeeList = this.createListOfEmployeeObjects();
  }

  createListOfEmployeeObjects() {
    const employeeArray = [];

    fetch('https://randomuser.me/api/?results=12')
      .then((response) => response.json())
      .then((data) => appendEmployeesToList(data.results));

    function appendEmployeesToList(data) {
      data.map((employee) => {
        const employeeObject = new Employee(
          employee.name.first,
          employee.name.last,
          employee.picture.medium,
          employee.email,
          employee.location.city,
          employee.cell,
          employee.location,
          employee.dob.date.substring(0, 10)
        );
        employeeArray.push(employeeObject);
      });
    }
    return employeeArray;
  }

  generateHTML() {}

  start() {
    // Create and add HTML employee list to document.
    // Create and add HTML employee models to document.
    // Create and add search HTML.
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
