const lupa = document.querySelector('.pesquisa');
const barra = document.querySelector('.bar');
const ul = document.querySelector('.ul');
const all = document.querySelector('.pesquisa');
const inpu = document.querySelector('.input');

lupa.addEventListener('click', ()=>{

    if (barra.classList.contains('ativo') && ul.classList.contains('ativo') && all.classList.contains('ativo') && inpu.classList.contains('ativo')){
        barra.classList.remove('ativo');
        ul.classList.remove('ativo');
        all.classList.remove('ativo');
        inpu.classList.remove('ativo');
    }

    else{
        barra.classList.add('ativo');
        ul.classList.add('ativo');
        all.classList.add('ativo');
        inpu.classList.add('ativo');
    }
})

const closes = document.querySelector('.close');
const setor2 = document.querySelector('.setor2');

closes.addEventListener('click', ()=>{
    if(setor2.classList.contains('ativado')){
        setor2.classList.remove('ativado');
    }
    else{
        setor2.classList.add('ativado');
    }
})

  