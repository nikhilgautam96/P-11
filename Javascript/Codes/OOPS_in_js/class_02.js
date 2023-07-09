class Product {
    age = 11;
    constructor(name, price) {
        // Constructor is used to create new real life instances of a class called an object.
        // When we create an object the constructor is the first function that gets called.
        this.name = name;
        this.price = price;
        this.brand = 'Nike';
        // 'price' can be accessed directly without 'this' keyword inside constructor 
        // but not 'age'.
        // console.log(price, age);

        // If we use 'this.age' it will show '11' but,
        // using class name 'Product.age' it gives 'undefined' 
            // --> REASON : Product is an object(function object) and when we do Product.age,
            //            It tries to look for a age property in Product Object.
            //            Product object has its own properties like --> Product.name = 'Product'.
        console.log(this.age, typeof Product, Product, Product.name);     // '11 undefined'
    }
    // member functions
    displayProduct() {
        console.log(this.name, this.age, this.brand, this.price);
        console.log(Product);
    }
    buyProduct() {
        
    }
}

let iphone = new Product("Iphone 14 pro", 114000);
let macbook = new Product("Macbook pro", 154000);
console.log(Product); // printing the 'Product' object calls the 'toString()' method.
function fun() {

}
console.log(fun);
console.log(iphone, macbook);
// Product { age: 11, name: 'Iphone 14 pro', price: 114000, brand: 'Nike' } 
// Product { age: 11, name: 'Macbook pro', price: 154000, brand: 'Nike' }

console.log("type is : ", typeof Product);      // function

console.log(Product.age, iphone.age);
x = {name: 'Nikhil'};
console.log(x, typeof x);
console.log(x.toString());
iphone.displayProduct();
Product.prototype.name = 'nik';
console.log(Product.prototype);
console.log(Product);
iphone.displayProduct();
