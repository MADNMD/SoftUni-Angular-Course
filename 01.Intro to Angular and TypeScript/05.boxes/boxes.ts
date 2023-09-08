class Box<T>{

    private conteiner: T[] = [];

    add(element: T): void {
        this.conteiner.push(element);
    }

    remove(): T | undefined {
        return this.conteiner.pop();
    }

    get count(): number {
        return this.conteiner.length;
    }

}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

// let box = new Box<String>();
// box.add("Pesho");
// box.add("Gosho");
// console.log(box.count);
// box.remove();
// console.log(box.count);
