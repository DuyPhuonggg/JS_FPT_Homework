// 5. Lấy ra 1 mảng mới gồm các phần tử trùng nhau trong 2 mảng, mỗi phần tử xuất hiện đúng 1 lần ở mảng mới
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
// const arr2 = [3, 5, 9, 10, 88];
// => [3,5,9]

const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];

// remove các phần tử giống nhau
const newArr1 = [...new Set(arr1)]
const newArr2 = [...new Set(arr2)]

//tạo 1 mảng mới rỗng
const newArray = []

//xét điều kiện các phần tử trùng nhau
newArr1.forEach( (v1) => {
    newArr2.forEach((v2) => { 
        if(v2===v1) newArray.push(v2);
    });
})

// hiển thị mảng mới
console.log(newArray) // [3,5,9]