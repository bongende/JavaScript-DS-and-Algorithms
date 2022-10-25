class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0
        for (let i = 0 ; i < key.length ; i++) {
            hash = (hash + key.charCodeAt(i) * 23 ) % this.dataMap.length;
        }
        return hash;
    }

    set (key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        } 
        this.dataMap[index].push([key, value]);
        return this;
    }

    get (key) {
        let index = this._hash(key)
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length ; i++) {
                if (this.dataMap[index][i][0] === key ) {
                    return this.dataMap[index][i][1];
                }
        }
        return undefined;
        }
    }

    keys () {
        let alKeys = [];
        for (let i = 0 ; i < this.dataMap.length ; i++) {
            if (this.dataMap[i]) {
                for (let  j = 0 ; j < this.dataMap[i].length ; j++ ) {
                    alKeys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return alKeys;
    }
}

let myHashTable = new HashTable();
myHashTable.set("pen", 45);
myHashTable.set("copybook", 100);
myHashTable.set("pencil", 75);
myHashTable.set("book", 37);
// console.log(myHashTable.get("pen"));
console.log(myHashTable.keys());
// console.log(myHashTable.get("line"));

/*
for (let i = 0 ; i < myHashTable.dataMap.length ; i++) {
    console.log(myHashTable.dataMap[i]);
    console.log("----------------------");
}
*/



// console.log(myHashTable);


//* ================== HASH TABLES ======================
/*
! there is already a built'in hash table in javascript that is "Object";
caracteristique of a nail
        ! they are one way
        ! deterministic (alway porduce same result)
*/
//* Collision 
    /*
        when item map i a same rome in a hash tables
        to andle the collision problem, we use method such as :
            * Separate Chaining
            * Linerar Probing (open addressing)
            * or using a linked list in it;
    */
//* Big O of a HashTable
    /*
    hash methode : O(1)
    set and get : O(1) in best case; and O(n) in worst case;
    */