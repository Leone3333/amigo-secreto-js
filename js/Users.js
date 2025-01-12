class Users 
{
    // ld = lista de desejos
    constructor(nome, ld, tam_camisa, tm_calcado){
        this.nome = nome;
        this.ld = ld;
        this.tam_camisa = tam_camisa;
        this.tm_calcado = tm_calcado;
    }
}

let user1 = new Users("Leone", ["camiseta", "tênis", "fone de ouvido"], "p" , "40");
let user2 = new Users("Emanuelly", [ "Chinelo", "Bolsa"], "G" , "40");
let user3 = new Users("Luma", [ "Fone de ouvido", "Blusa"], "pp" , "30");
let user4 = new Users("Livia", [ "Camisa anime", "Chinelo"], "p" , "37");
let user5 = new Users("Maria", [ "undefined"], "G" , "40");
let user6 = new Users("Mariane", [ "Rasteirinha"], "G" , "37");
let user7 = new Users("Valdomiro", [ "Chinelo", "Blusa"], "M" , "40");

let opcoes = [user1, user2, user3, user4, user5, user6, user7];

export default opcoes