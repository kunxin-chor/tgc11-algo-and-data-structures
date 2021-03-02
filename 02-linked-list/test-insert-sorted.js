const LinkedList = require('./LinkedList');
const Node = require('./Node');

let numbers = new LinkedList();
numbers.insertSorted(5);
numbers.insertSorted(1);
numbers.insertSorted(4);
numbers.insertSorted(10);

numbers.display()