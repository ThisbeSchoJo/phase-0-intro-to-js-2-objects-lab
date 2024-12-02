// Write your solution in this file!
//assign an employee variable to an Object containing
//name and streetAddress keys (and whatever values I like)
//Use literal syntax to create your Object

const employee = {
  name: "Thisbe",
  streetAddress: "370 Old Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
  //should not mutate the employee
  //should return a new Object that has an updated value for the key passed in
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
  //should work same as above function but SHOULD mutate the employee Object passed in
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
  //should delete the property with that key from the employee Object and not mutate the original employee Object
  //should return a new Object that doesn't include the identified key-value pair
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
  //should work same as above function but SHOULD mutate the employee Object
}
