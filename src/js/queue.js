// Queue
class Queue {
  #items = [];

  enqueue(item) {
    this.#items.push(item);
  }
  dequeue() {
    return this.#items.shift();
  }
  isEmpty() {
    return this.#items.length == 0;
  }
  peek() {
    return this.#items[0];
  }
  size() {
    return this.#items.length;
  }
  getItems() {
    return [...this.#items];
  }
}

const queue = new Queue();
queue.enqueue("Pedro");
queue.enqueue("Juan");
queue.enqueue("Luis");
console.log(queue.getItems());
console.log(queue.peek());
queue.dequeue();
console.log(queue.getItems());
console.log(queue.peek());

const requestsQueue = new Queue();

const divRequest = document.querySelector("#request");
const divResult = document.querySelector("#result");
const url = 'https://jsonplaceholder.typicode.com/posts';
let i = 1;

const add = () => {
  requestsQueue.enqueue(i++);
  showRequest();
}

const request = async () => {
  while (!requestsQueue.isEmpty()) {
    const response = await fetch(`${url}/${requestsQueue.dequeue()}`);
    const data = await response.json();
    showRequest();
    divResult.innerHTML = `<p>${data.id} ${data.title}</p>` + divResult.innerHTML;
  }
}

const showRequest = () => {
  const items = requestsQueue.getItems();
  if (items.length == 0) {
    divRequest.innerHTML = "No requests";
    return;
  }
  divRequest.innerHTML = "";
  items.forEach(item => divRequest.innerHTML += `${item} |`);
}
