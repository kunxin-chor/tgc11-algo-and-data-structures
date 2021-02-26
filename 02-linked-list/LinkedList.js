const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // add to back
    addToBack(newNode) {
        // case 1:
        // if there is nothing in the list
        // set head to the new node that we are adding
        if (this.head == null) {
            this.head = newNode
        } else {
            // case 2: if there is already something in the list
            // find the last node and set its next to the new node

            let current = this.head;
            while (current.getNext() != null) {
                current = current.getNext();
            }
            // current will be at the last node
            current.setNext(newNode);
        }
    }

    display() {
        let current = this.head;
        while (current != null) {
            console.log(current.getData());
            current = current.getNext();
        }
    }
}

module.exports = LinkedList;