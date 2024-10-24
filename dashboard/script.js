import { getUser } from "../global.js";


/////////////////////////////////////////
// Variaveis do arquivo dashboard.html //
/////////////////////////////////////////


const btnBaterPonto = document.getElementById('btn-bater-ponto');
const dialogRegistrar = document.getElementById('dialog-registrar-ponto');
const fecharDialogBaterPonto = document.getElementById('fechar-dialog-bater-ponto');
const dialogBaterPonto = document.getElementById('dialog-bater-ponto');
const blurBackground = document.getElementById('blur-background');
const hour = document.getElementById('hour');
const data = document.getElementById('date');

const dialogHora = document.getElementById('dialog-hora');
const dialogData = document.getElementById('dialog-data');

//////////////////////////////////////////
// Função que faz div 'dialog' aparecer //
//////////////////////////////////////////

btnBaterPonto.addEventListener('click', () => {
    dialogBaterPonto.style.display = 'flex';
    blurBackground.style.display = 'block';

    salvaDataEHora();

    console.log(getUser());
});

///////////////////////////////////////////////
// Função que faz a div 'dialog' desaparecer //
///////////////////////////////////////////////

fecharDialogBaterPonto.addEventListener('click', () => {
    dialogBaterPonto.style.display = 'none';
    blurBackground.style.display = 'none';
});

//////////////////////////////////////////////////////////////
// Função que recebe a hora os minutos e os segundos atuais //
//////////////////////////////////////////////////////////////

function getHour() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    hour.innerText = `${hours}:${minutes}:${seconds}`;
}

getHour()
setInterval(getHour, 1000)

////////////////////////////////////////////////
// Função que recebe o dia o mês e o ano atual//
////////////////////////////////////////////////

function getDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2,"0");
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const year = date.getFullYear();
    data.innerText = `${day}/${month}/${year}`
}

getDate()
setInterval(getDate, 1000)

function salvaDataEHora() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2,"0");
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    dialogHora.innerText = `${hours}:${minutes}:${seconds}`;
    dialogData.innerText = `${day}/${month}/${year}`
}







////////////////////////////////////////////////