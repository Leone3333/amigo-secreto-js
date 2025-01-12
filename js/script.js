import opcoes from "./Users.js";

let titulo = document.getElementById('texto-main');
let lista_desejos = document.getElementById('lista-desejo');
let medidas = document.getElementById('medidas');
let btn_sorteio = document.getElementById('btn-sorteio');

btn_sorteio.addEventListener("click" , () => {
    
    if (opcoes.length == 0) {
        console.log("Acabou o array");
    }else{
        // sorteia
        const idSorteado = Math.floor(Math.random() * opcoes.length);
        
        // depura
        console.log(opcoes[idSorteado]);
        // console.log(opcoes[idSorteado].ld);

        altera_texto(opcoes[idSorteado]);
        
        // remove opção
        opcoes.splice(idSorteado, 1);
    }
})  

const altera_texto = (sortedo) => {
    titulo.textContent = sortedo.nome;
    lista_desejos.textContent = "Lista de desejos: " + sortedo.ld;
    medidas.textContent = "Tam camisa: " + sortedo.tam_camisa + " Tam Calçado: " + sortedo.tam_calcado;
}
