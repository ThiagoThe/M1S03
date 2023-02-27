const peso = parseInt(prompt("Digite o peso do veiculo: "));
const tam = parseInt(prompt("Digite o tamanho (em metros) do veiculo: "));

if (peso <= 1500 && tam <= 5) {
  console.log("Veiculo liberado para a passagem na ponte!");
} else {
  console.log("Veiculo não pode passar na ponte!");
}
