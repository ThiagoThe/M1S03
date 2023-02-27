const pedido = prompt("Digite o valor do pedido como no exemplo: (15.000) ");
if (pedido <= 10000) {
  console.log("Você é Bronze");
} else if (pedido >= 10000 && pedido <= 100000) {
  console.log("Você é Prata");
} else if (pedido >= 100000 && pedido <= 500000) {
  console.log("Você é Ouro");
} else if (pedido > 500000) {
  console.log("Você é Platinum");
} else {
  console.log("Valor invalido");
}
