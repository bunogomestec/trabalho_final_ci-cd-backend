function calcularTotal(ferramentas, comprar) {
  // Verifica se as listas não são vazias
  if (ferramentas.length === 0 || comprar.length === 0) {
    throw new Error("Ambas as listas precisam ter ao menos um item.");
  }

  // Cria um objeto para armazenar as ferramentas disponíveis
  const ferramentasDisponiveis = {};
  for (let i = 0; i < ferramentas.length; i++) {
    const ferramenta = ferramentas[i];
    ferramentasDisponiveis[ferramenta.nome] = ferramenta.preco;
  }

  // Inicializa o total e uma lista para as ferramentas que serão compradas
  let total = 0;
  const ferramentasParaComprar = [];

  // Verifica as ferramentas que queremos comprar e calcula o total
  for (let i = 0; i < comprar.length; i++) {
    const nomeFerramenta = comprar[i];
    if (ferramentasDisponiveis[nomeFerramenta] !== undefined) {
      ferramentasParaComprar.push(nomeFerramenta);
      total += ferramentasDisponiveis[nomeFerramenta];
    }
  }

  // Se nenhuma ferramenta foi encontrada, lança um erro
  if (ferramentasParaComprar.length === 0) {
    throw new Error("Nenhuma ferramenta desejada encontrada.");
  }

  // Retorna o resultado
  return `O valor a pagar pelas ferramentas (${ferramentasParaComprar.join(", ")}) é R$ ${total.toFixed(2)}`;
}

// Exporta a função para ser utilizada em outros arquivos
module.exports = {
  calcularTotal,
};
