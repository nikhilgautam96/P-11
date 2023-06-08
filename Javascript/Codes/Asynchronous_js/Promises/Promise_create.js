// Write a function to download some data from a url, and not use callbacks 
// instead use promises.
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