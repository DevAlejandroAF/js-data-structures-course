// Variables
// create variables
var v1 = "Hello"; // Do not use var anymore
let v2 = 4;
const v3 = "Hello world!"; // constant variable
// variables values
// Numbers
let v4 = 1; // int variable
let v5 = 4.5; // float variable
// String
let v6 = "Hello";
// Boolean
let v7 = true;
// Object literal
const v8 = {
  name: "john",
  lastName: "Doe"
};
// Array
const v9 = [1, 2, 3];
// Map

// Set


// Conditionals
// If
let exist = "Exist";
if (exist == "Exist") {
  console.log("If: Exist");
} else if (exist == "Does not exist") {
  console.log("If: Does not exist");
} else {
  console.log("If: Error");
}
// If Ternary
exist ? console.log("Ternary: Exist") : console.log("Ternary: Does not exist");
// Switch
switch (exist) {
  case "Exist":
    console.log("Switch: Exist");
    break;
  case "Does not exist":
    console.log("Switch: Does not exist");
    break;
  default:
    console.log("Switch: Error")
    break;
}

// Loops
// For
let limit = 10;
for (let i = 0; i < limit; i++) {
  console.log(`For: i = ${i}`);
}
// For of
let items = [1, "second", false, 4, "5"];
for (let item of items) {
  console.log(`For of: item = ${item}`);
}
// While
i = 0;
while (i < limit) {
  console.log(`While: i = ${i}`);
  i++;
}
// Do while
i = 0;
do {
  console.log(`Do while: i = ${i}`);
  i++;
} while (i < limit);

// Functions
function add(num1, num2) {
  return num1 + num2;
}

const sub = function(num1, num2) {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

console.log(add(4, 5));
console.log(sub(10, 2));
console.log(multiply(5, 3));

// Classes
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hello I'm ${this.name} ${this.lastName}`;
  }
}
// Inheritance
class Student extends Person {
  constructor(name, lastName, career) {
    super(name, lastName);
    this.career = career;
  }

  sayHi() {
    return `Hello I'm ${this.name} ${this.lastName}, and I'm studying ${this.career}`;
  } // Supercharge method
}

const john = new Person("John", "Doe");
const jane = new Student("Jane", "Doe", "Art");
console.log(john.sayHi());
console.log(jane.sayHi());

// Promises
const isAuthenticated = true;
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isAuthenticated) {
      resolve("Authenticated");
    } else {
      reject("Error: Not Authenticated");
    }
  }, 2000);
});

myPromise
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data));

// Async Await
const request = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const printData = async () => {
  const data = await request("https://jsonplaceholder.typicode.com/users");
  console.log(data);
}

printData();

