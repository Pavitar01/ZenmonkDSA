class Node {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}

let head = null;

function insertEnd(d) {
  let ptr = new Node(d);
  ptr.link = null;

  if (head === null) {
    head = ptr;
  } else {
    let temp = head;
    while (temp.link !== null) {
      temp = temp.link;
    }
    temp.link = ptr;
  }
}

function removeDuplicates() {
  let uniqueSet = new Set();
  let current = head;
  let prev = null;

  while (current !== null) {
    if (uniqueSet.has(current.data)) {
      prev.link = current.link;
    } else {
      uniqueSet.add(current.data);
      prev = current;
    }
    current = current.link;
  }
}

function dispLink() {
  let temp = head;
  while (temp !== null) {
    console.log(temp.data);
    temp = temp.link;
  }
}

insertEnd(1);
insertEnd(1);
insertEnd(1);
insertEnd(2);
insertEnd(3);

removeDuplicates();
dispLink();
