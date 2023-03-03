import calcularIMC from "./calculoImcc.js";
//Recuperando o formulario
let form2 = document.getElementById("form2");
//nosso código ficará escutando o evento submit
//este evento ocorre ao clicar no button do type="submit"

form2.addEventListener("submit", function (event) {
  //previne comportamneto padrão do navegador ao submeter o form
  event.preventDefault();
  //lendo e o peso e altura do input
  let peso = form2.peso.value;
  let altura = form2.altura.value;
  //Se um dos dois campos não for informado encerra execução
  if (!peso || !altura) return;
  //Trocando vírgula por ponto
  peso = peso.replace(",", ".");
  altura = altura.replace(",", ".");

  //Convertendo String em Float
  peso = Number.parseFloat(peso);
  altura = Number.parseFloat(altura);
  //Chama função para calcular o IMC
  const { imc, classificacao, consequencia } = calcularIMC(peso, altura);
  //Chama função para apresentar a resposta
  apresentarResposta(imc, classificacao, consequencia);
});

const apresentarResposta = (imc, classificacao, consequencia) => {
  //Obtemos o elemento utilizando a função document.getElementbyId
  //Em seguida substituimos o conteudo com uma template string formatada
  //Aproveitamos para formatar o imc com apenas 1 casa decimal
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
  <h3>${imc.toFixed(1)}kg/m2</h3>
  <h2>${classificacao}</h2>
<p><strong>O que pode acontecer:</strong></p>
<p>${consequencia}</p>`;
  console.log(resultado);
};
