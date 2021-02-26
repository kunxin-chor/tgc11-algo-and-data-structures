class Animal {
    constructor(name, animalType, hunger ) {
        this.name = name;
        this.animalType = animalType;
        this.hunger = hunger;
    }

    calculateFoodCost(costPerKG) {
        return this.hunger * costPerKG;
    }
}
let zoo = [];
//let lion = new Animal("Royal", "Lion", 80);
zoo.push(new Animal("Fluffy", "Golden Retriever", 25));
zoo.push(new Animal("Zodiac", "Border Collie", 30));
zoo.push(new Animal("Korin", "German Shepherd", 50));
zoo.push(new Animal("Pancake", "Corgi", 35));
zoo.push(new Animal("Milo", "Penguin", 30));

let totalCost = 0;
for (let a of zoo) {
    totalCost += a.calculateFoodCost(5);
}
console.log("Cost to feed all the zoo =",totalCost);