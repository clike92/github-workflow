//Unit Test concatOdds
// expect ([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]
// expect (arrays have only even numbers) to be (empty array)
// expect (arrays with mixed numbers and strings) to be (arrays of integers but not numbers)
// expect ([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) not to be [all numbers]
// expect (input not arrays), to be (user prompted for arrays)
// expect (user inputs arrays not of strings), to be (user prompted for integer array of string)
// expect (user inputs only 1 array), to be (user prompted for two arrays)

// //Functional Test
// user can checkout as guest or registered user
// ask the user if they would like to register/login or checkout as guest
// shopping cart will remember if items were previously added or deleted

function concatOdd(arr1, arr2) {
  const newArr = arr1.concat(arr2);

  const newArr2 = newArr.filter((num, index) => {
    if (num % 2 === 0) return false;
    if (newArr.indexOf(num) !== index) return false;
    return true;
  });

  return newArr2;
}

const result = concatOdd([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]);
console.log(result);
