class Human {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Asian extends Human {
    location;
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
}
const man = new Human("chin", 24);
const aMan = new Asian("goj", 34, 'india');