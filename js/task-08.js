const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', checkSubmit);

function checkSubmit (auth){
    auth.preventDefault();
    const {elements:{email, password},} = auth.currentTarget;
    if(email.value === '' || password.value === '') {
        alert('Заповни всі поля')
    }
    else {
        const formData = {email:email.value , password:password.value};
        console.log('formData:', formData);
        auth.currentTarget.reset()
    }

}
