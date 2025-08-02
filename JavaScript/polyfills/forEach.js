if (!Array.prototype.myforEach){
    Array.prototype.myforEach = function(userFn) {
        const originalArray = this
        for (let i = 0; i < originalArray.length; i++) {
            userFn(originalArray[i], i)
        }      
    }
}

let arr = [1,2,3,4,5]

let a = arr.myforEach(function(value, index){
    console.log(index, value);
    
})
