let submitButton = document.getElementById("submit");

let firstName = document.getElementById("first_name");
let errorFirstName = document.getElementById("error_first_name");

let lastName = document.getElementById("last_name");
let errorLastName = document.getElementById("error_last_name");

let password = document.getElementById("password");
let errorPassword = document.getElementById("error_password");

let email = document.getElementById("email");
let errorEmail = document.getElementById("error_email");


submitButton.addEventListener('click', validation);

function validation(e) {

    if (firstName.validity.valueMissing) {
        e.preventDefault();
        errorFirstName.innerHTML = "First Name cannot be empty";
        firstName.style.borderColor = "hsl(0, 100%, 74%)";
        firstName.style.background = " url(images/icon-error.svg) no-repeat right";
        firstName.style.backgroundPositionX = "95%";
    }

    if (lastName.validity.valueMissing) {
        e.preventDefault();
        errorLastName.innerHTML = "Last Name cannot be empty";
        lastName.style.borderColor = "hsl(0, 100%, 74%)";
        lastName.style.background = " url(images/icon-error.svg) no-repeat right";
        lastName.style.backgroundPositionX = "95%";
    }

    if (password.validity.valueMissing) {
        e.preventDefault();
        errorPassword.innerHTML = "Password cannot be empty";
        password.style.borderColor = "hsl(0, 100%, 74%)";
        password.style.background = " url(images/icon-error.svg) no-repeat right ";
        password.style.backgroundPositionX = "95%";
    }

    if (!/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email.value)) {
        errorEmail.innerHTML = "Looks like this is not an email";
        email.style.color = "hsl(0, 100%, 74%)";
        email.style.borderColor = "hsl(0, 100%, 74%)";
        email.style.background = " url(images/icon-error.svg) no-repeat right";
        email.style.backgroundPositionX = "95%";
    }
}