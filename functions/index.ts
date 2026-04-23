// 🔹 1. Functions Basics
function add(a: number, b: number): number {
  return a + b;
}

//🔹 2. Arrow Functions
const multiply = (a:number, b:number):number => a*b;


//🔹 3. Optional & Default Param
function greet(name: string, age?: number) {
  return age ? `${name} ${age}` : name;
}

function greet2(name: string = "Guest") {
  return name;
}

//🔹 4. Function Type
let sum: (a: number, b: number) => number;

sum = (x, y) => x + y;

//🔹 5. Objects Basics
const user: { name: string; age: number } = {
  name: "Seema",
  age: 30
};

