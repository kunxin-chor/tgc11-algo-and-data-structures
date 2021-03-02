class Employee
{
  constructor(employee_number, name, position, salary) {
    this.employee_number = employee_number; // UNIQUE across all employees
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class Company
{
  constructor() {
      // by convention, the array should store employee objects
      // technically no way to enforce
    this.employees = [];
  }
  

  
  getNextEmployeeID() {
    return Math.floor(Math.random() * 100000);
  }

  addEmployee(employee_number, name, position, salary) {
    
    // check if employee_number has been reused
    let existing = this.employees.find(function(e){
        e.employee_number == employee_number;
    })

    if (existing) {
        throw "The employee number is already in use";
    }

    if (!name) {
        throw "Name cannot be empty";
    }

    if (!position) {
        throw "Position cannot be empty";
    }

    if (salary < 0) {
        throw "Salary must be a positive number";
    }

    let e = new Employee(employee_number, name, position, salary);
    this.employees.push(e);
   
  };

  deleteEmployee(employee_number) {
    let index = this.employees.findIndex( function(e){
        return e.employee_number == employee_number;
    })

    this.employees.splice(index, 1);
  };

  updateEmployee(employee_number, newName, newPosition, newSalary) {
    let existingEmployee = this.findEmployeeByEmployeeNumber(employee_number);
    existingEmployee.name = newName;
    existingEmployee.position = newPosition;
    existingEmployee.salary = newSalary;
  };
  
  findEmployeeByName(name) {
    let target = null;
    for (let e of this.employees) {
        if (e.name == name) {
            target = e;
        }
    }
    return target;

    // return this.employees.find( e => e.name == name);
  };

  findEmployeeByEmployeeNumber(employee_number) {
    let target = null;
    for (let e of this.employees) {
        if (e.employee_number == employee_number) {
            target = e;
        }
    }
    return target;
  }
}

let apple = new Company();

let employeeNumber = apple.getNextEmployeeID();
apple.addEmployee(employeeNumber, "Steve Jobs", "CEO", 999999);
apple.addEmployee(apple.getNextEmployeeID(), "Mary Tay", "Manager", 20000);
apple.addEmployee(apple.getNextEmployeeID(), "Tim Cook", "CEO", 50000);



apple.deleteEmployee(employeeNumber);


let timCook = apple.findEmployeeByName("Tim Cook");
let timEmployeeNumber = timCook.employee_number;
console.log("Tim Cook ==>", timCook);

console.log(apple.findEmployeeByEmployeeNumber(timEmployeeNumber));

apple.updateEmployee(timEmployeeNumber, "Tim Cook2", "Supreme Leader", 5000000);

console.log(apple.findEmployeeByEmployeeNumber(timEmployeeNumber));
