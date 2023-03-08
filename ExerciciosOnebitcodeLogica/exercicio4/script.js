const nome = prompt("Escreva seu nome: ");

let cidade = " ";
let totalCidade = "";
let numeroCidades = 0;
let perguntaCidade = confirm("Você visitou alguma cidade:");

while (perguntaCidade) {
  cidade = prompt("Qual o nome da cidade que você visitou");
  totalCidade += cidade + ", ";
  numeroCidades++;
  perguntaCidade = confirm("Você visitou alguma outra cidade:");
}

alert(
  nome +
    ", Você visitou essas cidades: " +
    totalCidade +
    " com um total de " +
    numeroCidades +
    " cidades"
);
