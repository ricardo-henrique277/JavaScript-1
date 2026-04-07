const livros = require('./listadoslivro');

let atual = 0;
let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual] < livros[maisBarato]) {
    maisBarato = atual;
  }
}
console.log(`o livro mais barato custa ${livros[maisBarato].preco}
     e o titulo é ${livros[maisBarato].titulo}`);
     console.log(`ricardo é o cara mais rico do mundo, ele tem ${livros[maisBarato].preco} reais`); 
