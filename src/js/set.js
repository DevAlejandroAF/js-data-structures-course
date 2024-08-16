const set = new Set();

// Add
set.add(5);
set.add(1);
set.add(8);

console.log(set);

set.add(1); // Isn't added
set.add(10);

console.log(set);

set.add({
  "name": "Juan"
});
set.add({
  "name": "Juan"
}); // added

console.log(set);

const people = {
  "name": "Juan"
}; // added

set.add(people);
set.add(people); // Isn't added

console.log(set);

// Delete
set.delete(people);
set.delete({
  "name": "Juan"
}); // Isn't deleted
set.delete(8);

console.log(set);

// Find
const book = {
  "name": "The lord of the rings"
};

set.add(book);

if (set.has(1)) {
  console.log("[+] Exists!");
} else {
  console.log("[!] Does not exist")
};

if (set.has({ "name": "The lord of the rings" })) {
  console.log("[+] Exists!");
} else {
  console.log("[!] Does not exist")
}; // Does not find

if (set.has(book)) {
  console.log("[+] Exists!");
} else {
  console.log("[!] Does not exist")
};

// Array in set
const array = [5, 4, 3, 2, 1, 2, 3, 4, 5, 9];

const set2 = new Set(array);

console.log(set2);

// browse
for (const item of set) {
  console.log(item);
};

// Clear
set.clear();
console.log(set);

// Html example
const functions = new Set();

const addAction = (fn) => {
  functions.add(fn);
  console.log(functions);
}

const action1 = () => {
  console.log("Action 1");
}

const action2 = () => {
  console.log("Action 2");
}

const action3 = () => {
  console.log("Action 3");
}

const action4 = () => {
  console.log("Action 4");
}

const run = () => {
  for (const fn of functions) {
    fn();
  }
}
