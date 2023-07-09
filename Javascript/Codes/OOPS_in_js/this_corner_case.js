const obj1 = {
    name: 'Nikhil',
    display: function() {
        console.log(this, 'is the calling site.');
    }
}

const obj2 = {
    name: 'Nikhil',
    display: () => {
        console.log(this, 'is the calling site.');
    }
}

obj1.display();     // { name: 'Nikhil', display: [Function: display] } is the calling site.

obj2.display();     // {} is the calling site.