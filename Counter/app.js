const count = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let counter = 0;

incrementButton.addEventListener("click", () => {
  counter++;
  count.innerHTML = counter;

  if (counter > 0) {
    count.style.color = "green";
  }
});

decrementButton.addEventListener("click", () => {
  counter--;
  count.innerHTML = counter;

  if (counter < 0) {
    count.style.color = "red";
  }
});

resetButton.addEventListener("click", () => {
  counter = 0;
  count.innerHTML = counter;

  if (counter === 0) {
    count.style.color = "#222";
  }
});
