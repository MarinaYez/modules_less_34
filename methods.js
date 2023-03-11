
// export function totalSalary(employees) { //Task1
//     return Object.values(employees).reduce((sum,salary) => sum + salary, 0)

// import { employees } from "./employees";

   
// }
// console.log(totalSalary(employees));
// totalSalary(employeesSalary)

// export function departmentsQuantity(employees) { //Task 2
//     Object.values(employees).filter(el=> el['department'] === 0).length
// }
// console.log(departmentsQuantity(employees));
// departmentsQuantity(employeesDepartmens);

export function departmentsSalary(employees){//Task3
    let result = {};
    employees.forEach(function(employee) {
        if (!result[employee.department]) {
        result[employee.department] = 0;
        }
        result[employee.department] += employee.salary;
    });
    return result;
}
console.log(departmentsSalary(employees));
