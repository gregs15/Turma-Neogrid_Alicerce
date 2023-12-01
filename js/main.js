
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

document.addEventListener("DOMContentLoaded",function(){
    const signIn = document.getElementById("signin");
 
    signIn.addEventListener("submit", function(event) {
        event.preventDefault();
 
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "data.json", true);
 
        xhr.onload = function(){
            if (xhr.status === 200) {
                const responseData = JSON.parse(xhr.responseText)
                const email = document.getElementById("signin-email").value;
                const password = document.getElementById("signin-password").value;
 
                const users = responseData.Usuarios;
 
                const foundUser = users.find(user => user["signin-email"] === email && user["signin-password"] === password);
 
                if (foundUser !== undefined){
                    alert("Login realizado com sucesso!");
                    window.location.href = "Index.html";
                }
                else{
                    alert("Credencias invalidas, por favor tente novamente!");
                }
            }
        }
        xhr.send()
    })
})

document.addEventListener("DOMContentLoaded",function(){
    const signUp = document.getElementById("signup");
 
    signUp.addEventListener("submit", function(event) {
        event.preventDefault();
 
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "data.json", true);
 
        xhr.onload = function(){
            if (xhr.status === 200) {
                const responseData = JSON.parse(xhr.responseText)
                const email = document.getElementById("signup-email").value;
                const password = document.getElementById("signup-password").value;
                const password2 = document.getElementById("signup-password2").value;
 
                if (password !== password2) {
                    alert("As senhas não coincidem. Por favor, digite novamente.");
                    return;
                }
                const users = responseData.Cadastro;
 
                const foundUser = users.find(user => user["signup-email"] === email && user["signup-password"] === password  && user["signup-password2"] === password2);
 
                if (foundUser !== undefined){
                    alert("Cadastro realizado com sucesso!");
                    window.location.href = "Login.html";
                }
                else{
                    alert("Credencias invalidas, por favor tente novamente!");
                }
            }
        }
        xhr.send()
    })
})