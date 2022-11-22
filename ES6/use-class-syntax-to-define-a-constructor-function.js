class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // => should be 'carrot'


const a = "fulano";
const b = 'de tal';

const c = a + " " + b;
console.log(c);

console.log(`${a} ${b}`);