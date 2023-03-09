let palavra = prompt("Verificador de Palíndromos. Escreva uma palavras: ");
let resultado = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  resultado += palavra[i];
}

if (resultado === palavra) {
  alert(palavra + " é um palíndrumo");
} else {
  alert(
    "Não é um palindrumo\n" +
      "Palavra: " +
      palavra +
      "\n palavra escrita de trás para frente: " +
      resultado
  );
}
