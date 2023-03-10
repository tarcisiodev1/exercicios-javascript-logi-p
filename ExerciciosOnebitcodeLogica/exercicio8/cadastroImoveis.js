let cadastroImoveis = [];
let opcoes = "";

while (opcoes !== "3") {
  let tamanhoArray = cadastroImoveis.length;

  opcoes = prompt(
    "Total de imoveis: \n" +
      tamanhoArray +
      "\nEscolha uma das opções:\n 1- adicionar um imóvel \n2-Mostrar imoveis \n3- sair "
  );
  switch (opcoes) {
    case "1":
      let imovel = {};

      imovel.nomeProprietario = prompt("Nome do proprietario:");
      imovel.quantidadeDeQuarto = parseFloat(
        prompt("Quantos quartos possui o imóvel?")
      );
      imovel.quantidadeDeBanheiro = parseFloat(
        prompt("Quantos banheiros possui o imóvel?")
      );
      imovel.possuiGaragem = confirm("Tem garagem:");

      cadastroImoveis.push(imovel);

      break;
    case "2":
      for (let i = 0; i < cadastroImoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            cadastroImoveis[i].nomeProprietario +
            "\nQuartos: " +
            cadastroImoveis[i].quantidadeDeQuarto +
            "\nBanheiros: " +
            cadastroImoveis[i].quantidadeDeBanheiro +
            "\nPossui Garagem? " +
            cadastroImoveis[i].possuiGaragem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
}
