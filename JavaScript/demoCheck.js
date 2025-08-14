

function greet (name) {
    greet.lname = name
    return `Hello ${name}`
}

Function.prototype.describe = function () {
    // console.log(`Function name is ${this.lname}`);
    
}


// console.log(greet('Pratim'));
greet('pratim')
greet.describe()
// console.log(greet.lname);



// first class function
function applyOp(a, b, operatiom) {
    return operatiom (a,b)
}
let ab = applyOp(5 , 4, (x,y) => x/y)
console.log(ab);

