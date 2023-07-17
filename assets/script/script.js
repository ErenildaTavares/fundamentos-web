/*
let txtNome = document.getElementById("txtNome")
function validaNome(){
    if(nome.value.length <2)

}*/

// let nome = document.getElementById("nome")
// let email = document.querySelector("#email")
// let assunto = document.querySelector("#assunto")
document.getElementById('contatoForm').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
    var assunto = 'Olá destinatário, \nMeu nome é ' + nome + ' e meu email é ' + email;
    this.querySelector('input[name=assunto]').setAttribute('value', assunto);
});
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 2) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres "
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

let url = "mailto:ctterenildatavares@gmail.com" +
    "?subject=" + encodeURIComponent("Contato pelo formulário") +
    "&body=" + encodeURIComponent("Nome: " + nome.value + "\nE-mail: " + email.value + "\nMensagem: " + assunto.value);


function enviar() {
    if (nomeOk == true && emailOk && assuntoOk == true) {
        alert('Clique em "Ok" para prosseguir com o envio do email!')
        // Redirecione o usuário para o cliente de e-mail padrão com a URL de envio do e-mail
        window.location.href = url;
    } else {
        alert('Preencha p formulário corretamente antes de enviar!')
    }
    console.log(assunto.value)
}


function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.heigth = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.heigth = "250px"
}
