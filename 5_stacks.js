class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor (value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    pop () {
        if (!this.top) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}


const myStack = new Stack(8);
myStack.push(48)
myStack.push(2)
myStack.push(100)
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())


console.log(myStack);

//* ================== STACKS (LIFO) ======================