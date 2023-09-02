const signupbutton = document.getElementById("SignUp");
const signinbutton =document.getElementById("SignIn");
const container =document.getElementById("container");

signupbutton.addEventListener('click',()=>{
    container.classList.add("right-panel-active");
})

signinbutton.addEventListener('click',()=>{
    container.classList.remove("right-panel-active");
})

