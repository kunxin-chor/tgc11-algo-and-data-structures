const LinkedList = require('./LinkedList');
const Node = require('./Node');
let numbers = new LinkedList();
numbers.addToBack(new Node(101));
numbers.addToBack(new Node(102));
numbers.addToBack(new Node(103));

numbers.display()