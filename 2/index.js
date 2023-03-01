// execicio 1

let numero = [];

for (let i = 0; numero.length < 101; i++) {
  numero.push(i);
  if (numero[i] % 2 !== 0) {
    console.log(numero[i]);
  } else {
    console.log("Seu numero é par");
  }
}
