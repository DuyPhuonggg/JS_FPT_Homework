//method logger(title,message) 

const arr1 = [1,2];

Array.prototype.logger = function (title,message) {
    console.log(title + ' : ' + message);
}

arr1.logger('EER','This is err message');
arr1.logger('INFO','This is info message');