// Ordered collection, same type elements

let nums: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b"];

// Mixed types (avoid if possible)

let data: (string | number)[] = ["a", 1];

// Readonly array

let arr: readonly number[] = [1, 2];
// Fixed length + fixed types

let user: [string, number] = ["Seema", 30];

// Access

user[0]; // string
user[1]; // number

// Readonly array

let arr1: readonly number[] = [1, 2];


//Fixed length + fixed types
let user1: [string, number] = ["Seema", 30];

user1[0]; // string
user1[1]; // number

//Optional / rest   

let tuple: [string, number?] = ["a"];
let tuple2: [string, ...number[]] = ["a", 1, 2];