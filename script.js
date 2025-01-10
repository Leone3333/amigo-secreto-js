texto = document.getElementById('texto-main')
btn_sorteio = document.getElementById('btn-sorteio')
opcoes = ['Leone', 'Emanuelly', 'Livia', 'Luma', 'Maria', 'Mariane', 'Valdomiro']


btn_sorteio.addEventListener("click" , () => {
    const idSorteado = Math.floor(Math.random() * opcoes.length);
    console.log(idSorteado);
    console.log(opcoes[idSorteado]);
})
