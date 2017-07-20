

function add () {
	user.find({}, (err, data) {
		user1.find({}, () {
			user2.find({}) {}
		})
	})
}

==============================

driver.get('https://website.com/login').then(function () {
loginPage.login('company.admin', 'password').then(function () {
    var employeePage = new EmployeePage(driver.getDriver());

    employeePage.clickAddEmployee().then(function() {
        setTimeout(function() {
            var addEmployeeForm = new AddEmployeeForm(driver.getDriver());

            addEmployeeForm.insertUserName(employee.username).then(function() {
                addEmployeeForm.insertFirstName(employee.firstName).then(function() {
                    addEmployeeForm.insertLastName(employee.lastName).then(function() {
                        addEmployeeForm.clickCreateEmployee().then(function () {
                            employeePage.searchEmployee(employee);
                        });
                    });
                });
            });
        }, 750);
    });
});
});

===============================

driver.get('https://website.com/login')
  .then(function() {
    return loginPage.login('company.admin', 'password')
  })
  .then(function() {
    var employeePage = new EmployeePage(driver.getDriver());
    return employeePage.clickAddEmployee();
  })
  .then(function() {
    setTimeout(function() {
      var addEmployeeForm = new AddEmployeeForm(driver.getDriver());

      addEmployeeForm.insertUserName(employee.username)
        .then(function() {
          return addEmployeeForm.insertFirstName(employee.firstName)
        })
        .then(function() {
          return addEmployeeForm.insertLastName(employee.lastName)
        })
        .then(function() {
          return addEmployeeForm.clickCreateEmployee()
        })
        .then(function() {
          return employeePage.searchEmployee(employee);
        });
    }, 750);
  });
  
  =======================================
