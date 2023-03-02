const main = document.querySelector("main");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const teclasPermitidas = [
  ",",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  " ",
];

console.log(pesoInput);

pesoInput.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (teclasPermitidas.includes(ev.key)) {
    pesoInput.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    pesoInput.value = pesoInput.value.slice(0, -1);
  }
});
alturaInput.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (teclasPermitidas.includes(ev.key)) {
    alturaInput.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    alturaInput.value = alturaInput.value.slice(0, -1);
  }
});
