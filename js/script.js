import opcoes from "./Users.js";

let texto = document.getElementById('texto-main');
let btn_sorteio = document.getElementById('btn-sorteio');

btn_sorteio.addEventListener("click" , () => {
    
    if (opcoes.length == 0) {
        console.log("Acabou o array");
    }else{
        // sorteia
        const idSorteado = Math.floor(Math.random() * opcoes.length);
        
        // depura
        console.log(opcoes[idSorteado]);
        console.log(opcoes[idSorteado].ld);
        
        // remove opção
        opcoes.splice(idSorteado, 1);
    }
})
