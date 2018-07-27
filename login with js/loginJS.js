var userBox=document.querySelector('#username');
var passwordBox=document.querySelector('#password');

var usernameError=document.querySelector('#text_error');
var passwordError=document.querySelector('#password_error');

userBox.addEventListener('blur',eventUser);
passwordBox.addEventListener('blur',eventPassword);

function validForm() {
    var result=true;
    if(userBox.value===''){
        userBox.style.borderBottomColor='red';
        usernameError.textContent='please enter valid username';
        usernameError.style.color='red';

        result=false;
        return result;
    }

    if(passwordBox.value===''){
        passwordBox.style.borderBottomColor='red';
        passwordError.textContent='please enter password';
        passwordError.style.color='red';

        result=false;
        return result;
    }

    if (result===false){
        return false;
    }
    else {
        alert('LogIn Successful!!');
       return true;
    }

}

function eventUser() {
    userBox.style.borderBottomColor='#1d7b9f';
    usernameError.textContent='';

}
function eventPassword() {
    passwordBox.style.borderBottomColor='#1d7b9f';
    passwordError.textContent='';
}