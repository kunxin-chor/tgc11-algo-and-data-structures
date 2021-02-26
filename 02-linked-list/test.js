const LinkedList = require('./LinkedList');
const Node = require('./Node');
let numbers = new LinkedList();

console.log("Count =" + numbers.count())

numbers.addToBack(new Node(101));
numbers.addToBack(new Node(102));
numbers.addToBack(new Node(103));
numbers.addToBack(new Node(104));

console.log("Count =" + numbers.count())

numbers.insertAt(2, new Node(-999));
numbers.insertAt(0, new Node(0));

numbers.display()
console.log("Testing delete from front");
numbers.deleteAt(0);
numbers.display();

console.log("Testing deleting index 2")
numbers.deleteAt(2);
numbers.display();

console.log("Test getAt index 3 => ", numbers.getAt(3));

console.log("Does 103 exists in the list? =>", numbers.contains(103));
console.log("Does 999 exists in the list? =>", numbers.contains(-999));