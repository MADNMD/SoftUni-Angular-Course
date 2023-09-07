class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `${this.name} say hi!`;
    }
}
const user = new User('Pesho');
console.log(user.sayHello());
