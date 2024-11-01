const user = {
    name: '',
    date: '',
    time: '',
    type: '',
};

const userPassado = {
    name: '',
    date: '',
    time: '',
    type: '',
};

///////////////////////////////////////////
// Pegando o nome salvo no local storage //
///////////////////////////////////////////

const savedUserName = localStorage.getItem('userName');
if (savedUserName) {
    user.name = savedUserName;
    userPassado.name = savedUserName;
}


/////////////////////////////////////////
// Variaveis do arquivo dashboard.html //
/////////////////////////////////////////

const dialogPassadoDate = document.getElementById('dialog-passado-date');
const dialogPassadoTime = document.getElementById('dialog-passado-time');
const dialogPassadoSelect = document.getElementById('dialog-passado-select');

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
const dlgPontoPassado = document.getElementById('dialog-ponto-passado')
const fecharDlgPontoPassado = document.getElementById('fechar-dialog-ponto-passado')
const dlgBaterPontoPassado = document.getElementById('dlg-bater-ponto-passado');
const btnRegistrarDialogPassado = document.getElementById('btn-registrar-dialog-passado');
const dlgJustificarFalta = document.getElementById('dialog-justificar-falta'); //div
const justificarInput = document.getElementById('justificar-input');
const justificarArquivo = document.getElementById('justificar-arquivo');
const dlgBaterPontoJustificar = document.getElementById('dlg-bater-ponto-justificar-falta'); //buton
const fecharDialogJustificar = document.getElementById('fechar-dialog-justificar-falta');
const dlgJustificarFaltaRegistro = document.getElementById('dlg-justificar-falta-registro');

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

// TODO
btnRegistrarDialogPassado.addEventListener('click', () => {
    let dataString = dialogPassadoDate.value;
    let partesData = dataString.split('-');
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

    userPassado.date = dataFormatada;
    userPassado.time = `${dialogPassadoTime.value}:00`
    userPassado.type = dialogPassadoSelect.value
    
    let registrosExistentes = JSON.parse(localStorage.getItem('registers-past')) || [];
    
    registrosExistentes.push(userPassado);
    
    alert("Registrado com sucesso!");

    localStorage.setItem('registers-past', JSON.stringify(registrosExistentes));
})

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

dlgBaterPontoPassado.addEventListener('click', () => {
    dlgPontoPassado.style.display = "flex";
    dialogBaterPonto.style.display = "none"; 
})


fecharDlgPontoPassado.addEventListener("click", () => {
    dlgPontoPassado.style.display = "none";
    dialogBaterPonto.style.display = "none";
    blurBackground.style.display = "none";
})

dlgBaterPontoRegistro.addEventListener('click', () => {
    user.type = tipoEntrada.value;
    
    let registros = JSON.parse(localStorage.getItem('registers')) || [];
    
    registros.push(user);
    
    alert("Registrado com sucesso!");

    localStorage.setItem('registers', JSON.stringify(registros));

    dialogBaterPonto.style.display = 'none';
    blurBackground.style.display = 'none';
});

dlgBaterPontoJustificar.addEventListener('click', () => {       //abre a porra do dialog justificar
    dlgJustificarFalta.style.display = 'flex';
    dialogBaterPonto.style.display = 'none'
});

fecharDialogJustificar.addEventListener('click',() => {
    dlgJustificarFalta.style.display = 'none';
    blurBackground.style.display = 'none'
})

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
    dialogBaterPonto.style.display = 'none';
    dlgPontoPassado.style.display = 'none';
    dlgJustificarFalta.style.display = 'none';
});

dlgJustificarFaltaRegistro.addEventListener('click', () => {
    const textoJustificativa = justificarInput.value;
    const arquivoJustificativa = justificarArquivo.files[0];

    const justificativa = {
        texto: textoJustificativa,
        arquivo: null,
    };

    if (arquivoJustificativa) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            justificativa.arquivo = event.target.result;
            
            let justificados = JSON.parse(localStorage.getItem('justificados')) || [];
            
            justificados.push(justificativa);
            
            alert('Justificativa salva com sucesso!');
            
            localStorage.setItem('justificados', JSON.stringify(justificados));
        };

        reader.readAsDataURL(arquivoJustificativa);
    } else {
        let justificados = JSON.parse(localStorage.getItem('justificados')) || [];
        
        justificados.push(justificativa);
        
        alert('Justificativa de texto salva com sucesso!');
        
        localStorage.setItem('justificados', JSON.stringify(justificados));
    }
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
