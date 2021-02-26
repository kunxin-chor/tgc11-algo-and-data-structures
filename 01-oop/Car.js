class Car {
    constructor(model, horsePower) {
        this.model = model;
        this.horsePower = horsePower;
    }

    getModel() {
        return this.model;
    }

    getHorsepower() {
        return this.horsePower;
    }

    setModel(newModel) {
        this.model = newModel;
    }

    setHorsepower(newHorsepower) {
        this.horsePower = newHorsepower;
    }
}

let c = new Car("Ford", 120);
console.log(c.getModel());
console.log(c.getHorsepower());
c.setModel("Toyata");
c.setHorsepower(240);
console.log(c.getModel());
console.log(c.getHorsepower());