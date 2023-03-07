let nomePersonagemUm = prompt("Escreva o nome do personagem um: ");
let poderAtaque = parseFloat(prompt("Poder de ataque do personagem um: "));
let nomePersonagemDois = prompt("Nome do personagem dois: ");
let poderDefesaPersonagemDois = parseFloat(
  prompt("Poder de defesa do personagem dois: ")
);
let vidaPersonagemDois = parseFloat(
  prompt("Total de vida do personagem dois: ")
);
let escudoPersonagemDois = confirm("O personagem dois tem escudo: ");

if (poderAtaque > poderDefesaPersonagemDois && escudoPersonagemDois === false) {
  let danoCausado = poderAtaque - poderDefesaPersonagemDois;
  alert(
    "O dano causado é por " +
      nomePersonagemUm +
      " em " +
      nomePersonagemDois +
      " é igual a: " +
      danoCausado
  );
  vidaPersonagemDois -= danoCausado;
} else if (
  poderAtaque > poderDefesaPersonagemDois &&
  escudoPersonagemDois === true
) {
  let danoCausado = (poderAtaque - poderDefesaPersonagemDois) / 2;
  alert(
    "O dano causado é por " +
      nomePersonagemUm +
      " em " +
      nomePersonagemDois +
      " é igual a: " +
      danoCausado
  );
  vidaPersonagemDois -= danoCausado;
} else {
  let danoCausado = 0;
  alert(
    "O dano causado é por " +
      nomePersonagemUm +
      " em " +
      nomePersonagemDois +
      " é igual a: " +
      danoCausado
  );
}
alert(
  "atualização da quantidade de vida do " +
    nomePersonagemDois +
    " é: " +
    vidaPersonagemDois
);
