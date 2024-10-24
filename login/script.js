import { setUser } from "../global.js";

const btnLogin = document.getElementById('btn-login');
const inputLogin = document.getElementById('input-login');


btnLogin.addEventListener('click', () => {
    setUser(inputLogin.value);
})