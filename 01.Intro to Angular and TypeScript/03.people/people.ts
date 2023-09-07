abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public abstract work(): void;

    public collectSalary(): void {
        console.log(`${this.name} received salary ${this.salary} USD.`);

    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks = ['write code', 'review code', 'attend meetings'];
    }

    public work(): void {
        console.log(`${this.name} is ${this.tasks[0]}`);
        this.tasks.push(this.tasks.shift()!);
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks = ['debug code', 'implement new feature', 'mentor junior developers'];
    }

    public work(): void {
        console.log(`${this.name} is ${this.tasks[0]}`);
        this.tasks.push(this.tasks.shift()!);
    }
}

class Manager extends Employee {

    private dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.dividend = 0;
        this.tasks = ['organize meetings', 'approve budget', 'manage team'];
    }

    public setDivident(dividend: number): void {
        this.dividend = dividend;
    }

    public work(): void {
        console.log(`${this.name} is ${this.tasks[0]}`);
        this.tasks.push(this.tasks.shift()!);
    }

    public collectSalary(): void {
        const totalSalary = this.salary + this.dividend;
        console.log(`${this.name} received salary ${totalSalary} USD.`);
    }
}

export {
    Junior,
    Senior,
    Manager
};

//npx tsc името на файла да компилира и js файл