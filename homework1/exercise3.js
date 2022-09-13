// Tìm các cặp phần tử có tổng bằng 1 số cho trước
// VD: [1,7,9,2,5,3,8]; sum = 10   => [1,9] ; [7,3]; [2,8]

const array = [1232,123,3432,6544,123213123,12,34212,123213,4124,1221,999,1];

const coppyArray = [...array];

const SUM = 1000;

const arrayOfElement = [];

array.forEach( (x) => {
    for (let i=0; i<coppyArray.length;i++) {
    if((x+coppyArray[i]) == SUM) {
        
        return arrayOfElement.push([x,coppyArray[i]]);
    }}
})

// remove các cặp giống nhau

lastResult = [...new Set(arrayOfElement)]

console.log(arrayOfElement) // [ [ 999, 1 ], [ 1, 999 ] ] 
// đang suy nghĩ tiếp làm sao để không lặp lại cặp đó

