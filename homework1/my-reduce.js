Array.prototype.myReduce = function(callback, initialValue) {

    let currentValue = initialValue;

    for( let i=0; i < this.length;i++) {
         currentValue = callback(this[i]);
        
    }

    return currentValue;
}

const array1 = [1,2,3,4,5]
const sum = array1.myReduce( a=> a+a ,{});

console.log(sum)