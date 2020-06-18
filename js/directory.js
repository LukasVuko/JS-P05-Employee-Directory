class Directory {
  constructor() {
    this.endPoint = 'https://randomuser.me/api/?results=12&nat=US';
    this.maxNumberOfEmployees = 12;
    this.employeeList = [];
  }

  async initialize() {
    const users = await fetchUsers(this.endPoint);
    const employeeArray = await users.results.map((employee) =>
      this.createAndReturnEmployeeObject(employee)
    );
    this.employeeList = employeeArray;
    this.employeeList.forEach((employee, i) => employee.addCardToDocument(i));
    // Create and add search HTML.
  }

  createAndReturnEmployeeObject(employee) {
    return new Employee(
      employee.name.first,
      employee.name.last,
      employee.picture.medium,
      employee.email,
      employee.location.city,
      employee.cell,
      employee.location,
      employee.dob.date.substring(0, 10)
    );
  }
}
