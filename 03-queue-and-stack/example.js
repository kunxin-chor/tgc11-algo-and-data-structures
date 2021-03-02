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

// given a queue, how do only keep the items that are even
// numbers

let q2 = new Queue();
let q3 = new Queue();

q2.enqueue(1);
q2.enqueue(3);
q2.enqueue(4);
q2.enqueue(5);
q2.enqueue(6);

while (q2.peek() != null) {
    let item = q2.dequeue();
    if (item % 2 ==0) {
        q3.enqueue(item);
    }
}

while (q3.peek() != null) {
    q2.enqueue(q3.dequeue());
}