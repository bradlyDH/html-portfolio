const outputItems = document.getElementById("output-items");
const fizzBuzzBtn = document.getElementById("fizz-buzz-btn");
const resetBtn = document.getElementById("reset-btn");
const output = [];

function fizzBuzz() {
  let counter = output.length + 1;

  console.log(counter);
  console.log(output[output.length - 1]);

  if (counter % 3 === 0 && counter % 5 === 0) {
    output.push("FizzBuzz!");
  } else if (counter % 5 === 0) {
    output.push("Buzz!");
  } else if (counter % 3 === 0) {
    output.push("Fizz!");
  } else {
    output.push(counter);
  }

  // console.log(output[counter]);

  const newLi = document.createElement("li");
  const liContent = document.createTextNode(output[output.length - 1] + ",");

  newLi.appendChild(liContent);

  outputItems.appendChild(newLi);
}

fizzBuzzBtn.addEventListener("click", fizzBuzz);
resetBtn.addEventListener("click", () => {
  if (output.length === 0) {
    alert("Already pressed Reset! Let's FizzBuzz!");
  }

  const getLiElements = document.querySelectorAll("li");

  getLiElements.forEach((element) => {
    element.remove();
  });

  output.splice(0, output.length);
  console.log(output);
});
