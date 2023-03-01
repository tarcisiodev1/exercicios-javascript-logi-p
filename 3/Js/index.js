import calcularIMC from "./calculoImc.js";
//exercicio 3 com modularicao esmodule
// Lendo peso do usuário
let opcao = "";

while (opcao !== "2") {
  opcao = prompt(
    "Opções da calculadora: \n\n 1- Calcular Imc \n 2- Sair da calculadora"
  );
  switch (opcao) {
    case "1":
      const peso = parseFloat(
        prompt("Escreva o seu peso em kg: ").replace(",", ".")
      );
      const altura = parseFloat(
        prompt("Escreva a sua altura em metros: ").replace(",", ".")
      );

      const { imc, classificacao, consequencia } = calcularIMC(peso, altura);
      //Mostrando resultado utilizando template string
      alert(`Seu IMC é ${imc.toFixed(1)} classificado como "${classificacao}"
  e as consequencias são: ${consequencia}`);
      break;
    case "2":
      alert("Saindo da calculadora");
      break;
    default:
      alert("Erro...");
  }
}
