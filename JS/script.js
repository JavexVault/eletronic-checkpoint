const btnBaterPonto = document.getElementById('btn-bater-ponto');
const dialogRegistrar = document.getElementById('dialog-registrar-ponto');
const fecharDialogBaterPonto = document.getElementById('fechar-dialog-bater-ponto');
const dialogBaterPonto = document.getElementById('dialog-bater-ponto');
const blurBackground = document.getElementById('blur-background');

const hour = document.getElementById('hour');

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

