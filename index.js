const livros = require('./listadoslivro');

let atual = 0;
let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if(livros[atual].preco > livros[maisCaro].preco) {
    maisCaro = atual;
  }
}
console.log(`o livro mais caro custa ${livros[maisCaro].preco}
     e o titulo é ${livros[maisCaro].titulo}`);
     console.log(`ricardo é o cara mais rico do mundo, ele tem ${livros[maisCaro].preco} reais`); 

     module.exports = maiorValor = (precosLivros) => {
    let maiorValor = 0;
    for (let i = 0; i < precosLivros.length; i++) {
        if (precosLivros[i].preco > maiorValor) {
            maiorValor = precosLivros[i].preco;
        }
    }
    return maiorValor;
}