Array.prototype.myFilter = function (callback) {
    let newArray = []
    for( let i=0; i < this.length; i++) {
        if(callback(this[i])) newArray.push(this[i])
    }

    return newArray;
}


const array1 = [1,2,3,4,5,7,8,1213,1221321323,134314317413,127832,12242,111,242442,56];

const newArray = array1.myFilter(x => x%2 ==0)
console.log(newArray)
// 2 4 8 127832 12242 242442 56