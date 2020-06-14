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
          employee.name.last
        );
        employeeArray.push(employeeObject);
      });
    }
    return employeeArray;
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
