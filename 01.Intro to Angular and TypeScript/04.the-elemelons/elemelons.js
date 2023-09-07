class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    toString() {
        return `Element: ${this.constructor.name.replace('melon', '')} \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`;
    }
}
class Watermelon extends Melon {
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
}
class Firemelon extends Melon {
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
}
class Earthmelon extends Melon {
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
}
class Airmelon extends Melon {
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
}
class Melonlemonmelon extends Melon {
    constructor() {
        super(...arguments);
        this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        this.currentElementIndex = 0;
    }
    morph() {
        this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
}
// let test : Melon = new Melon(100, "Test");
// //Throws error
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
