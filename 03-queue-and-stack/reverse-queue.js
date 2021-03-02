const Queue = require('./Queue');
const Stack = require('./Stack');

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

let stack = new Stack();

while (queue.peek() != null) {
    let item = queue.dequeue();
    stack.push(item);
}

while (stack.peek() != null) {
    let item = stack.pop();
    queue.enqueue(item);
}

while (queue.peek() != null) {
    let item = queue.dequeue();
    console.log(item);
}