let person1 = {
    personName: "ravi",

    greet: function () {
        // console.log(`Hello, ${this.personName}`);
        
    },
}

let person2 = {
    personName : "a"
}

// person1.greet.call(person2) 
// person1.greet(person2)   


let gh = fetch('https://google.com')
console.log(typeof gh);