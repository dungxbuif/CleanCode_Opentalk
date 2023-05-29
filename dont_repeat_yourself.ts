function showDeveloperList(developers) {
   developers.forEach((developer) => {
      const expectedSalary = developer.calculateExpectedSalary();
      const experience = developer.getExperience();
      const githubLink = developer.getGithubLink();
      const data = {
         expectedSalary,
         experience,
         githubLink,
      };

      render(data);
   });
}

function showManagerList(managers) {
   managers.forEach((manager) => {
      const expectedSalary = manager.calculateExpectedSalary();
      const experience = manager.getExperience();
      const portfolio = manager.getMBAProjects();
      const data = {
         expectedSalary,
         experience,
         portfolio,
      };

      render(data);
   });
}

//Good
function showEmployeeList(employees) {
   employees.forEach((employee) => {
      const expectedSalary = employee.calculateExpectedSalary();
      const experience = employee.getExperience();

      const data = {
         expectedSalary,
         experience,
      };

      switch (employee.type) {
         case 'manager':
            data.portfolio = employee.getMBAProjects();
            break;
         case 'developer':
            data.githubLink = employee.getGithubLink();
            break;
      }

      render(data);
   });
}

class Developer {
   // ...
   getExtraDetails() {
      return {
         githubLink: this.githubLink,
      };
   }
}

class Manager {
   // ...
   getExtraDetails() {
      return {
         portfolio: this.portfolio,
      };
   }
}

type Employee = Developer | Manager;
function showEmployeeList(employee: Employee[]) {
   employee.forEach((employee) => {
      const expectedSalary = employee.calculateExpectedSalary();
      const experience = employee.getExperience();
      const extra = employee.getExtraDetails();

      const data = {
         expectedSalary,
         experience,
         extra,
      };

      render(data);
   });
}

/*_______________________________________________________________ */
// collapsing for brevity
var sessions = { ... }
function printData(id, name, sessions) { ... }

// Manually create objects and assign each one to a variable
var mobileData = {
    id: 'mobile-container',
    name: 'mobile',
    sessions: sessions['mobile']
};

var tabletData = {
    id: 'tablet-container',
    name: 'tablet',
    sessions: sessions['tablet']
};

var desktopData = {
    id: 'desktop-container',
    name: 'desktop',
    sessions: sessions['desktop']
};

//Good

const sessions = {
   mobile: [1, 2, 3],
   tablet: [3, 4, 5],
   desktop: [6, 7, 8],
 }
 
 const printData = (id, name, sessions) => {
   var div = document.createElement('div')
   div.id = id
   div.textContent = `${name} : ${sessions}`
   document.querySelector('body').appendChild(div)
 }
 
 const devices = Object.keys(sessions)
 
 const data = devices.map((device) => {
   return {
     id: `${device}-container`,
     name: device,
     sessions: sessions[device],
   }
 })
 
 data.forEach((device) => {
   printData(device.id, device.name, device.sessions)
 })

