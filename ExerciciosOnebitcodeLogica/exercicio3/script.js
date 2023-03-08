let valorMetro = parseFloat(prompt("Escreva um valor: "));
let unidadeMedida = prompt(
  "Escreva a unidade de medidade para converter o valor inserido: obs: escreva da forma abreviada \n- milímetro (mm)\n- centímetro cm\n- decímetro dm\n- decâmetro dam\n- hectômetro hm\n- quilômetro km "
);

switch (unidadeMedida) {
  case "mm":
    valorMetro = valorMetro * 10 ** 3;
    alert(`O valor inserido convertido em milímetro é igual a:` + valorMetro);
    break;

  case "cm":
    valorMetro = valorMetro * 10 ** 2;
    alert(`O valor inserido convertido em centimetro é igual a:` + valorMetro);
    break;
  case "dm":
    valorMetro = valorMetro * 10 ** 1;
    alert(`O valor inserido convertido em decímetro é igual a:` + valorMetro);
    break;
  case "dam":
    valorMetro = valorMetro * 10 ** -1;
    alert(`O valor inserido convertido em decâmetro é igual a:` + valorMetro);
    break;
  case "hm":
    valorMetro = valorMetro * 10 ** -2;
    alert(`O valor inserido convertido em hectômetro é igual a:` + valorMetro);
    break;
  case "km":
    valorMetro = valorMetro * 10 ** -3;
    alert(`O valor inserido convertido em quilômetro é igual a:` + valorMetro);
    break;
  default:
    alert("Opção inválida");
}
