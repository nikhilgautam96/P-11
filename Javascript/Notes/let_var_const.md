# `let`  vs  `var`  vs  `const`  :-
- Formal Declaration : declaration using `var`, `let`, `const` is a formal declaration.

## ***`var`*** :- 
- Inside a function `var` gets `function scope`. 
- Oustside a function, even if it is inside any block, it will have `global scope`.
- 
```JS
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
```

## ***`let`*** :- 
- The `let` declaration always declares a `block-scoped` local variable.
- If we declare let outside any block, it still won't get complete global scope.
```JS
{
    let x = 10;
    console.log(x);
}
// console.log(x);     // ReferenceError: x is not defined

function fun() {
    // console.log(y);     // ReferenceError: y is not defined
    let y = 20;
    console.log(y);
}
fun();
// console.log(y);     // ReferenceError: y is not defined

// ----------------------------------XXXXXXXXXX------------------------------------------ //

let a = 15;
// let a = 25;      // let does not allow redeclaration. 
                    //        - "SyntaxError: Identifier 'a' has already been declared"

// ----------------------------------XXXXXXXXXX------------------------------------------ //

// `let` will not give complete global scope if declared outside any block, unlike `var`.
// console.log(d);     // ReferenceError: Cannot access 'd' before initialization
let d = "nikhil";

// ----------------------------------XXXXXXXXXX------------------------------------------ //
```

## ***`const`*** :-
- The const declaration creates block-scoped constants, much like variables declared using the let keyword. 
- The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). 
- However, if a constant is an object or array its properties or items can be updated or removed.
