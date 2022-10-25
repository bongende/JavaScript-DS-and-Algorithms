class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//* ================== BINARY SEARCH STRREES ======================

class BST {
    constructor() {
        this.root = null;
        this.length = 0;
    }
    insert (value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            this.length++;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value ) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    this.length++;
                    return this;
                } 
                temp = temp.left;
            } else  {
                if (!temp.right) {
                    temp.right = newNode
                    this.length++;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
    containt (value) {
        if (!this.root) return false
        let temp = this.root;
        while(temp) {
            if (temp.value === value) return true;
            if (temp.value > value) {
                temp = temp.left;
            } else if (temp.value < value) {
                temp = temp.right;
            }
        }
        return false
    }
    
    
}

const myBST = new BST();
myBST.insert(567)
myBST.insert(37)
myBST.insert(39)
myBST.insert(570)
myBST.insert(580)
console.log(myBST.containt(39))

console.log(myBST);


//* ================== TREES ======================
//* Binary Search Trees
/*
*Types :
    ? Complete : 
    ? Full tree : every item contain 0 or 2 childs 
    ? Perfect : every line of items are ful

    Elements :
            ?- Parent
            ?- Child
            ?- leaf 
*/

//* Binary Search Trees Big O

    /*
    we have O(log n) for all linear search, insertion, removing, in a best case and a O(n) where wwe have a worst case
    and alse a theta O notation will also be a O(log n)
    and effectively the runtime is for O(log n)
    */

//*

/*
!/*
!       let iterate = (newNode) => {    
            if( !temp  ) {                            //-> !temp.left && !temp.right
                newNode.value < temp.value ? temp.left = newNode : temp.right = newNode;
            } else {
                if (newNode.value < temp.value ) {
                    temp = temp.left;
                    return iterate(newNode);
                } else {
                    temp = temp.right;
                    return iterate(newNode);
                }
            }
        }
        iterate(newNode);
        */ 