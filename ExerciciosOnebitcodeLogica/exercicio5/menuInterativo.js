do {
  let menu = prompt("escolha uma opção:\n1\n2\n3\n4\n5-encerrar");
  switch (menu) {
    case "1":
      alert("Você escolheu a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("O sistema está sendo encerrado");
      break;
  }
} while (menu !== "5");
