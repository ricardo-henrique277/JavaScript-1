const livros = [67, 69, 11, 277, 51, 41];

let atual = 0;
let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual] < livros[maisBarato]) {
    maisBarato = atual;
  }
}
console.log(`o livro mais barato custa ${livros[maisBarato].preco}
     e o titulo é ${livros[maisBarato].titulo}`);
     console.log(``)
