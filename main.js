const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-12T00:00:00");
const tempoObjetivo2 = new Date("2025-02-01T00:00:00");
const tempoObjetivo3 = new Date("2029-12-30T00:00:00");
const tempoObjetivo4 = new Date("2040-08-20T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    let mês = Math.floor(dias / 30);
    let anos = Math.floor(mês/ 12);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    dias%= 30;
    mês %= 12;
    
    if (tempoFinal > 0){
        return [anos,mês,dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0,0,0];
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("anos"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("mês"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[3];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[4];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[5];   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();