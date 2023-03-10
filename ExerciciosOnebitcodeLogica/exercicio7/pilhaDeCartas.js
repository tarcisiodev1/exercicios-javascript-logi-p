let pilhaCartas = [];

let interacao = "";

while (interacao !== "3") {
  let totalBaralho = pilhaCartas.length;

  interacao = prompt(
    "Total de cartas no baralho: \n" +
      totalBaralho +
      "\nEscolha uma das opções:\n 1- adicionar uma carta \n2-Puxar uma carta \n3- sair "
  );

  if (interacao === "1") {
    let novaCarta = prompt("Escreva o nome da carta para adicionar no topo:");
    pilhaCartas.push(novaCarta);
  } else if (interacao === "2") {
    let puxarCarta = pilhaCartas.pop();
    alert("Carta puxada: \n\n" + puxarCarta);
  } else {
    alert("Saindo da pilha de cartas");
  }
}
