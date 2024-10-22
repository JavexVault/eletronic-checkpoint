const btnBaterPonto = document.getElementById('btn-bater-ponto')
const dialogRegistrar = document.getElementById('dialog-registrar-ponto')
const btnDialogFechar = document.getElementById('dialog-fechar')


btnBaterPonto.addEventListener('click', ()=>{
    dialogRegistrar.showModal()
})

btnDialogFechar.addEventListener('click', ()=>{
    dialogRegistrar.close()
})