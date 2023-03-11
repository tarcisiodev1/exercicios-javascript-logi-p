let opcao = "";

function areaDoTriangulo() {
  const base = parseFloat(prompt("Qual é a base do triângulo:"));
  const altura = parseFloat(prompt("Qual é a altura do triângulo:"));

  return (base * altura) / 2;
}
function areaDoRetangulo() {
  const base = parseFloat(prompt("Qual é a base do retângulo:"));
  const altura = parseFloat(prompt("Qual é a altura do retângulo:"));
  return base * altura;
}
function areaDoQuadrado() {
  const lado = parseFloat(prompt("Qual o valor do lado do quadrado:"));

  return lado ** 2;
}
function areaDoTrapezio() {
  const baseMaior = parseFloat(
    prompt("Qual é o valor da base maior do trapézio:")
  );
  const baseMenor = parseFloat(
    prompt("Qual é o valor da base menor do trapézio:")
  );
  const altura = parseFloat(prompt("Qual é o valor da altura do trapezio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function areaDoCirculo() {
  const raio = parseFloat(prompt("Qual é o valor do raio do círculo:"));
  const pi = 3.14;
  return pi * raio ** 2;
}

while (opcao !== "6") {
  opcao = prompt(
    "Calculadora geometrica, escolha uma das opções:\n\n1- área do triângulo\n2-área do retângulo\n3-área do quadrado\n4-área do trapézio\n5-área do círculo\n6-sair"
  );

  switch (opcao) {
    case "1":
      alert("A área do triângulo é: \n" + areaDoTriangulo());
      break;
    case "2":
      alert("A área do retângulo é: \n" + areaDoRetangulo());
      break;
    case "3":
      alert("A área do quadrado é: \n" + areaDoQuadrado());
      break;
    case "4":
      alert("A área do trapézio é: \n" + areaDoTrapezio());
      break;
    case "5":
      alert("A área do Círculo é: \n" + areaDoCirculo());
      break;
    case "6":
      alert("Encerrando programa...");
      break;
    default:
      alert("Opção indisponivel!");
  }
}
