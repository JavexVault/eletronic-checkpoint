// puxar os dados do localStorage para o codigo
const registers = JSON.parse(localStorage.getItem('registers')) || []; 
const registrosContainer = document.getElementById('registros-container');

// funcao que criará divs dentro da elemento pai (registros-container) para que seja inserida cada registro do usuario
// obs: nao precisa declarar variaveis para puxar cada elemento do localStorage (name, type, etc...), ele já obtem todos eles usando o codigo ali de cima
function criarRegistro({ name, type, time, date }) {
    // aqui cria uma nova div dentro da registros-container, que nem o Gabriel tinha feito
    const registroDiv = document.createElement('div');
    // Aqui eu adiciono uma classe para a div que acabei de criar, para que ela pegue o estilo que o Gabriel definiu no style.css
    registroDiv.classList.add('registro');
    // Aqui ele vai adicionar todos esses elementos abaixo dentro da div registro
    registroDiv.innerHTML = 
    `
        <div class="nome-e-tipo">
            <p>${name}</p>
            <p>${type}</p>
        </div>
        <div class="botoes-info">
            <button>/</button>
            <button>X</button>
            <p>${time}</p>
            <p>${date}</p>
        </div>
    `;
    return registroDiv;
}
// um loop para pegar cada registro do localStorage, pois cada um representa um array de objeto
for (let i = 0; i < registers.length; i++) {
    // o prepend serve para fazer uma pilha (colocar os ultimos registros por cima dos primeiros)
    // caso queira colocar ao contrario, usa o comando appendChild
    registrosContainer.prepend(criarRegistro(registers[i]));
}