

var contagem = 1;

document.getElementById('radio1').checked = true; //sempre começa no primeiro

setInterval(() => {
    proximaImg();
}, 5000);  // define o tempo de cada slide para 5 segundos

function proximaImg() {
    contagem++;
    if (contagem > 4) {
        contagem = 1;             
    }
    document.getElementById('radio' + contagem).checked = true;
}

function showSlide(index) {
    const totalSlides = 4;
    if (index < 1) index = totalSlides;
    if (index > totalSlides) index = 1;
    document.getElementById(`radio${index}`).checked = true;
    contagem = index; // Atualiza a contagem global
}

function nextSlide() {
    showSlide(contagem + 1);
}

function prevSlide() {
    showSlide(contagem - 1);
}

// Inicializa o primeiro slide como selecionado
showSlide(contagem);

// Adiciona eventos aos botões manuais
document.querySelectorAll('.botao-manual').forEach((button, index) => {
    button.addEventListener('click', () => {
        showSlide(index + 1); // Atualiza a contagem ao clicar no botão manual
    });
});




const procura = document.getElementById('lupa');


function search (){
    
    const entrada = document.getElementById('entrada').value;

    if (entrada.value !== ''){
        alert('Pesquisando');
    }

    else {
        alert('Insira algum valor para a pesquisa');
    }
}

procura.addEventListener('click', search);





