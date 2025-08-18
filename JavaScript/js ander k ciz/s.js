const obj = {
    personName: "P",
    greet: function(){
        console.log(`Hello ${this.personName}`);
        
    }
}

console.log('hi');

setTimeout(obj.greet.bind(obj), 5 * 1000)   // we use bind because giving object context, for setTimeout its not wrking without bind 

console.log('hi');


