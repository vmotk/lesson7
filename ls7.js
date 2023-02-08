const loginForm = document.getElementById("login-form");
const rightUsername = 'hieubeo'
const rightPassword = '123456'

loginForm.addEventListener("submit", function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    if (username == rightUsername || password == rightPassword) {
        alert("Login sucess!");
    } else {
        alert("Login fail!");
    }
    alert("username :" + username + "\npassword :" + password + "\nname :" + name ) ;
});

