import calcularIMC from "./js/calculoImc.js";
const main = document.querySelector("main");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const h3 = document.getElementById("h3");
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

const button = document
  .querySelector("button")
  .addEventListener("click", function (ev) {
    ev.preventDefault(); // impedir o evento submit
    let peso1 = pesoInput.value.replace(",", ".");
    let altura1 = alturaInput.value.replace(",", ".");
    const { imc, classificacao, consequencia } = calcularIMC(peso1, altura1);
    console.log(Date(imc));
    h3.innerText = `Seu IMC é ${imc.toFixed(
      1
    )} classificado como "${classificacao}"
    e as consequencias são: ${consequencia}`;
  });
