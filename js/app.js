var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

var body = document.querySelector("body");

window.onscroll = () =>{

    loginForm.classList.remove('active');
}

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});