const fetchUsers = async (endPoint) => {
  const data = await fetch(endPoint);
  return await data.json();
};

const directory = new Directory();
directory.initialize();

// Search functionality
document.getElementById('search-input').addEventListener('keyup', (e) => {
  const searchString = e.target.value;
  directory.employeeList.forEach((employee, index) => {
    let employeeNameString = employee.firstName + employee.lastName;
    if (
      employeeNameString.toUpperCase().indexOf(searchString.toUpperCase()) > -1
    ) {
      employee.showCard(index);
    } else {
      employee.hideCard(index);
    }
  });
});

// Modal next and previous functionality
document
  .getElementsByClassName('modal-btn-container')[0]
  .addEventListener('click', (e) => {
    if (e.target.id === 'modal-next') {
      if (directory.currentEmployee === 11) {
        directory.employeeList[0].addEmployeeInsideModal();
      } else {
        let i = parseInt(directory.currentEmployee) + 1;
        directory.employeeList[i].addEmployeeInsideModal();
      }
    } else if (e.target.id === 'modal-prev') {
      if (directory.currentEmployee === 0) {
        directory.employeeList[11].addEmployeeInsideModal();
      } else {
        let i = parseInt(directory.currentEmployee) - 1;
        directory.employeeList[i].addEmployeeInsideModal();
      }
    }
  });
