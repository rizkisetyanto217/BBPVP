class Parent {
    constructor(greeting) {
        this.greeting = greeting;
    }

    parentSay() {
        console.log("this is parent class");
    }
}

class Child extends Parent {
    constructor(greeting, name) {
        super(greeting); // manggil constructor Parent
        this.name = name;
    }

    childSay() {
        console.log("this is the child class");
    }
}

// instantiate
var parent1 = new Parent('hai');
console.log(parent1.greeting);
parent1.parentSay();

var child1 = new Child('hello', 'nilam');
console.log(child1.greeting);
console.log(child1.name);
child1.parentSay();
child1.childSay();