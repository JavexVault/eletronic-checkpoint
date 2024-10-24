const btnBaterPonto = document.getElementById('btn-bater-ponto');
const dialogRegistrar = document.getElementById('dialog-registrar-ponto');
const fecharDialogBaterPonto = document.getElementById('fechar-dialog-bater-ponto');
const dialogBaterPonto = document.getElementById('dialog-bater-ponto');
const blurBackground = document.getElementById('blur-background');
const hour = document.getElementById('hour');

const data = document.getElementById('date');

btnBaterPonto.addEventListener('click', () => {
    dialogBaterPonto.style.display = 'flex';
    blurBackground.style.display = 'block';
});

fecharDialogBaterPonto.addEventListener('click', () => {
    dialogBaterPonto.style.display = 'none';
    blurBackground.style.display = 'none';
});

function getHour() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    hour.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(getHour,0000)

function getDate (){
    const date = new Date();
    const day = String(date.getDate()).padStart(2,"0");
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const year = date.getFullYear();

    data.innerText = `${day}/${month}/${year}`

}
getDate()
