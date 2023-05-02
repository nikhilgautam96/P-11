console.log(NaN - 10);                  // NaN
console.log(NaN - NaN);                 // NaN
console.log(NaN + Infinity);            // NaN
console.log(Infinity - 5000000);        // Infinity
console.log(Infinity - Infinity);       // NaN
console.log(-Infinity - 5);             // -Infinity
console.log(-Infinity + Infinity);      // NaN

console.log("nikhil" + []);                 // nikhil
console.log("nikhil" + [null, undefined]);  // nikhil,
console.log("nikhil" + [null]);             // nikhil
console.log("nikhil" + [,]);                // nikhil
console.log("nikhil" + [,,,,]);             // nikhil,,,
console.log("nikhil" + [[],[],[]]);         // nikhil,,


let x = {"english" : 90, "maths" : 80, "science" : 100};
console.log(x.toString());      // [object Object]
console.log(x.valueOf());       // { english: 90, maths: 80, science: 100 }

let y = [1, 2, "nikhil", true, null, undefined, 5.5, 10];
console.log(y.toString());      // 1,2,nikhil,true,,,5.5,10
console.log(y.valueOf());       // [ 1, 2, 'nikhil', true, null, undefined, 5.5, 10 ]