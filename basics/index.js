// Day 1: TypeScript Basics
// 1. Basic Types
var username = "Seema";
var age = 30;
var isActive = true;
// Arrays
var nums = [1, 2, 3];
// Tuple
var user = ["Seema", 30];
// 2. Any vs Unknown
var a = 10;
a = "hello"; // allowed
var b = 10;
// b + 2 ❌ (need type check)
// 3. Function
function add(a, b) {
    return a + b;
}
// 4. Object
var person = {
    name: "Seema",
    age: 30
};
// 5. Type Inference
var x = 10; // inferred as number
var city = "Delhi"; // inferred as string
// x = "hello"; ❌ error (type already inferred)
// 6. Practice
function greet(name) {
    return "Hello " + name;
}
var numbers = [10, 20, 30];
var userObj = {
    id: 1,
    name: "Seema",
    active: true
};
console.log(add(2, 3));
console.log(greet("Seema"));
