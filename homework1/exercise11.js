// trả về các phần tử giống nhau của 2 mảng

const array1 =[1232,1354234,5234,12213213,123,'phuong','huy',true,1,2,3];
const array2 = [1232,1111,1111,2,123,5,'huy','phuong',true];

const newArray = []
let length1 = array1.length;
let length2 = array2.length;
if(array1.length >= array2.length) {
    length1 = array2.length;
    length2 = array1.length;
} 

for (let i=0; i<length1;i++) {
    for (let j =0; j<length2;j++) {
        if(array2[j] == array1[i]) {
            newArray.push(array1[i])
        }
    }
}

console.log(newArray);


