const form = document.querySelector("form");
const numberInput = document.querySelector("#number");
const output = document.querySelector("#numberBank output");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");
const oddOutput = document.querySelector("#odds output");
const evenOutput = document.querySelector("#evens output");
const arrNumbers = [];
const Odd = [];
const Even = [];

const printAllNumbers = () => {
  output.innerHTML = arrNumbers.join(", ");
};

const printOdds = () => {
  oddOutput.innerHTML = Odd.join(", ");
};

const printEvens = () => {
  evenOutput.innerHTML = Even.join(", ");
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const number = parseFloat(numberInput.value);
  if (!isNaN(number)) {
    arrNumbers.push(number);
    printAllNumbers();
  }
  numberInput.value = "";
});

sortOneButton.addEventListener("click", function () {
  if (arrNumbers.length > 0) {
    const num = arrNumbers.shift();
    if (num % 2 === 0) {
      Even.push(num);
      printEvens();
    } else {
      Odd.push(num);
      printOdds();
    }
    printAllNumbers();
  }
});

sortAllButton.addEventListener("click", function () {
  while (arrNumbers.length > 0) {
    const num = arrNumbers.shift();
    if (num % 2 === 0) {
      Even.push(num);
    } else {
      Odd.push(num);
    }
  }
  printAllNumbers();
  printOdds();
  printEvens();
});
