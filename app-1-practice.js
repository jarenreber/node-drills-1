const diff = (a, b) => a - b;
diff(5, 2);
const today = () => console.log(Date());
today();
let array = [[], [{ age: 21, color: "blue" }]];
if (array[0] === []) {
  console.log("It's truthy!");
} else {
  console.log("False");
}
if (array[0] == []) {
  console.log("It's truthy!");
} else {
  console.log("False");
}
if ((array[0] = [])) {
  console.log("It's truthy!");
} else {
  console.log("False");
}
