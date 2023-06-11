let x = Promise.resolve("Nikhil");
console.log("Start");
x.then(function exec_1(value) {
    console.log("1 -- ", value);
    return "Gautam 1";
})
.then(function exec_2(value) {
    console.log("2 -- ", value);
    return "Gautam 2";
});
x.then(function exec_3(value) {
    console.log("3 -- ", value);
    return "Gautam 3";
});
console.log("End");

// OUTPUT :
// Start
// End
// 1 --  Nikhil
// 3 --  Nikhil
// 2 --  Gautam 1