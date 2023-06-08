# Promises :- 
- Promises are `special JS objects` that are also considered as `readibility enhancers`.
- They get immediately returned from a function setup to return a promise.
- They act as `placeholders` for the data that we hope to get back from some future task.
- we also attach the functionality that we want to defer until the future task is done.
- And promise automatically handles execution of this functionality.
- Promises do 2 things one inside JS and 1 outside JS.
    1. It signs up the process required to run in the runtime & gives a placeholder in js, which has a value property.
    2. 
- ` A promise is an object that is used for the eventual results of a deferred (and possibly asynchronous) computation.`
- `Any promise object is in one three mutually exclusive states : fulfilled, rejected & pending.`
- `A promise is said to be settled if it is not pending, ie. it is either fulfilled or rejected.`

## How promises work behind the scene :-
- The promise object we create has 4 major properties.
    1. `Status / State`
        - It shows current promise's state.
            1. `pending state`
            2. `fulfilled state`   : gives a notion of SUCCESS.
            3. `Rejected state`    : gives a notion of ERROR.
    2. `Value`
        - when status of the promise is pending, the value property is `undefined`.
        - The moment promise is resolved(status --> fulfilled), the value property is updated from undefined to the new value (this value we can consider as the `returned value / resolved value`).
        - so the value property acts as a placeholder till the time promise finishes.
    3. `onFullfillment`
        - This is an array, which contains functions(can be multiple as well) that we attach to our promise object.
        - to a promise object we can attach some functions using `.then()` method.
        - when the value property is updated from undefined, to a new value, JS gives chance to these attached functions one by one with the value property as their argument (if there is no piece of code left in call stack and in the global code).
    4. `onReject`
- ![promise_lifecycle](./Images/Screenshot%202023-06-08%20at%204.38.37%20PM.png)
        
## 1. How to create a promise :-
- To create a promise call the promise constructor.
- The promise constructor takes a callback as an argument.
- The callback passed expets 2 arguments `(resolve, reject)`.
- inside the constructor write your code logic.
- if we want to return something on SUCCESS, then call the resolve function with whatever value you want to return.
- eg :-
```js
function fetchData(url) {
    return new Promise(function(resolve, reject) {
        console.log("Starting fetching from url ", url);
        setTimeout(function process() {
            let data = "Dummy data";
            console.log("completed fetching the data");
            // somehow e need to return the data? - TODO
            resolve(data);  // return some data on SUCCESS.
        });
    });
}
```

## 2. How to consume a promise :-