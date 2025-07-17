let person1 = {
    personName: "ravi",

    greet: function () {
        console.log(`Hello, ${this.personName}`);
        
    },
}

let person2 = {
    personName : "a"
}

person1.greet.call(person2)