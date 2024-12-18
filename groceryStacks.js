// Initialize an empty array to represent the stack
let stack = [];

// Function to get user input using prompt (assuming this runs in a browser environment)
function getGroceryItems() {
  for (let i = 0; i < 5; i++) {
    let item = prompt("Enter a grocery item: ");
    push(item);
  }
}

// Peek function to check if the stack is empty and return the top value
function peek() {
  if (stack.length === 0) {
    console.log("Stack is empty");
    return null;
  } else {
    console.log("Top of stack: " + stack[stack.length - 1]);
    return stack[stack.length - 1];
  }
}

// Push function to add an item to the top of the stack
function push(item) {
  stack.push(item);
  console.log("Item pushed: " + item);
  console.log("Current stack: " + stack);
  peek(); // Peek at the top item after pushing
}

// Pop function to remove the last added item from the stack
function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
    return null;
  } else {
    let removedItem = stack.pop();
    console.log("Item popped: " + removedItem);
    console.log("Current stack: " + stack);
    peek(); // Peek at the top item after popping
    return removedItem;
  }
}

// Main function to get grocery items and demonstrate stack operations
function main() {
  getGroceryItems(); // Get 5 grocery items from the user

  // Demonstrate pop operation
  pop();
  pop();
  pop();
}

// Execute the main function
main();
