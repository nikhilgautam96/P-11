console.log(x);  // "undefined" --> bcz of `lexical Scoping` and `Hoisting`
console.log(y);  // "undefined" --> bcz of `lexical Scoping` and `Hoisting`
console.log(m);  // "undefined" --> bcz of `lexical Scoping` and `Hoisting`

function fun() {
    console.log("x inside fun() - ", x);        // undefined
    console.log(z);     // "undefined" --> bcz of `lexical Scoping` and `Hoisting`
    var z = 50;
    console.log(z);
}
fun();
// console.log(z);     // ReferenceError: z is not defined

{
    var x = 10;
    console.log(x);
}
console.log(x);

if(true) {
    var y = 20;
    console.log(y);
}
console.log(y);
if(false) {
    var m = 30;
    console.log(m);
}
console.log(m);

// ----------------------------------XXXXXXXXXX------------------------------------------ //

var a = 15;
var a = 25;             // var allows redeclaration.
console.log(a);

// ----------------------------------XXXXXXXXXX------------------------------------------ //