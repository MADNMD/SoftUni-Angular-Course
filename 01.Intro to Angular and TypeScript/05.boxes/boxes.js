class Box {
    constructor() {
        this.conteiner = [];
    }
    add(element) {
        this.conteiner.push(element);
    }
    remove() {
        return this.conteiner.pop();
    }
    get count() {
        return this.conteiner.length;
    }
}
// let box = new Box();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);

let box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);