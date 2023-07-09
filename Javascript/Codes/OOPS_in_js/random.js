// setTimeout() : in browser returns a integer, while in nodejs it returns a object.
// x = setTimeout(function fun() {
//     console.log("Hey");
// }, 1000);
// console.log(x);


class Person {
    species = 'Homo sapiens'; // Shared property across all instances
  
    constructor(name, age) {
      this.name = name; // Instance-specific property
      this.age = age;   // Instance-specific property
      console.log(this);
    }
  }
  
  console.log(Person.species); // Accessing the static property from the class itself
  
  const person1 = new Person('John', 25);
  console.log(person1.species); // Accessing the static property from an instance
  


  const person2 = new Person('Jane', 30);
  console.log(person2.species); // Accessing the static property from another instance
  
  console.log(typeof Object);   // function