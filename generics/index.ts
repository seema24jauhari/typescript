//🔸 1. Problem (why generics?)

function identity(value: any): any {
  return value;
}

//❌ Issue: loses type safety


//🔸 2. Generic Solution ⭐

function identity1<T>(value: T) : T{
    return value
}

//👉 T = placeholder type

identity1<number>(10);
identity1<string>("hello");

//🔸 3. Generic with Array

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<number>([1, 2, 3]);
getFirst<string>(["a", "b"]);

//🔸 4. Multiple Generics
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

//🔸 5. Generic Type (with object)
type ApiResponse<T> = {
  data: T;
  status: number;
};

const res: ApiResponse<string> = {
  data: "success",
  status: 200
};

//🔸 6. Generic Interface
interface Box<T> {
  value: T;
}

const numBox: Box<number> = { value: 10 };
const strBox: Box<string> = { value: "hi" };

//🔸 7. Constraint (important ⭐)
function printLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}