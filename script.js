//your JS code here. If required.
const student = {
  name: "John",
};

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(student)); 

console.log(getKeys({ name: "Alice", age: 25, city: "New York" })); // Output: ["name", "age", "city"]
console.log(getKeys({ country: "USA" })); 
console.log(getKeys({}));
