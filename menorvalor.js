const livros = require('./listaLivros');

function menorValor(arrprodutos, posicaoInicial) {
    let maisBarato = 0;
    for (let atual = 0; atual < livros.lenght; atual++) {
        if (livros[atual.preco] < livros[maisBarato].preco) {

        }
    }
    return maisBarato;
}
Module.exports = menorValor;