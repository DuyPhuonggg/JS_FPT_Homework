const personObject = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName    
    }
};

Object.prototype.sayBye = function() {
    console.log('goodBye');
}

const quang = Object.create(personObject);

quang.sayBye(); //
quang.firstName = "Le";
quang.lastName = "Quang;"
quang.age = "2";
console.log(quang.fullName());
console.log(quang.age);
