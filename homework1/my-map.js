// method myMap()
Array.prototype.myMap = function (callback) {
  let newArray = [];

  for(let i=0; i< this.length; i++) {
    let counter = callback(this[i]) ;
    newArray.push(counter);
  }
  return newArray;
}

const array1 = [1,2,3,4,5];

const evenNumber = array1.myMap(x => x*2);

console.log(evenNumber);
// 2 4 6 8 10