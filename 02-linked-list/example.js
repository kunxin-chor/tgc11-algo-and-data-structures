const Node = require('./Node');

// Every linked list needs to have a head
// The head will refer to the first node in the list
// If the head is null, it meanst the linked list is empty

let head = null; // means empty linked list

// simulate adding a new Node to an empty list
let n1 = new Node('A');
head = n1;

// simulate adding a new Node to back of the list
let n2 = new Node('C');
n1.setNext(n2);

// simulate adding a new node to the back of the list
let n3 = new Node('E');
n2.setNext(n3);