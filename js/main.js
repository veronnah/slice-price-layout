let phoneInput = document.querySelector('.input-tel');
let passInput = document.querySelector('.input-pass');
let form = document.querySelector('.authorization-form');

phoneInput.addEventListener('click', ()=>{
    passInput.style.visibility = "visible ";
    phoneInput.style.marginBottom = "5px";
});


