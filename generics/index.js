//🔸 1. Problem (why generics?)
function identity(value) {
    return value;
}
//❌ Issue: loses type safety
//🔸 2. Generic Solution ⭐
function identity1(value) {
    return value;
}
//👉 T = placeholder type
identity1(10);
identity1("hello");
//🔸 3. Generic with Array
function getFirst(arr) {
    return arr[0];
}
getFirst([1, 2, 3]);
getFirst(["a", "b"]);
