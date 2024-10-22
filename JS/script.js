const btnBaterPonto = document.getElementById('btn-bater-ponto')
const dialogRegistrar = document.getElementById('dialog-registrar-ponto')
const btnDialogFechar = document.getElementById('dialog-fechar')


////////////////////////////////
// Função para abrir o Dialog //
////////////////////////////////

btnBaterPonto.addEventListener('click', ()=>{
    dialogRegistrar.showModal()
})

/////////////////////////////////
// Função para fechar o Dialog //
/////////////////////////////////

btnDialogFechar.addEventListener('click', ()=>{
    dialogRegistrar.close()
})