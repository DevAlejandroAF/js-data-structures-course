
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  delete(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next.value === value) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
    }
  }
  show() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
  clear() {
    this.head = null;
  }
}

const linkedList = new LinkedList();

linkedList.add('A');
linkedList.add('B');
linkedList.add('C');
console.log(linkedList.size());
linkedList.show();
linkedList.delete('C');
console.log(linkedList.size());
linkedList.show();

// Html
const title = document.querySelector("#title");
const image = document.querySelector("#image");
const divNext = document.querySelector("#next");

const moviesLinkedList = new LinkedList();
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

const showMovie = () => {
  const movie = moviesLinkedList.head.value;
  title.innerHTML = movie.name;
  image.src = movie.poster;
  if (moviesLinkedList.head.next) {
    const movieNext = moviesLinkedList.head.next.value;
    divNext.innerHTML = `Next movie: ${movieNext.name}`;
  } else {
    divNext.innerHTML = "No movies to show";
  }
}

const nextMovie = () => {
  if (moviesLinkedList.head.next) {
    moviesLinkedList.delete(moviesLinkedList.head.value);
    showMovie();
  }
}

showMovie();
