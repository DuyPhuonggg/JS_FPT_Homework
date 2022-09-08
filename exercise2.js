function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.sayHi = function () {
    console.log('hello')
}

const quang = new Student('quang',23);

quang.sayHi();