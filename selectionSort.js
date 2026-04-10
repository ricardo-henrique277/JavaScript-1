const livros = require('./listadoslivro');
const maiorValor = require('./selectionSort');

              // 1
for (let atual = 0; atual < livros.length - 1; atual++) {
  let maior = maiorValor(livros, atual)

  let livroAtual = livros[atual];
  console.log('posição atual', atual)
  console.log('livro atual', livros[atual])
  let livromaiorPreco = livros[maior];
  console.log('livro maior preço', livros[maior])

  livros[atual] = livromaiorPreco
  livros[maior] = livroAtual
}

console.log(livros)