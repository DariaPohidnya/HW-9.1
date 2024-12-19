let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
      design: [{ name: 'Yeva', salary: 1450 }, { name: 'Ira', salary: 1300 }], /*-----НОВА СТРОКА-----*/
      web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
      internals: [{ name: 'Jack', salary: 1300 }]
    }
  };

  function calculateSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, employee) => sum + employee.salary, 0);
    }
    else {
        return Object.values(department).reduce((sum, subDep) => sum + calculateSalaries(subDep), 0);
  }
}
  let totalSalaries = calculateSalaries(company);
  console.log(totalSalaries);