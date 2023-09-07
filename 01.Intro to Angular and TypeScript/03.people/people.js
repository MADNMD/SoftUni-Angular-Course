class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    collectSalary() {
        console.log(`${this.name} received salary ${this.salary} USD.`);
    }
}
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks = ['write code', 'review code', 'attend meetings'];
    }
    work() {
        console.log(`${this.name} is ${this.tasks[0]}`);
        this.tasks.push(this.tasks.shift());
    }
}
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks = ['debug code', 'implement new feature', 'mentor junior developers'];
    }
    work() {
        console.log(`${this.name} is ${this.tasks[0]}`);
        this.tasks.push(this.tasks.shift());
    }
}
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks = ['organize meetings', 'approve budget', 'manage team'];
    }
    setDivident(dividend) {
        this.dividend = dividend;
    }
    work() {
        console.log(`${this.name} is ${this.tasks[0]}`);
        this.tasks.push(this.tasks.shift());
    }
    collectSalary() {
        const totalSalary = this.salary + this.dividend;
        console.log(`${this.name} received salary ${totalSalary} USD.`);
    }
}
export { Junior, Senior, Manager };
