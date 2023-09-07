class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} say hi!`;
    }
}

const user = new User('Pesho');
console.log(user.sayHello());

//npx tsc името на файла да компилира и js файл
//npx tsc името на файла да компилира и js файл --target ES6 