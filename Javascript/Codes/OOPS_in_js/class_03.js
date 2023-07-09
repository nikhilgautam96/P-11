class Product {
    // Static property
    static x = '10';
}

const product1 = new Product();
const product2 = new Product();

console.log(Product.x);  // Output: '10'
console.log(product1.x); // Output: undefined
console.log(product2.x); // Output: undefined

// Adding property to prototype
Product.prototype.x = '20';

console.log(Product.x);  // Output: '10'
console.log(product1.x); // Output: '20'
console.log(product2.x); // Output: '20'

product1.x = '30';
console.log(Product.x);  // Output: '10'
console.log(product1.x); // Output: '30'
console.log(product2.x); // Output: '20'

console.log(product1);
console.log(product2);

Product.y = 'nik';
console.log(Product);
console.log(Product.y);
console.log(product1.y);
console.log(product2.y);

