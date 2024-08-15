class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    this.length++;
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  show() {
    let current = this.head;
    console.log("--------------------------------");
    console.log(`Head: ${this.head?.value}`);
    console.log(`Tail: ${this.tail?.value}`);
    while (current !== null) {
      console.log(`Value: ${current.value}\nNext: ${current.next?.value}\nPrevious: ${current.prev?.value}`);
      current = current.next;
    }
  }

  showReverse() {
    let current = this.tail;
    console.log("--------------------------------");
    console.log(`Head: ${this.head?.value}`);
    console.log(`Tail: ${this.tail?.value}`);
    while (current !== null) {
      console.log(`Value: ${current.value}\nNext: ${current.next?.value}\nPrevious: ${current.prev?.value}`);
      current = current.prev;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  delete(value) {
    if (this.length === 0) return;
    if (this.head.value === value) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.length--;
    } else if (this.tail.value === value) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next.value === value) {
          current.next = current.next.next;
          current.next.prev = current;
          this.length--;
          break;
        }
        current = current.next;
      }
    }
  }
}

const list = new DoublyLinkedList();

list.add(1);
list.add(2);
list.add(3);
list.show();
list.showReverse();
list.delete(1);
list.show();

// Html
const title = document.querySelector("#title");
const image = document.querySelector("#image");
const divInfo = document.querySelector("#info");

const moviesLinkedList = new DoublyLinkedList();
moviesLinkedList.add({
  name: "Hereditary",
  poster: "public/images/hereditary-poster.jpg"
});
moviesLinkedList.add({
  name: "Midsommar",
  poster: "public/images/midsommar-poster.jpg"
});
moviesLinkedList.add({
  name: "The witch",
  poster: "public/images/the-witch-poster.jpg"
});

let movie = moviesLinkedList.head;
const showMovie = () => {
  title.innerHTML = movie.value.name;
  image.src = movie.value.poster;
  const movieNext = movie.next?.value;
  const moviePrev = movie.prev?.value;
  divInfo.innerHTML = (moviePrev ? `Previous movie: ${moviePrev.name}` : 'No previous movie to show');
  divInfo.innerHTML += (movieNext ? ` | Next movie: ${movieNext.name}` : ' | No more movies to show');
}

const nextMovie = () => {
  if (movie.next) {
    movie = movie.next;
    showMovie();
  }
}

const prevMovie = () => {
  if (movie.prev) {
    movie = movie.prev;
    showMovie();
  }
}

showMovie();
