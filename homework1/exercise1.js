// yêu cầu: trả về các phần tử giống nhau của 2 mảng

const array1 = [1232,1354234,5234,12213213,123,'phuong','huy',true,1,1,1,1,1,1,1,2,3];
const array2 = [1232,1111,1111,2,123,5,'huy','phuong',true];

// remove các phần tử giống nhau
const newArray1 = [... new Set(array1)];
const newArray2 = [... new Set(array2)];

const newArray = []
newArray1.forEach( (v) => { 
    for( let i = 0; i< newArray2.length; i++) {
        if(v === newArray2[i]) newArray.push(v)
    }
    return newArray;
});
  
console.log(newArray)


