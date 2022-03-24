let button = document.querySelector(".submit");
let num = document.querySelector(".num");
let buttons = document.querySelector(".list");
let firstScreen = document.querySelector(".container");
let secondScreen = document.querySelector(".two");
buttons.addEventListener("click", run);
function run(event) {
  // event.target.style.backgroundColor = "hsl(216, 12%, 54%)";
  // event.target.style.color = "hsl(0, 0%, 100%)";
  if (event.target.tagName == "BUTTON") {
    event.target.classList.toggle("color");
    let val = event.target.textContent;
    num.innerHTML = val;
  }
}

button.addEventListener("click", function () {
  firstScreen.classList.add("hide");
  secondScreen.classList.add("display");
});
