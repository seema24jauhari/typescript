// Day 1: TypeScript Basics

// 1. Basic Types
let username: string = "Seema";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let nums: number[] = [1, 2, 3];

// Tuple
let user: [string, number] = ["Seema", 30];

// 2. Any vs Unknown
let a: any = 10;
a = "hello"; // allowed

let b: unknown = 10;
// b + 2 ❌ (need type check)

// 3. Function
function add(a: number, b: number): number {
  return a + b;
}

// 4. Object
let person: { name: string; age: number } = {
  name: "Seema",
  age: 30
};

// 5. Type Inference
let x = 10;        // inferred as number
let city = "Delhi"; // inferred as string

// x = "hello"; ❌ error (type already inferred)

// 6. Practice
function greet(name: string): string {
  return "Hello " + name;
}

let numbers = [10, 20, 30];

let userObj = {
  id: 1,
  name: "Seema",
  active: true
};

console.log(add(2, 3));
console.log(greet("Seema"));