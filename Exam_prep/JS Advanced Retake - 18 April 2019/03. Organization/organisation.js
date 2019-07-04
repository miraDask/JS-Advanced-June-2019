class Organization {
    constructor(name, budget) {
        this.name = name; //organization’s name
        this.budget = budget; // the total budget
        this.employees = [];
        this._departmentsBudget = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35
        }
    }

    get departmentsBudget() {
        return this._departmentsBudget;
    }

    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] < salary) {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
        }

        const employee = {
            employeeName,
            department,
            salary
        };
        this.employees.push(employee);
        this._departmentsBudget[department] -= salary;

        return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
    }

    employeeExists(employeeName) {
        const employee = this.employees.filter(e => e.employeeName === employeeName)[0];

        if(employee) {
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`
        } else {
            return  `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }

    leaveOrganization(employeeName) {
        const employee = this.employees.filter(e => e.employeeName === employeeName)[0];

        if(!employee) {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }

        const index = this.employees.indexOf(employee);
        this.employees.splice(index, 1);
        this._departmentsBudget[employee.department] += employee.salary;

        return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
    }

    status() {
        const sortedMarketing = this.employees.filter(e => e.department === 'marketing').sort((a, b) => b.salary - a.salary);
        const sortedProduction = this.employees.filter(e => e.department === 'production').sort((a, b) => b.salary - a.salary);
        const sortedFinance = this.employees.filter(e => e.department === 'finance').sort((a, b) => b.salary - a.salary);

        let output = `${this.name.toUpperCase()} DEPARTMENTS:` +
        `\nMarketing | Employees: ${sortedMarketing.length}:` + ` ${sortedMarketing.map(e => e.employeeName).join(', ')}` +
        ` | Remaining Budget: ${this.departmentsBudget.marketing}`;

        output += `\nFinance | Employees: ${sortedFinance.length}:` + ` ${sortedFinance.map(e => e.employeeName).join(', ')}` +
        ` | Remaining Budget: ${this.departmentsBudget.finance}`;

        output += `\nProduction | Employees: ${sortedProduction.length}:` + ` ${sortedProduction.map(e => e.employeeName).join(', ')}` +
        ` | Remaining Budget: ${this.departmentsBudget.production}`;
    
        return output;
    }
}

let organization = new Organization('SoftUni', 200000);

console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Peter2', 'marketing', 2000));
console.log(organization.add('Peter3', 'marketing', 22000));

console.log(organization.add('Robert1', 'production', 5000));
console.log(organization.add('Robert2', 'production', 2000));
console.log(organization.add('Robert3', 'finance', 22000));
console.log(organization.add('Robert4', 'finance', 200));
console.log(organization.status());




