const Queue = require('./Queue');
const Stack = require('./Stack');

let s1 = new Stack();
s1.push(101);
s1.push(102);
s1.push(103);
s1.push(104);

while (s1.peek() != null) {
    let item = s1.pop();
    console.log(item);
}