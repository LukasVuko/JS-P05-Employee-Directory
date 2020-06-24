class Directory {
  constructor() {
    this.endPoint = 'https://randomuser.me/api/?results=12&nat=US';
    this.maxNumberOfEmployees = 12;
    this.employeeList = [];
    this.currentEmployee;
  }

  async initialize() {
    // Create employee objects from fetched data and park it inside employeeList array
    const users = await fetchUsers(this.endPoint);
    this.employeeList = await users.results.map((employee, index) =>
      this.createAndReturnEmployeeObject(employee, index)
    );
    // Add employees to the document
    this.employeeList.forEach((employee) => {
      employee.addCardToDocument();
    });
    // Add event listeners to cards
    const cards = document.getElementsByClassName('card');
    Array.from(cards).forEach((card, index) => {
      card.addEventListener('click', () => {
        this.employeeList[index].addEmployeeInsideModal();
      });
    });
  }

  createAndReturnEmployeeObject(employee, index) {
    return new Employee(
      employee.name.first,
      employee.name.last,
      employee.picture.large,
      employee.email,
      employee.location.city,
      employee.cell,
      employee.location,
      employee.dob.date.substring(0, 10),
      index
    );
  }
}
