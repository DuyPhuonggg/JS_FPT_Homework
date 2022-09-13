
// tìm 2 phần tử có tổng lớn nhất trong 1 mảng
// VD: [1,7,9,2,5,3,8] => [9,8]

const array = [12099028,124124,412461,123291,12431,122,5325325,1122,24,6768,23245,852];

const sortArray = array.sort((a,b) => a-b);

const greatElementOfArray = [sortArray[sortArray.length-2],sortArray[sortArray.length-1]];

console.log(greatElementOfArray) // [ 5325325, 12099028 ]


