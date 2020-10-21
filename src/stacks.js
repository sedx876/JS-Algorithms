// //Stacks
// //functions: push, pop, peek, length

// let letters = []
// let word = 'racecar'
// let rword = ''

// //put letters of word into stack
// for (let i = 0; i < word.length; i++){
//   letters.push(word[i])
// }

// //pop off the stack in reverse order
// for (let i = 0; i < word.length; i++){
//   rword += letters.pop()
// }

// if (rword === word) {
//   console.log(word + " is a palindrome.")
// }else {
//   console.log(word + " is not a palindrome.")
// }

// //Creates a stack 
// let Stack = function() {
//   this.count = 0;
//   this.storage = {};


// //Adds a value onto the end of the stack
// this.push = function(value) {
//   this.storage[this.count] = value;
//   this.count++;
// }

// //Removes and returns the value at the end of the stack
// this.pop = function() {
//   if (this.count === 0){
//     return undefined;
//   }
//   this.count--;
//   let result = this.storage[this.count];
//   delete this.storage[this.count];
//   return result;
// }

// this.size = function() {
//   return this.count;
// }

// //Return the value at the end of the stack
// this.peek = function(){
//   return this.storage[this.count-1];
// }
// }

// let myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("freeCodeCamp");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

class Stack {
  constructor() {
      this.items = []
      this.count = 0
  }

  // Add element to top of stack
  push(element) {
      this.items[this.count] = element
      console.log(`${element} added to ${this.count}`)
      this.count += 1
      return this.count - 1
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop() {
      if(this.count == 0) return undefined
      let deleteItem = this.items[this.count - 1]
      this.count -= 1
      console.log(`${deleteItem} removed`)
      return deleteItem
  }

  // Check top element in stack
  peek() {
      console.log(`Top element is ${this.items[this.count - 1]}`)
      return this.items[this.count - 1]
  }

  // Check if stack is empty
  isEmpty() {
      console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
      return this.count == 0
  }

  // Check size of stack
  size() {
      console.log(`${this.count} elements in stack`)
      return this.count
  }

  // Print elements in stack
  print() {
      let str = ''
      for(let i = 0; i < this.count; i++) {
          str += this.items[i] + ' '
      }
      return str
  }

  // Clear stack
  clear() {
      this.items = []
      this.count = 0
      console.log('Stack cleared..')
      return this.items
  }
}

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)

stack.peek()

stack.push(300)

console.log(stack.print())

stack.pop()
stack.pop()

stack.clear()

console.log(stack.print())

stack.size()

stack.isEmpty()