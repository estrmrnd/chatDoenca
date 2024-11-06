function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "example@email.com" && senha == "123") {
        location.href = "chat.html";
    } else {
        alert('Usuário ou senha incorretos, tente novamente!')
    }
}