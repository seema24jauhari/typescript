//🔹 1. Type Alias (Best Practice ⭐)
type Guest = {
    name: String,
    age: Number
}

const user1:User = {
    name: "Seema",
    age: 30
}

//🔹 2. Optional Properties
type Student = {
  name: string;
  age?: number;
};

//🔹 3. Readonly Object
type Person = {
  readonly id: number;
  name: string;
};

//🔹 4. Nested Object
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


//🔹 5. Inherit type to function
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

//🔹 6. Dynamic Keys

type Scores = {
  [key: string]: number;
};

const marks: Scores = {
  math: 90,
  science: 85
};


//🔸 7. Using interface

interface Person2 {
  name: string;
  age: number;
}


//🔹 7.1. Extend / Combine Type and Interface
interface A { a: string }
interface B { b: string }

interface C extends A, B {}

//🔹 7.2. Extend / Combine Type and Interface

type A1 = { a: string };
type B1 = { b: string };

type C1 = A1 & B1;


//🔹 8. Union (only with type ⭐)
type ID = string | number;


//🔹 9. Functions
type Add = (a: number, b: number) => number;


//🔹 10. Declaration Merging (only interface ⭐)
interface User1 { name: string }
interface User2 { age: number }

//🔹 11. Primitives
type Name = string;
//❌ interface cannot represent primitive

//🔹 12. Can both interface and type be used with implements in a class?

interface User1 {
  name: string;
  age: number;
}

class Person3 implements User1 {
  name = "Seema";
  age = 30;
}

/*====================================*/

type User4 = {
  name: string;
  age: number;
};

class Person4 implements User4 {
  name = "Seema";
  age = 30;
}
//👉 ✅ Works the same (if type is object)



