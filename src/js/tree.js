class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) break;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    if (this.root === null) return false;
    let current = this.root;
    // let i = 1;
    while (current) {
      // console.log(i++);
      if (value === current.value) return current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  showInOrder(node) {
    if (node === undefined) {
      node = this.root;
    }
    if (node !== null) {
      this.showInOrder(node.left);
      console.log(node.value);
      this.showInOrder(node.right);
    }
  }

  showInPreOrder(node) {
    if (node === undefined) {
      node = this.root;
    }
    if (node !== null) {
      console.log(node.value);
      this.showInPreOrder(node.left);
      this.showInPreOrder(node.right);
    }
  }

  showInPostOrder(node) {
    if (node === undefined) {
      node = this.root;
    }
    if (node !== null) {
      this.showInPostOrder(node.left);
      this.showInPostOrder(node.right);
      console.log(node.value);
    }
  }
}

// Recursion
const recursiveShowMessage = (n) => {
  if (n === 0) return;
  // console.log(`Message: ${n}`); // uncomment for Reverse
  console.log(`Stack number: ${n}`);
  recursiveShowMessage(n - 1);
  console.log(`Message: ${n}`); // comment for reverse
}

// recursiveShowMessage(5);

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(9);
tree.insert(1);
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(4);
tree.insert(3);

//console.log(tree);
// console.log(tree.search(4));
//tree.showInOrder();
// tree.showInPreOrder();
// tree.showInPostOrder();

// Tree search example
const treeNumbers = new BinarySearchTree();

let json = [];

for (let i = 0; i < 100000; i++) {
  const number = Math.floor(Math.random() * 10000);
  json.push(number);
  treeNumbers.insert(number);
}

console.log(json);

// Lineal search
const numberToSearch = 1499;

let exists = false;

const startLineal = Date.now();

for (let n of json) {
  if (n === numberToSearch) {
    exists = true;
    break;
  }
}

const endLineal = Date.now();

if (exists) {
  console.log("Number exists in lineal search");
} else {
  console.log("Number does NOT exist in lineal search");
}

console.log(`Lineal search takes: ${endLineal - startLineal}ms`);

// Tree search
const startTree = Date.now();

if (treeNumbers.search(numberToSearch)) {
  console.log("Number exists in Tree")
} else {
  console.log("Number does NOT exist in Tree")
}

const endTree = Date.now();

console.log(`Lineal search takes: ${endTree - startTree}ms`);
