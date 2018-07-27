var firstNameBox=document.querySelector('#firstname');
var lastNameBox=document.querySelector('#lastname');
var userNameBox=document.querySelector('#username');
var emailBox=document.querySelector('#email');
var passwordBox=document.querySelector('#password');
var confirmPasswordBox=document.querySelector('#confirmpassword');
var dateBox=document.querySelector('#date');
var mobileBox=document.querySelector('#mobile');

var firstNameError=document.querySelector('#firstName_error');
var lastNameError=document.querySelector('#lastName_error');
var userNameError=document.querySelector('#userName_error');
var emailError=document.querySelector('#email_error');
var passwordError=document.querySelector('#password_error');
var confirmPasswordError=document.querySelector('#confirmPassword_error');
var dateError=document.querySelector('#date_error');
var mobileError=document.querySelector('#mobileNumber_error');

firstNameBox.addEventListener('blur',first);

lastNameBox.addEventListener('blur',last);

userNameBox.addEventListener('blur',user);

emailBox.addEventListener('blur',email);

passwordBox.addEventListener('blur',pass);

confirmPasswordBox.addEventListener('blur',confirmPass);

dateBox.addEventListener('blur',date);

mobileBox.addEventListener('blur',mobile);


function formSubmitted() {
    var result=true;

    if(firstNameBox.value===''){
        firstNameBox.style.borderBottomColor='red';
        firstNameError.textContent='required First Name';
        firstNameError.style.color='red';
        result=false;
        return result;
    }
    if(lastNameBox.value===''){
        lastNameBox.style.borderBottomColor='red';
        lastNameError.textContent='required Last Name';
        lastNameError.style.color='red';
        result=false;
        return result;
    }
    if(userNameBox.value===''){
        userNameBox.style.borderBottomColor='red';
        userNameError.textContent='required username';
        userNameError.style.color='red';
        result=false;
        return result;
    }
    if(emailBox.value===''){
        emailBox.style.borderBottomColor='red';
        emailError.textContent='required valid email';
        emailError.style.color='red';
        result=false;
        return result;
    }
    if(passwordBox.value===''){
        passwordBox.style.borderBottomColor='red';
        passwordError.textContent='required password';
        passwordError.style.color='red';
        result=false;
        return result;
    }

    if(confirmPasswordBox.value===''){
        confirmPasswordBox.style.borderBottomColor='red';
        confirmPasswordError.textContent='re-enter password';
        confirmPasswordError.style.color='red';
        result=false;
        return result;
    }
    if(dateBox.value===''){
        dateBox.style.borderBottomColor='red';
        dateError.textContent='required date of birth';
        dateError.style.color='red';
        result=false;
        return result;
    }
    if(mobileBox.value===''){
        mobileBox.style.borderBottomColor='red';
        mobileError.textContent='required mobile number';
        mobileError.style.color='red';
        result=false;
        return result;
    }
    if(result===false){
        return false;
    }
    else {
        alert('Your account has been created successfully!!Please LogIn');
        return true;
    }

    //password match validation
    if(passwordBox.value!==confirmPasswordBox.value){
        confirmPasswordBox.style.borderBottomColor='#1d7b9f';
        confirmPasswordError.textContent='password did not match';
        result=false;
        return result;
    }
}

function first() {
    firstNameBox.style.borderBottomColor='#1d7b9f';
    firstNameError.textContent='';
}

function last() {
    lastNameBox.style.borderBottomColor='#1d7b9f';
    lastNameError.textContent='';
}

function user() {
    userNameBox.style.borderBottomColor='#1d7b9f';
    userNameError.textContent='';
}

function email() {
    emailBox.style.borderBottomColor='#1d7b9f';
    emailError.textContent='';
}

function pass() {
    passwordBox.style.borderBottomColor='#1d7b9f';
    passwordError.textContent='';
}

function confirmPass() {
    confirmPasswordBox.style.borderBottomColor='#1d7b9f';
    confirmPasswordError.textContent='';
}

function date() {
    dateBox.style.borderBottomColor='#1d7b9f';
    dateError.textContent='';
}

function mobile() {
    mobileBox.style.borderBottomColor='#1d7b9f';
    mobileError.textContent='';
}