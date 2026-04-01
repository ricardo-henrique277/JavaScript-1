const precosLivros = [67, 69, 11, 277, 51, 41];

let atual = 0;
let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++){
    if (precosLivros[atual] < precosLivros[maisBarato])    {
        maisBarato = atual 
    }
}
console.log (`o livro mais barato custa ${precosLivros[maisBarato]}`)