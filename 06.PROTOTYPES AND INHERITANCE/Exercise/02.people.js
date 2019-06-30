function getClasses() {
    class Employee {
        constructor(name, age) {
            if(this.constructor === Employee) {
                throw new Error('"Employee" class should not be initialized directly')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            const currentTask  = this.tasks.shift();
            this.tasks.push(currentTask);
            console.log(currentTask);
        }

        getSalary() {
            return this.salary;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this._setTasks();
        }

        _setTasks() {
            return this.tasks.push(`${this.name} is working on a simple task.`);
        }
    }

    class Senior  extends Employee {
        constructor(name, age) {
            super(name, age);
            this._setTasks();
        }

        _setTasks() {
            this.tasks.push(`${this.name} is working on a complicated task.`);
            this.tasks.push(`${this.name} is taking time off work.`)
            this.tasks.push(`${this.name} is supervising junior workers.`)
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this._setTasks();
            this.dividend = 0;
        }

        _setTasks() {
            this.tasks.push(`${this.name} scheduled a meeting.`);
            this.tasks.push(`${this.name} is preparing a quarterly report.`);
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return { Employee, Junior, Senior, Manager};
}