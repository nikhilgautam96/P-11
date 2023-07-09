class Product {
    age = 11;
    constructor(name, price) {
        console.log('1',this);
        // Constructor is used to create new real life instances of a class called an object.
        // When we create an object the constructor is the first function that gets called.
        this.name = name;
        this.price = price;
        this.brand = 'Nike';
        console.log('2',this);
    }
    // member functions
    displayProduct() {
        console.log(this.name, this.age, this.brand, this.price);
    }
    buyProduct() {
        
    }
}

let iphone = new Product("Iphone 14 pro", 114000);
let macbook = new Product("Macbook pro", 154000);

console.log(iphone, macbook);
// Product { age: 11, name: 'Iphone 14 pro', price: 114000, brand: 'Nike' } 
// Product { age: 11, name: 'Macbook pro', price: 154000, brand: 'Nike' }

console.log("type is : ", typeof Product);      // function
iphone.displayProduct();