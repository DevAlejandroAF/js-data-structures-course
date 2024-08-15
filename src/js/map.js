const map = new Map();

// Insert
map.set(1, "Héctor");
map.set(2, "Ana");
map.set(3, "Juan");
map.set(4, "Carlos");
// console.log(map);
// Modify
map.set(1, "Luis");
// console.log(map);
// Get value
// console.log(map.get(3));
// Exists
// console.log(map.has(2));
// Delete
map.delete(4);
// console.log(map);
// Insert obj
const keyObject = { id: 1, hash: "abc" };
const object = { name: "Luisa", lastName: "Pérez" };
map.set(keyObject, "Karla");
map.set("Luisa", object);
// console.log(map);

// Browse
// for (let value of map.values()) {
//   console.log(value);
// }
// for (let key of map.keys()) {
//   console.log(key);
// }
// for (let item of map) {
//   console.log(item);
// }

// Clear
map.clear();
console.log(map);

// Html example
const textCode = document.querySelector("#code");
const textCustomer = document.querySelector("#customer");
const divContent = document.querySelector("#content");

const customers = new Map();

const add = () => {
  customers.set(textCode.value, textCustomer.value);
  textCustomer.value = "";
  textCode.value = "";
  textCode.focus();
  show();
}

const show = () => {
  divContent.innerHTML = "";
  for (let item of customers) {
    divContent.innerHTML += `
      <div>
        <p><b>${item[0]}</b> ${item[1]}</p>
      </div>
    `
  }
}
