// Write your solution in this file!

const employee = {
  name: "Billy Bob Yeehaw",
  streetAddress: "1776 Murica Lane"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  }
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newObj = {...employee};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}