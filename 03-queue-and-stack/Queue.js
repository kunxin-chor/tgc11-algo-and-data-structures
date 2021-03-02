const LinkedList = require('./LinkedList');
const Node = require('./Node');

class Queue {
    constructor(){
        this.data = new LinkedList();
    }
    enqueue(newData) {
        // add to a qeueue
        this.data.addToBack(new Node(newData));
    }
    dequeue() {
        // remove from a queue
        let removed = this.data.getAt(0);
        this.data.deleteAt(0);
        return removed;
    }
    peek() {
        return this.data.getAt(0);
    }
}

module.exports = Queue;