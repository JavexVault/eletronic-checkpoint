const user = {
    name: '',
    date: '',
    time: '',
    type: '',
};

let registers = []

///////////////////////////////////////////
// Pegando o nome salvo no local storage //
///////////////////////////////////////////

const savedUserName = localStorage.getItem('userName');
if (savedUserName) {
    user.name = savedUserName;
}

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
const dlgBaterPontoRegistro = document.getElementById('dlg-bater-ponto-registro');
const tipoEntrada = document.getElementById('tipo-entrada');
const dialogHora = document.getElementById('dialog-hora');
const dialogData = document.getElementById('dialog-data');
const btnCalcular = document.getElementById('calcular');
const calculoContent = document.getElementById('calculo-content');
const fecharCalculoBtn = document.getElementById('fechar-calculo');

const horasInput = document.getElementById('horas-trabalhadas');
const valorPorHoraInput = document.getElementById('valor-hora');
const calcularSalarioBtn = document.getElementById('btn-calcular-salario');
//////////////////////////////////////////
// Função que faz div 'dialog' aparecer //
//////////////////////////////////////////

btnBaterPonto.addEventListener('click', () => {
    dialogBaterPonto.style.display = 'flex';
    blurBackground.style.display = 'block';

    salvaDataEHora();

    console.log(user);
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
    return `${hours}:${minutes}:${seconds}`;
}

hour.innerText = getHour()
setInterval(() => {
    hour.innerText = getHour()
}, 1000)

////////////////////////////////////////////////
// Função que recebe o dia o mês e o ano atual//
////////////////////////////////////////////////

function getDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2,"0");
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

data.innerText = getDate()
setInterval(() => {
    data.innerText = getDate()
}, 1000)

function salvaDataEHora() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2,"0");
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    dialogHora.innerText = `${hours}:${minutes}:${seconds}`;
    dialogData.innerText = `${day}/${month}/${year}`;

    user.time = `${hours}:${minutes}:${seconds}`;
    user.date = `${day}/${month}/${year}`;
}

dlgBaterPontoRegistro.addEventListener('click', () => {
    user.type = tipoEntrada.value;

    registers.push({...user});

    localStorage.setItem('registers', JSON.stringify(registers));
});


// Manipulação do Dialog que aparece ao clicar no botão Calcular do Dashboard //
btnCalcular.addEventListener('click', () => {
    calculoContent.style.display = 'flex';
    blurBackground.style.display = 'block';
});

fecharCalculoBtn.addEventListener('click', () => {
    calculoContent.style.display = 'none';
    blurBackground.style.display = 'none';
});

blurBackground.addEventListener('click', () => {
    calculoContent.style.display = 'none';
    blurBackground.style.display = 'none';
});

////////////////////////////////////////////////////////////////////////
// Função que calcula o salário baseado no número de horas trabalhado //
////////////////////////////////////////////////////////////////////////

calcularSalarioBtn.addEventListener('click', () => {
    const horasTrabalhadas = parseFloat(horasInput.value);
    const valorPorHora = parseFloat(valorPorHoraInput.value);

    // Verifica se os valores são válidos
    if (!isNaN(horasTrabalhadas) && !isNaN(valorPorHora) && horasTrabalhadas >= 0 && valorPorHora >= 0) {
        const salario = horasTrabalhadas * valorPorHora;
        
        alert(`O salário calculado é: R$ ${salario.toFixed(2)}`); // Formatação em Reais //
    } else {
        alert('Por favor, insira valores válidos para horas trabalhadas e valor por hora.');
    }
});
