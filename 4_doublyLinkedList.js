class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor (value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp
    }
    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
        }
        return temp;
    }
    get (index) {
        if (index < 0 || index >= this.length) return false;
        let temp = this.head;
        if (index < this.length/2) {
            for (let i = 0 ; i < index ; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1 ; i > index ; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }
    set (index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        let newNode = new Node(value);
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index <  0 || index > this.length) return false;
        let after = this.get(index);
        let before = after.prev;
        newNode.next = after;
        newNode.prev = before;
        after.prev = newNode;
        before.next = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if (index === 0) return this.shift(index);
        if (index === this.length-1) return this.pop();
        if (index < 0 || index >= this.length) return false;
        let temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

}

const myDLkdList = new DoublyLinkedList(55);                    // 55
myDLkdList.push(24);                                              // 55 - 24
// myDLkdList.pop();
myDLkdList.push(30);                                                // 55 - 24 - 30
myDLkdList.unshift(70);                                             // 70 - 55 - 24 - 30
myDLkdList.insert(1,10);                                             // 70 - 10 - 55 - 24 - 30
myDLkdList.remove(1);                                             // 70 - 55 - 24 - 30
// myDLkdList.shift();
// console.log("Searching for value in index 3\t", myDLkdList.get(3));


console.log(myDLkdList);
console.log(myDLkdList.set(2,7));
// console.log(myDLkdList.get(2));

//* ================== Doubly Linked Lists ======================