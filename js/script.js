const password = document.querySelector('#pwd');
const confirmPassword = document.querySelector('#confirm_pwd');

function validateConfirmPass(pass, confirmPass) {

    if (confirmPass.value.length >= 1) {

        if (pass.checkValidity() && pass.value === confirmPass.value) {
            pass.classList.remove('error');
            confirmPass.classList.remove('error');
        } else {
            pass.classList.add('error');
            confirmPass.classList.add('error')
        }
    
    } else {
        pass.classList.remove('error');
        confirmPass.classList.remove('error');
    }
}

confirmPassword.addEventListener('input', () => {

    validateConfirmPass(password, confirmPassword);
});


password.addEventListener('input', () => {

    validateConfirmPass(confirmPassword, password);
});
