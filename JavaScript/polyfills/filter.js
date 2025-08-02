// return new array
// element , index

if (!Array.prototype.myfilter) {
    Array.prototype.myfilter= function(userFn) {
        let neArray = []
        for(let i = 0; i < this.length; i++){
            if (userFn(this[i])) {
                neArray.push(this[i])
            }
        }


        return neArray
}
}

let arr = [1,2,3,4,5]

let a = arr.myfilter(e => e > 3)
console.log(a);
