function fatorial(num) {
  console.log("num = " + num);
  if (num === 0) {
    // caso base
    return 1;
  } else if (num === 1) {
    // caso base
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

console.log("\n!5 = " + fatorial(5));
console.log("\n!0 = " + fatorial(0));
console.log("\n!9 = " + fatorial(9));
