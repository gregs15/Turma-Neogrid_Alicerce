
document.addEventListener("DOMContentLoaded", function () {
  
    var formSignin = document.querySelector('#signin');
    var formSignup = document.querySelector('#signup');
    var btnColor = document.querySelector('.btnColor');

    document.querySelector('#btnSignin').addEventListener('click', function () {
        formSignin.style.left = "25px";
        formSignup.style.left = "450px";
        btnColor.style.left = "0px";

        formSignup.classList.remove('active');
        formSignin.classList.add('active');
    });

    document.querySelector('#btnSignup').addEventListener('click', function () {
        formSignin.style.left = "-450px";
        formSignup.style.left = "25px";
        btnColor.style.left = "110px";

        formSignin.classList.remove('active');
        formSignup.classList.add('active');
    });
});
function Login() {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

   
    if(!userName || !password){
        alert("Preencha todos os campos necessários");
        return;
    }


    if (json && json.Usuarios) {
        const user = json.Usuarios.find(u => u.username === userName && u.password === password);

        if (user) {
            alert("Login realizado com sucesso");
            window.location.href = "https://google.com";
        } else {
            alert("Usuário não encontrado, favor tentar novamente");
            window.location.href = "Login.html";
        }
    } else {
        console.error('"Usuarios" não encontrados.');
    }
}


const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            try {
                json = JSON.parse(xhr.responseText);
            } catch (error) {
                console.error('Erro:', error);
            }
        } else {
            console.error('Erro,  Status:', xhr.status);
        }
    }
};

xhr.open('GET', 'data.json', true);
xhr.send();