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

//🔹 6. Type Alias (Best Practice ⭐)
type Guest = {
    name: String,
    age: Number
}

const user1:User = {
    name: "Seema",
    age: 30
}

//🔹 7. Optional Properties
type Student = {
  name: string;
  age?: number;
};

//🔹 8. Readonly Object
type Person = {
  readonly id: number;
  name: string;
};

//🔹 9. Nested Object
type Person1 = {
  name: string;
  address: {
    city: string;
    pin: number;
  };
};

/*
Write TS code:
Function getUser
input: name(string), age(number)
return: object
Object type:
type User = {
  name: string;
  age: number;
};
*/


//🔹 9. Inherit type to function
type User = {
  name: string;
  age: number;
};

function getUser(name: string, age: number): User {
  return {
    name,
    age
  };
}

//🔹 9. Dynamic Keys

type Scores = {
  [key: string]: number;
};

const marks: Scores = {
  math: 90,
  science: 85
};