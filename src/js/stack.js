// Stack
class Stack {
  #items = []

  push(item) {
    this.#items.push(item);
  }
  pop() {
    return this.#items.pop();
  }
  peek() {
    return this.#items[this.#items.length - 1];
  }
  size() {
    return this.#items.length;
  }
  isEmpty() {
    return this.#items.length == 0;
  }
  getItems() {
    return [...this.#items];
  }
}

const stack = new Stack();

stack.push("Pedro");
stack.push("Juan");
stack.push("Luis");
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());

// Html
const inputName = document.querySelector("#name");
const divContent = document.querySelector("#content");

const stackNames = new Stack();

const addToStack = () => {
  stackNames.push(inputName.value);
  showNames();
  inputName.value = "";
  inputName.focus();
}

const deleteToStack = () => {
  stackNames.pop();
  showNames();
  inputName.focus();
}

const showNames = () => {
  const items = stackNames.getItems();
  divContent.innerHTML = "";
  items.forEach(item => divContent.innerHTML += `<p>${item}</p>`);
}

