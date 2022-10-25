// Creating a Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// implementation of linked list
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head; // or newNode, maybe
        this.length = 1;
    }
    //* Linked List Push method
    push = (value) => {
        const newNode = new Node(value);
        if (!this.head ) {
            this.head = newNode;
            this.tail = this.head;
        }  else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //* Linked List Pop method
    pop = () => {
        if (!this.head) return undefined ;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    //* Linked List Unshift method
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //* Linked List Shift method
    shift() {
        if (!this.head) return undefined ;
        let tmp = this.head;
        this.head = this.head.next;
        tmp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return tmp;
    }
    //* Linked List Get method
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined ;
        } else {
            let temp = this.head
            for (let i = 0 ; i < index ; i++) {
                temp = temp.next;
            }
            return temp
        }
    }
    //* Linked List Set method
    set(index, value) {
        const temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
        
    }
    //* Linked List Insert method
    insert (index, value) {
        if (index === 0 ) return this.unshift(value);
        if (index === this.length ) return this.push(value);
        if (index < 0 || index > this.length) return false;
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true
    }
    //* Linked List Remove method
    remove(index) {
        if (index === 0 ) return this.shift();
        if (index === this.length - 1) return this.pop();
        if (index < 0 || index >= this.length) return undefined;
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
    //* Linked List Reverse method
    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let prev = null;
        let next = temp.next;
        for(let i = 0; i < this.length; i++ ){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
    
    getAllElm() {
        let temp = this.head;
        console.log("________ Liste Nodes _______")
        for (let i = 0 ; i < this.length ; i++) {
            console.log(`\t\tNode-${i+1} : ${temp.value}\n----------------------------`)
            temp = temp.next;
        }
    }
}

let myLkdList = new LinkedList(7);  // 7
// myLkdList.pop();                   // // null
myLkdList.unshift(200);             // 200, 7
console.log(myLkdList);
myLkdList.push(23);                 // 200 -> 7 -> 23
myLkdList.push(37);                 // 200 -> 7 -> 23 -> 37
// myLkdList.pop();                    // // 200, 23
myLkdList.unshift(50);              // 50 -> 200 -> 7 -> 23 -> 37
console.log("get index 1: ", myLkdList.get(1));
myLkdList.set(0, 555);                  // 555 -> 200 -> 7 -> 23 -> 37
console.log(myLkdList);
// myLkdList.shift();                  //// 200; 23
myLkdList.insert(3, 245);                  // 555 -> 200  -> 7 -> 245 -> 23 -> 37
myLkdList.remove(2);                  // 555 -> 200 -> 245 -> 23 -> 37
myLkdList.reverse();                  // 555 -> 200  -> 245 -> 23 -> 37 in reverse order
console.log(myLkdList)

myLkdList.getAllElm()


//* ================== Linked Lists ======================

//* Big-O
    /*
        {
            push : "0(1)",
            pop : "0(n)",
            unshift : "O(1)"
            shift : "O(1)",
            insert : "O(n)",
            delete : "O(n)",
            searchByValue : "O(n)",
            searchByIndex : "O(n)",
        }
    */

//* Under the Hood


//! My own implemetation of insert method :
        /*
            insert (index, value) {
                let newNode = new Node(value);
                if ( index < 0 || index > this.length) {
                    return false ;
                } else if (index === 0 ) {
                    return this.unshift(value);
                } else if (index === this.length) {
                    return this.push(value);
                } else {
                    if (this.length === 0) {
                        this.head = newNode;
                        this.tail = newNode;
                    } else {
                        let tmp = this.head;
                        let prev  = this.head;
                        for (let i = 0 ; i < index ; i++) {
                            prev = tmp;
                            tmp = tmp.next;
                        }
                        newNode.next = tmp;
                        prev.next = newNode;
                    }
                    this.length++;
                }
                return this;
            }
        */

//! M implementation of set method :
/*
        set (index, value) {
            if (index < 0 || index >= this.length) {
                return undefined;
            } else {
                let temp = this.head;
                for (let i = 0; i < index ; i++) {
                    temp = temp.next;
                }
                temp.value = value;
                return temp;
            }
        }
        */
//! My own implementation of Reverse method
/*
    reverse() {
        let tmp = this.head;
        this.head = this.tail;
        this.tail = tmp;
        let next = tmp.next;
        let prev = null;
        while (next.next) {
            tmp.next = prev;
            prev = tmp;
            tmp = next;
            next = next.next;
        }
        tmp.next = prev;
        next.next = tmp;
        this.head = next;
        return this;
    }
*/
