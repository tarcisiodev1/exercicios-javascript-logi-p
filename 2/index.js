// execicio 2

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
      const imc = (peso / altura ** 2).toFixed(1);
      let classificacao = "";
      let consequencia = "";
      if (imc >= 16 && imc < 17) {
        classificacao = "Muito abaixo do peso";
        consequencia = "Queda de cabelo, infertilidade, ausência menstrual";
      } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Abaixo do peso";
        consequencia = "Fadiga, stress, ansiedade";
      } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
        consequencia = "Menor risco de doenças cardíacas e vasculares";
      } else if (imc >= 25 && imc < 30) {
        classificacao = "Acima do peso";
        consequencia = "Fadiga, má circulação, varizes";
      } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau I";
        consequencia = "Diabetes, angina, infarto, aterosclerose";
      } else if (imc >= 35 && imc <= 40) {
        classificacao = "Obesidade Grau II";
        consequencia = "Apneia do sono, falta de ar";
      } else {
        classificacao = "Obesidade Grau III";
        consequencia =
          "Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC";
      }
      alert(`Seu IMC é ${imc} classificado como "${classificacao}" e as co
      nsequencias são: ${consequencia}`);
      break;
    case "2":
      alert("Saindo da calculadora");
      break;
    default:
      alert("Erro...");
  }
}
