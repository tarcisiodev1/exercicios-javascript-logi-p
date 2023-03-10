let listaEspera = [];
let interacao = "";

while (interacao !== "3") {
  let listaEsperaFor = "";
  for (let indice = 0; indice < listaEspera.length; indice++) {
    listaEsperaFor += indice + 1 + "º -" + listaEspera[indice] + "\n";
  }

  interacao = prompt(
    "fila de espera:\n" +
      listaEsperaFor +
      "\n-Opções:\n 1-adicionar novo paciênte na fila de espera\n2-Chamar paciente\n3-sair"
  );

  if (interacao === "1") {
    let novoPaciente = prompt("Escreva o nome de um novo paciente:");
    listaEspera.push(novoPaciente);
  } else if (interacao === "2") {
    let removerPaciente = listaEspera.shift();
    alert("Paciente removido da fila de espera:\n" + removerPaciente);
  } else {
    alert("Saindo do fila de espera");
  }
}
