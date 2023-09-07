abstract class Melon {

    constructor(public weight: number, public melonSort: string) { }

    abstract get elementIndex(): number;

    toString(): string {
        return `Element: ${(this.constructor as any).name.replace('melon', '')} \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`;
    }
}

class Watermelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Firemelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Earthmelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Airmelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

class Melonlemonmelon extends Melon {
    private elements: string[] = ['Water', 'Fire', 'Earth', 'Air'];
    private currentElementIndex: number = 0;

    morph(): void {
        this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }
}

// let test : Melon = new Melon(100, "Test");
// //Throws error

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
