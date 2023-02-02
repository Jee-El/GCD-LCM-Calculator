const output = document.querySelector("input[readonly]");
const outputDefaultValue = "The GCD/LCM is shown here!";
const inputs = Array.from(document.querySelectorAll("input")).slice(0, 2);
const GCDBtn = document.querySelector(".GCD-button");
const LCMBtn = document.querySelector(".LCM-button");

const ERROR_MSG = "Invalid Input!";

GCDBtn.addEventListener("click", () => {
  if (!areValidOperands()) return invalidOperands();

  operands = getOperands();

  output.value = findGCD(...operands);
});

LCMBtn.addEventListener("click", () => {
  if (!areValidOperands()) return invalidOperands();

  operands = getOperands();

  output.value = findLCM(...operands);
});

function areValidOperands() {
  return inputs.every((input) => /^(-|\+)?[0-9]+$/.test(input.value));
}

function invalidOperands() {
  output.value = ERROR_MSG;
}

function getOperands() {
  return inputs.map((input) => Math.abs(+input.value));
}

function findGCD(a, b) {
  if (a === 0) return b;

  if (b === 0) return findGCD(b, a);

  if (a % b === 0) return Math.min(a, b);

  return findGCD(b, a % b);
}

function findLCM(a, b) {
  return (a * b) / findGCD(a, b);
}
