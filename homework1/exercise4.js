//  Lấy ra 1 mảng mới từ mảng cho trước sao cho các phần tử chỉ xuất hiện 1 lần (sử dụng Set)
// VD: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]

const dupArray = [1,2,3,1,2,3,4,5,6,4];

const filterArray = [...new Set(dupArray)];

console.log(filterArray) //[ 1, 2, 3, 4, 5, 6 ]