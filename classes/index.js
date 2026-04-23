//1. Basic Class
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var p = new Person();
p.name = "Seema";
p.greet();
//2. Constructor
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.greet = function () {
        console.log("Hello " + this.name);
    };
    return Student;
}());
var st = new Student("Seema");
