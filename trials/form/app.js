const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('password2');

// console.log(form, Username, email, password, passwordTwo)

form.addEventListener('click', (e) => {
    e.preventDefault()
    checkInput()
})

function checkInput() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = passwordTwo.value.trim()

    if (usernameValue === '') {
        setErrorFor(username, 'username cannot be blank')
    } else {
        setSuccesFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'email cannot be blank')

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'email is not valid')

    } else {
        setSuccesFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be blank')
    }
    else {
        setSuccesFor(password)
    }


    if (password2Value === '') {
        setErrorFor(passwordTwo, 'password2 cannot be blank')
    } else if (passwordValue !== password2Value) {
        setErrorFor(passwordTwo, 'passwords does not match')
    } else {
        setSuccesFor(passwordTwo)
    }




}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.textContent = message
    formControl.className = 'form-control error'
}

function setSuccesFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
    const small = formControl.querySelector('small')

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}





