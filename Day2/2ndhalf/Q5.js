

const string = "(*)";
const stack = [];
let top = -1;

function push(val) {
  if (top === string.length - 1) {
    console.log("Stack is full.");
  } else {
    top++;
    stack[top] = val;
  }
}

function pop() {
  if (top === -1) {
    console.log("Stack is empty.");
  } else {
    top--;
  }
}

function isMatching(a, b) {
  if (a === "[" && b === "]") {
    return true;
  }
  if (a === "{" && b === "}") {
    return true;
  }
  if (a === "(" && b === ")") {
    return true;
  }
  return false;
}

for (let i = 0; i < string.length; i++) {
  if (string[i] === "{" || string[i] === "(" || string[i] === "[") {
    push(string[i]);
    // console.log(stack);
  } 
  
  else {
    if (!isMatching(stack[top], string[i])) {
      console.log("Not matching");
    } else {
      pop();
    }
  }
}

if (top === -1) {
  console.log("match");
} else {
  console.log("Not match");
}
