// execicio 3 forma alternativa

function opcoes() {
  return prompt(
    "Opções da calculadora: \n\n 1- Calcular Imc \n 2- Sair da calculadora"
  );
}

const imc = function () {
  const peso = parseFloat(
    prompt("Escreva o seu peso em kg: ").replace(",", ".")
  );
  const altura = parseFloat(
    prompt("Escreva a sua altura em metros: ").replace(",", ".")
  );
  const imc = (peso / altura ** 2).toFixed(1);
  return imc;
};
const exibicao = function () {
  let immc = imc();
  let classificacao = "";
  let consequencia = "";
  if (immc >= 16 && immc < 17) {
    classificacao = "Muito abaixo do peso";
    consequencia = "Queda de cabelo, infertilidade, ausência menstrual";
  } else if (immc >= 17 && immc < 18.5) {
    classificacao = "Abaixo do peso";
    consequencia = "Fadiga, stress, ansiedade";
  } else if (immc >= 18.5 && immc < 25) {
    classificacao = "Peso normal";
    consequencia = "Menor risco de doenças cardíacas e vasculares";
  } else if (immc >= 25 && immc < 30) {
    classificacao = "Acima do peso";
    consequencia = "Fadiga, má circulação, varizes";
  } else if (immc >= 30 && immc < 35) {
    classificacao = "Obesidade Grau I";
    consequencia = "Diabetes, angina, infarto, aterosclerose";
  } else if (immc >= 35 && immc <= 40) {
    classificacao = "Obesidade Grau II";
    consequencia = "Apneia do sono, falta de ar";
  } else if (immc > 40) {
    classificacao = "Obesidade Grau III";
    consequencia =
      "Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC";
  } else {
    classificacao = "Nao tem classificao";
    consequencia = "Sem documentação";
  }
  return `Seu IMC é ${immc} classificado como "${classificacao}" e as co
nsequencias são: ${consequencia}`;
};

const execucao = function () {
  let opcao = "";
  while (opcao !== "2") {
    opcao = opcoes();
    switch (opcao) {
      case "1":
        alert(exibicao());
        break;
      case "2":
        alert("Saindo da calculadora");
        break;
      default:
        alert("Erro...");
        break;
    }
  }
};

execucao();
