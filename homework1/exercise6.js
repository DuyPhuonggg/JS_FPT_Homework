// 6. Từ ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'] trả về object {'face': 2, 'zalo': 3, 'gmail':1}

const arr1 = ['zalo', 'face', 'gmail', 'zalo', 'zalo','face'];
//remove các phần tử giống nhau
const arrayNoDuplicate = [...new Set(arr1)];

//tạo object rỗng
const object = {}

arrayNoDuplicate.forEach( (v1) => {
    // đếm số lần các phần tử xuất hiện duy nhất
    let counter = 0
    arr1.forEach((v2) => { 
        if(v2===v1) return counter++;
    });
    //tạo thuộc tính và gán biến đếm
    return object[v1] = counter++;
})

console.log(object); // { zalo: 3, face: 2, gmail: 1 }


