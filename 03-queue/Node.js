class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getNext() {
        return this.next;
    }

    setNext(next) {
        this.next = next;
    }

    getData() {
        return this.data
    }

    setData(newData) {
        this.data = newData;
    }
}

module.exports = Node;