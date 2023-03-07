let nomeVeiculo1 = prompt("Escreva o nome do seu veiculo: ");
let velocidadeVeiculo1 = prompt("Escreva a velocidade do primeiro veiculo: ");
let nomeVeiculo2 = prompt("Escreva o nome do segundo veiculo: ");
let velocidadeVeiculo2 = prompt("Escreva o nome do seu veiculo: ");

if (velocidadeVeiculo1 === velocidadeVeiculo2) {
  alert("Velocidade dos veiculos são iguais");
} else if (velocidadeVeiculo1 < velocidadeVeiculo2) {
  alert("Velocidade do Veiculo " + nomeVeiculo2 + " é maior");
} else {
  alert("Velocidade do Veiculo " + nomeVeiculo1 + " é maior");
}
