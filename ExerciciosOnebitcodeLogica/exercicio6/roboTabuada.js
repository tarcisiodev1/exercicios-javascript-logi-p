let numero = parseInt(
  prompt("Escreva um número de um a vinte que você quer saber a tabuada:")
);
let resultado = "A tabuada é:";

for (let i = 1; i <= 10; i++) {
  resultado += "\n" + numero + " * " + i + "=" + numero * i;
}

alert(resultado);
