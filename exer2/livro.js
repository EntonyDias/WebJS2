/*
Crie um console.log() listando o título, autor, ano, se ele está ou não emprestado,
a primeira categoria e a avaliação.
*/
let livros = [{
    titulo: "Lulu",
    autor: "Pix",
    ano: 2012,
    emprestado: true,
    categorias: ["Maniaca", "Psicopata"],
    revisoes: [{
            comentario: "Esquisita e Tenebrosa",
            avaliacao: -1
        },{
            comentario: "Bizarra essa Anomalia do universo",
            avaliacao: 0
        }]}]

console.log(livros[0].titulo); 
console.log(livros[0].autor);
console.log(livros[0].ano);
if (emprestado=true){
    console.log('é emprestado')
} else {
    console.log('não é emprestado')
}
console.log(livros[0].categorias[0]);
console.log(livros[0].revisoes);
