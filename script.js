let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo  = document.querySelector('.d-1-2 span');
let descricao  = document.querySelector('.d-1-4');
let aviso  = document.querySelector('.d-2');
let lateral  = document.querySelector('.d-1-right');
let numeros  = document.querySelector('.d-1-3');

let etapaAtual = 0;

function comecarEtapa(){
    
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    seuVotoPara.styledisplay = 'none';
    cargo.innerHTML = etapas.titulo;
    descricao.innerHTML = '';
    aviso.styledisplay = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}

function clicou(n){
    
}

function branco(){

}

function corrigi(){

}

function confirma(){

}

comecarEtapa();