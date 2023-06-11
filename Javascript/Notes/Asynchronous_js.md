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
    3. `async/await`

## JS Runtime :-
- Initially js was developed to run only in browser. browser runtime gives some additional functionalities to the language like DOM Api, setTimeout, setInterval, etc. these features are not native to js.
- After 2009 `nodeJs` came as another runtime for js that has again some additional functionalities not native to js like Api's around filesystem, process, etc.

## How JS handles the Runtime functionalities :-
- Js has;
    1. `call stack`.
    2. `event queue`.
    3. `event loop`.
    4. `Runtime`.
    5. `Microtask queue`.
- every time we run a code, 
    - whenever we call a function it allocates some space in call stack.
    - js will execute the code and it sends the Runtime functionalities like setTimeout, etc to the js Runtime.
    - once a runtime task is complete it is then sent to the `event queue`. In event queue we receive `callbacks`.
    - the `event loop` then checks for certain `condition` on regular basis to send the tasks from `event queue` to the `call stack`.
    - condition :
        1. The call stack is empty.
        2. The global code is complete and nothing is left to execute.
        3. The microtask queue is also empty. Microtask queue is given higher priority than the event queue.
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

## `Async/await` :-
- we can declare a function as ***`async`***.
- If you declare a function async, it does the following :-
    1. It allows the use of ***`await`*** keyword.
    2. If you declare a function async, `it allows consumption of a promise using await`.
    3. An async function always converts your return value to a promise.
- ***An `async` function is a function declared with the async keyword, and the `await` keyword is permistted within it. The async and await keywords enable asynchronous, promise-based behaviour to be written in a cleaner style, avoiding the need to explicitly configure promise chains.***
- It is not mandatory to use asynchronous task in these functions it just permits the usage of it.
- eg :-
```js
async function fun() {
    console.log("inside async function.");
    return 1234;
}
console.log("Start");
x = fun();
console.log(x);
console.log("End");
// OUTPUT :
// Start
// inside async function.
// Promise { 1234 }
// End
```
- eg 2 :-
```js
console.log("Start");
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from url ", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("completed fetching the data");
            resolve(data);  // return some data on SUCCESS.
            console.log("hello"); // --> this gets printed eventhough promise is resolved.
        }, 4000);
    });
}
function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file.");
        setTimeout(function processWriting() {
            let fileName = "result.txt";
            console.log("File written successfully");
            resolve(fileName);
        }, 3000);
    });
}
function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is ", file);
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        }, 5000);
    })
}

async function processing() {
    let downloadedData = await fetchData("www.google.com");
        console.log("Downloading await completed");
    let fileName = await writeFile(downloadedData);
        console.log("file writing await completed");
    let uploadResponse = await uploadData(fileName, "drive.google.com");
        console.log("Completed process with response :", uploadResponse);
    return true;
}
// x = processing();
// console.log(x);
async function helper() {
    // The purpose of using parentheses around (x = processing()) is to ensure that 
    // the assignment operation is completed before applying the await keyword to 
    // pause the execution. 
    await (a = processing());
    console.log(a);         // Promise { true }
    b = await (processing());
    console.log(b);         // true
    c = processing();
    console.log(c);         // Promise { <pending> }
}
console.log(helper());
let y = Promise.resolve("Hey");
console.log(typeof y);
console.log("End");
// OUTPUT :
// Start
// Starting fetching from url  www.google.com
// Promise { <pending> }
// object
// End
// completed fetching the data
// hello
// Downloading await completed
// Started writing  Dummy data  in a file.
// File written successfully
// file writing await completed
// Upload started on url drive.google.com filename is  result.txt
// Uploading done
// Completed process with response : SUCCESS
// Promise { true }
```
- `While async/await itself does not directly add tasks to the microtask queue, the promises returned by await expressions do add their associated callbacks to the microtask queue, allowing for asynchronous execution with higher priority than regular tasks or macrotasks.`

- ***`await can also be used for expressions other than a Promise.`***
    - eg 1:-
    ```js

    ```


## Microtask Queue :-
- In JavaScript, the microtask queue, also known as the job queue, is a queue that holds microtasks.
- Microtasks are tasks that need to be executed asynchronously, but with higher priority than regular tasks or macrotasks.
- When the JavaScript engine finishes executing the current task and the call stack is empty, it checks the microtask queue and executes any pending microtasks before moving on to the next task or macrotask.
- The following operations typically add tasks to the microtask queue:
    - `Promise callbacks` : 
        - When a promise is resolved or rejected, its associated callbacks are added to the microtask queue. This allows you to perform actions in response to the fulfillment or rejection of a promise.

    - `Mutation Observer callbacks` : 
        - Mutation Observers are used to watch for changes in the DOM. When a mutation occurs, the associated observer callbacks are added to the microtask queue. This allows you to react to changes in the DOM structure or content.

    - `process.nextTick (Node.js specific)` : 
        - In Node.js, the process.nextTick function allows you to schedule a callback to be executed on the next pass of the event loop, but before any other I/O events or timers. The callback added using process.nextTick is added to the microtask queue.

- It's important to note that the microtask queue has higher priority than the regular task queue (also known as the macrotask queue). This means that when the JavaScript engine is ready to execute tasks, it will first process all the pending microtasks in the microtask queue before moving on to the next macrotask in the event loop.

- This prioritization of microtasks is crucial for maintaining consistency and avoiding issues like callback starvation, as it allows for immediate handling of microtasks before progressing to other tasks or I/O operations.

## `Starvation` in js :-
- In the context of JavaScript, "starvation" typically refers to a situation where a certain task or process is unable to make progress or complete its execution due to other tasks or processes monopolizing system resources or blocking the event loop. 
- This can result in delayed or blocked execution of the starved task, causing performance issues or unresponsiveness in the application.
- Starvation can occur in various scenarios, including:
    - `Synchronous blocking operations` : 
        - JavaScript is single-threaded, and synchronous blocking operations can cause other tasks or event handlers to be delayed or starved until the blocking operation completes. 
        - For example, if a computationally intensive task is performed on the main thread without yielding control, it can block the execution of other tasks and make the application unresponsive.

    - `Long-running tasks` : 
        - If a task takes a long time to complete without yielding control back to the event loop, it can starve other tasks from executing. 
        - This can happen with synchronous network requests, complex calculations, or large data processing tasks.

    - `Inefficient event handling` : 
        - If an event handler takes a significant amount of time to execute, it can cause other events in the queue to be delayed or starved. 
        - This can happen if the event handler performs a time-consuming operation or has a high computational complexity.
