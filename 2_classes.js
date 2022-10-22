//*================ CLASSES ==================

class Cookies {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
    setColo(color) {
        this.color = color;
    }
}

//* ===================== POINTERS =========================

//! we say like this

let obj1 = {num : 11};
let obj2 = obj1;

//! pinter can be move to different place
