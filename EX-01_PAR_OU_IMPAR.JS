const num = parseInt(prompt("digite um numero valido: "));

if (isNaN(num)) {
  console.log("Você não digitou um valor valido!");
} else {
  if (num % 2 === 0) {
    console.log(num + " é par");
  } else {
    console.log(num + "é impar");
  }
}
