function Product(n) {
    this.name = 'Nikhil';
}

let d = new Product('iphone');
Product.prototype.display = () => console.log("Hey I am added during runtime.");

d.display();    // Hey I am added during runtime.