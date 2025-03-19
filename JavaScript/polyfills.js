const arr = [1, 2, 3, 4, 5, 6];

// Error: .forEach function dose not exist on arr variable

// Real signture- no return , function input, value, index
// calls my fn for every value

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this; // "this" current object ki taraf point karta hain
    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}

const ret = arr.myForEach(function (value, index) {
  console.log(index, value);
});

// map()
// Signture .map => return new arrray => iterate throw each element,

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(userFn(this[i]));
    }
    return result;
  };
}

const n = arr.myMap((e) => e * 2);
console.log(n);

// filter()
//Signature: return new array || input userFn
// agar user ka fn true return karta hain toh current value ko new array main add karta hain

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const even = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        even.push(this[i]);
      }
    }
    return even;
  };
}

const n3 = arr.filter((e) => e % 2 == 0);
const n4 = arr.myFilter((e) => e % 2 == 0);
console.log(n3);
console.log(n4);
