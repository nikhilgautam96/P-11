# Scopes :-
- In simple words, scope is simply where to look for things. we are looking for variables and functions.
- There are 4 types of scopes.
    1. `Global Scope`
    2. `Function Scope`
    3. `Block Scope`
    4. `Lexical Scope`

## `Global Scope` :-
- If a variable is present in the global scope, then it is accessible everywhere in the JS file.
- There are many ways to define a variable in global scope, one way is to declare/define variable outside any function or a block.
- 
```JS
var name = "Nikhil";                    // global variable.
let age = 10;
function greet() {
    console.log("greetings ! ", name, " , ", age);

    function test() {
        console.log("test");
    }
}
function fun() {
    console.log("have funs ! ", name, " , ", age);
}
greet();
fun();

// test(); // this will throw error :- "ReferenceError: test is not defined"
```

## `Function Scope` :-
- In a function scope, the visibility of a variable/function is just inside the outer function.
- The variable having function scope will be accessible anywhere inside the function, even before its declaration.
```JS
function fun() {
    console.log(x);     // "undefined"
    var x = 10;         // 'x' is local to the function 'fun()'.
    console.log("x is : ", x);
    function test() {
        console.log("inside nested function : ", x); // 'x' is accessible here as well.
    }
    test();
}
fun();
// console.log(x);         // "ReferenceError: x is not defined"
```

## `Block Scope` :-
-   ```JS
    {
        // This is a block in JS.
    }
    ```
- If a variable/function is only accessible/visible inside a block then it will have a block scope.
- Diff. block are - {if-else block, for block, while block, raw block}.
- The variable having block scope will be accessible only after its declaration in that block.
```JS
if(true) {
    // console.log(x);     // ReferenceError: x is not defined
    let x = 10;
    console.log(x);
}
// console.log(x);     // ReferenceError: x is not defined

{
    // Raw Block
    let y = 20;
    console.log(y);
}
// console.log(y);         // ReferenceError: y is not defined
```

## `Lexical Scope` :-
- before execution all the scope resolution is done during parsing phase, and is called the lexical scoping.
```JS
// Example 1
var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    console.log(teacher);       // "Nikhil"
}

console.log(teacher);           // "Sanket"
fun();
```
# AutoGlobal :-
- Once inside a scope if we don't know about the scope of a variable we check the outer scopes one by one.
- If the variable is not present in any scope then it is automatically assigned a global scope with default value as "undefined".
```JS
var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"   
}

fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.
```
- `NOTE` : autoglobal only works with "target" reference and not "source" reference.
- `NOTE` : this happens during the execution phase, autoglobals are made global scoped during execution phase. ie. if we try to use the variable before it has been assigned any value/before it is made autoglobal it will give `"Reference error"`.
```JS
var teacher = "Sanket";
function fun() {
    var teacher = "Nikhil";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"   
}

console.log(teachingAssistant);         // here teachingAssistant is "undeclared".
            // "ReferenceError: teachingAssistant is not defined"
            // reason : autoglobals are created during execution phase 
            // and while in execution phase before calling "fun()" 
            // so that "teachingAssistant" could become "autoglobal" 
            // we tried to access it and thus it threw reference error 
            // as JS does not have any info about the variable 
            // "teachingAssistant" in global scope. 
fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.
```
```JS
var teacher = "Sanket";
function fun() {
    console.log(subject);               // "undefined"
    var teacher = "Nikhil";
    var subject = "Javascript";
    teachingAssistant = "Vibhav";       // |--> it will become "autoglobal"
    console.log(teacher);               // "Nikhil"
    console.log(teachingAssistant);     // "Vibhav"   
    console.log(subject);               // "Javascript"
}

fun();
console.log(teacher);                   // "Sanket"
console.log(teachingAssistant);         // "Vibhav"  --> in global scope.
console.log(teachingAssistant);         // "Vibhav"  
console.log(subject);                   // "ReferenceError: subject is not defined"
```
```JS
function fun() {
    teachingAssistant = "Vibhav";       // this will not become autoglobal, 
                                        // bcz in line 4 we have a fromal declaration.
    console.log(teachingAssistant);
    var teachingAssistant = "JD";
}

fun();
```

# `Undefined`  vs `Undeclared` :-
- `Undefined` :
    - undefined is a variable state where the scopes actually knows about it but, in the execution phase we have not allocated any value to that variable. so it will take `undefined` as default value.
    - In such cases if try using the variable as a source then it will give `undefined` as its value.
    eg:-
```JS
function fun() {
    console.log(name, typeof name);    // here 'name' will have a value 'undefined'. | type = "undefined"
    var name = "Nikhil";
    console.log(name, typeof name);    // here 'name' will have value as 'Nikhil'.   | type = "string"
}
fun();
```
- `Undeclared` :
    - undeclared is a variable state where we never formally declare(`using var, let, const or function`) a variable and before assigning it any value, so that it has chance to become autoglobal, we try to use it as a source.
    - In such situation we will get error as - `ReferenceError: <variableName> is not defined`.
    eg :-
```JS
function gun() {
    console.log(name);          // undeclared
    name = "nikhil";            // chance of becoming 'autoglobal'
    console.log(name);
}
console.log("start");
gun();
```

