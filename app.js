const btn = document.querySelector("#btn");
const reset = document.querySelector("#reset");
const input = document.querySelector("#input");
const yourScore = document.querySelector("#yourScore");
const compScore = document.querySelector("#compScore");

let yourScoreVal = 0;
let compScoreVal = 0;

yourScore.innerText = yourScoreVal;
compScore.innerText = compScoreVal;

btn.addEventListener("click", function (ev) {
  ev.preventDefault();
  let random = Math.floor(Math.random() * 5 + 1);
  console.log("Random number this time is: " + random);
  check(input.value, random);
  input.value = "";
});
reset.addEventListener("click", function () {
  yourScoreVal = 0;
  compScoreVal = 0;
  yourScore.innerText = yourScoreVal;
  compScore.innerText = compScoreVal;
});

function check(num, random) {
  // parseInt(num);
  if (parseInt(num) == random) {
    alert("You win!!! Congratulations!!!");
    yourScoreVal++;
    yourScore.innerText = yourScoreVal;
  } else {
    alert("Sorry no - let's try again!");

    compScoreVal++;
    compScore.innerText = compScoreVal;
  }
}
