const btnLogin = document.getElementById('btn-login');
const inputLogin = document.getElementById('input-login');


btnLogin.addEventListener('click', () => {
    const username = inputLogin.value;
    localStorage.setItem('userName', username);
})