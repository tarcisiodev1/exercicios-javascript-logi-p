let dinheiroConta = parseFloat(prompt("Quanto você tem de dinheiro na conta:"));
let opcao = "";

do {
  opcao = prompt(
    "Dinheiro disponivel:\n" +
      dinheiroConta +
      "\nOpções adicionais:\n" +
      "1-adicinar\n2-tirar\n3-sair"
  );

  switch (opcao) {
    case "1":
      dinheiroConta += parseFloat(
        prompt("Quanto você quer adcionar na conta:")
      );
      break;
    case "2":
      dinheiroConta -= parseFloat(prompt("Quanto você quer tirar da conta:"));
      break;
    case "3":
      alert("Encerrando programa!");
      break;
    default:
      alert("Opção invalida");
      break;
  }
} while (opcao !== "3");
