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
  
  function evenAfterOdd() {
    let odd = head;
    let even = head.link;
    let firstEven = even;
  
    while (odd.link !== null && even.link !== null) {
      odd.link = even.link;
      odd = odd.link;
      even.link = odd.link;
      even = even.link;
    }
  
    odd.link = firstEven;
  
    // If the last node is odd, make sure to set its link to null
    if (odd.link === null) {
      even.link = null;
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
  insertEnd(2);
  insertEnd(3);
  insertEnd(4);
  insertEnd(5);
  
  evenAfterOdd();
  dispLink();
  