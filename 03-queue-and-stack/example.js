const Queue = require('./Queue');
const Stack = require('./Stack');

let q1 = new Queue();
q1.enqueue(101);
q1.enqueue(102);
q1.enqueue(103);

while (q1.peek() != null) {
    let item = q1.dequeue();
    console.log(item);
}