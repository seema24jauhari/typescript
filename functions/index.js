// 🔹 1. Functions Basics
function add(a, b) {
    return a + b;
}
//🔹 2. Arrow Functions
var multiply = function (a, b) { return a * b; };
//🔹 3. Optional & Default Param
function greet(name, age) {
    return age ? "".concat(name, " ").concat(age) : name;
}
function greet2(name) {
    if (name === void 0) { name = "Guest"; }
    return name;
}
//🔹 4. Function Type
var sum;
sum = function (x, y) { return x + y; };
//🔹 5. Objects Basics
var user = {
    name: "Seema",
    age: 30
};
