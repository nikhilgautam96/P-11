## How JS handles asynchronous operations :-
- JS is a `single threaded language`.
- JS by default only supports `synchronous` code execution. It means js execution pointer waits till a particular line of code / operation is executed then only it will move ahead to execute the next piece of code.
    - eg :-
    ```js
    console.log("start");
    for(let i = 0; i<10000000000; i++) {
        // some task.
    }
    console.log("task done");
    console.log("end");

    // OUTPUT :
    // start
        // waits till the loop finishes, we can see the pause in console output.
    // task done
    // end
    ```
    - ***NOTE : The above property of synchronous code execution only works for operations natively known to javascript. like (for loop, etc.)***
    ```js
    console.log("start");
    setTimeout(function exec() {
        console.log("Task Done");
    }, 5000);
    console.log("end");
    // OUTPUT :
    // start
    // end
    // Task done  --> JS engine did not wait for the "setTimeout" operation to complete bcz it is a 
    //                  feature of JS Runtime and not natively known to JS.
    ```
    - *** NOTE : console.log is not native to js : *** 
        - it tries to make us feel as synchronous as possible in recent runtime versions. but it actually depends on runtime to runtime that is is synchronous or asynchronous.
        - in nodeJs console.log uses `process.stdout or process.stderr` for console.log() and console.err() operations.
- In JavaScript, asynchronous operations allow you to execute tasks without blocking the execution of other code. They are essential for handling time-consuming operations, such as network requests or file I/O, in a non-blocking manner, ensuring that the application remains responsive and doesn't freeze during these operations.
- There are several mechanisms for handling asynchronous operations in JavaScript:
    1. `Callbacks`
    2. `Promises`
        - Promises are special JS objects that are also considered as readibility enhancers.
        - They get immediately returned from a function setup to return a promise.
        - They act as `placeholders` for the data that we hope to get back from some future task.
        - we also attach the functionality that we want to defer until the future task is done.
        - And promise automatically handles execution of this functionality.
    3. `Async/await`

## JS Runtime :-
- Initially js was developed to run only in browser. browser runtime gives some additional functionalities to the language like DOM Api, setTimeout, setInterval, etc. these features are not native to js.
- After 2009 `nodeJs` came as another runtime for js that has again some additional functionalities not native to js like Api's around filesystem, process, etc.

## How JS handles the Runtime functionalities :-
- Js has;
    1. `call stack`.
    2. `event queue`.
    3. `event loop`.
    4. `Runtime`.
- every time we run a code, 
    - whenever we call a function it allocates some space in call stack.
    - js will execute the code and it sends the Runtime functionalities like setTimeout, etc to the js Runtime.
    - once a runtime task is complete it is then sent to the `event queue`. In event queue we receive `callbacks`.
    - the `event loop` then checks for certain `condition` on regular basis to send the tasks from `event queue` to the `call stack`.
    - condition :
        1. The call stack is empty.
        2. The global code is complete and nothing is left to execute.
- eg :-
```js
function process() {
    console.log("Start");
    setTimeout(function exec() {
        console.log("Executed Some Task 1");
    }, 3000);
    setTimeout(function exec() {
        console.log("Executed Some Task 2");
    }, 2000);
    for(let i = 0; i<10000000000; i++) {
        // some task.
    }
    setTimeout(function exec() {
        console.log("Executed Some Task 3");
    }, 1000);
    setTimeout(function exec() {
        console.log("Executed Some Task 4");
    }, 1000);
    console.log("End");
}

process();
console.log("TATA");
// OUTPUT :
// Start
// End
// TATA
// Executed Some Task 2
// Executed Some Task 1
// Executed Some Task 3
// Executed Some Task 4
```