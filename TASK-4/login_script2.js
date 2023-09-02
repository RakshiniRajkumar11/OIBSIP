// login_script2.js

document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.querySelector(".sign-in-cont form");
    const signUpForm = document.querySelector(".sign-up-cont form");

    function resetFormFields(form) {
        const inputFields = form.querySelectorAll("input");
        inputFields.forEach((input) => {
            input.value = "";
        });
    }

    function saveUserToLocalStorage(user) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }

    function validateCredentials(email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        for (const user of users) {
            if (user.email === email && user.password === password) {
                return true;
            }
        }
        return false;
    }

    signInForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = signInForm.querySelector("input[type='email']").value;
        const password = signInForm.querySelector("input[type='password']").value;
        
        if (validateCredentials(email, password)) {
            alert("Successfully signed in!");
            resetFormFields(signInForm);
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = signUpForm.querySelector("#name").value;
        const email = signUpForm.querySelector("#email").value;
        const password = signUpForm.querySelector("#password").value;
        
        const newUser = { name, email, password };
        saveUserToLocalStorage(newUser);
        alert("Successfully registered!");
        resetFormFields(signUpForm);
    });
});
