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