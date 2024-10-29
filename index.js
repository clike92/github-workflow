const foodsNamesArr = ["Hamburger", "Sushi", "Humus", "Curry"];

for (let i = 0; i < foodsNamesArr.length; i++) {
  console.log(
    `The name of the food is ${foodsNamesArr[i]} and the index is ${i}`
  );
}

foodsNamesArr.forEach((food) => {
  console.log(food);
});

foodsNamesArr.forEach((food, index) => {
  console.log(`The name of the food is ${food} and the index is ${index}`);
});

// const result = foodsNamesArr.find((element) => element === "Test");
// console.log(result);

// const result = foodsNamesArr.find((element) => {
//   return element === "Test";
// });
// console.log(result);

// let found = "";
// for (let i = 0; i < dogsNamesArr.length; i++) {
// if (dogsNamesArr[i] === "Betty") {
// found = dogsNamesArr[i];
// break;
// }
// }
// console.log(found);

// const numArr = [1, 2, 3, 4];
// const newArr = numArr.map((num) => num + 2);
// console.log(newArr);

// const newArrForLoop = [];
// for (let i = 0; i < numArr.length; i++) {
// newArrForLoop.push(numArr[i] + 2);
// }
// console.log(newArrForLoop);

// const filteredArr = dogsNamesArr.filter((dog) => dog[0] === "B");
// console.log(filteredArr);

// const filtDog = [];
// for (let i = 0; i < dogsNamesArr.length; i++) {
// if (dogsNamesArr[i][0] === "B") {
// filtDog.push(dogsNamesArr[i]);
// }
// }
// console.log(filtDog);

// const numArr = [1, 2, 3, 4];

// 1 + 2;
// 3 + 3;
// 6 + 4;

const sum = numArr.reduce((acc, current) => acc + current, 3);
console.log(sum);

const sumWithNewStartingValue = numArr.reduce(
  (acc, current) => acc + current,
  3
);
console.log(sumWithNewStartingValue);

// let total = 0;
// for (let i = 0; i < numArr.length; i++) {
//   console.log(`The total is ${total}`);
//   total += numArr[i];
// }
// console.log(total);
