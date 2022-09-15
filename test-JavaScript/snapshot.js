// Modify the implementation of the Snapshot class so that an array stored
// in the snapshot is not affected by modifications to either the original or restored array.

class Snapshot {
    constructor(array) {
        this.arr = [...array];
    }

    restore() {
        return [...this.arr];
    }
}

var array = [1, 2];
const snap = new Snapshot(array);
array[0] = 3;
array = snap.restore();
console.log(array.join()); //It should log "1,2"
array.push(4);
array = snap.restore();
console.log(array.join()); //It should log "1,2"
