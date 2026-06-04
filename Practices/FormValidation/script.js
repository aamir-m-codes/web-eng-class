function f(){
    let pre_em = "test@gmail.com", pre_pass = "test123"
    let email, pass, error1, error2
    email = document.getElementById('email').value
    pass = document.getElementById('password').value
    error1 = document.getElementById('error1')
    error2 = document.getElementById('error2')

    if(email != pre_em){
        error1.hidden = false;
    }
    if(pass != pre_pass){
        error2.hidden = false;
    }
}