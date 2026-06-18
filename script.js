function register() {

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful");

    window.location.href = "login.html";
}

function login() {

    let username =
    document.getElementById("loginUsername").value;

    let password =
    document.getElementById("loginPassword").value;

    let savedUsername =
    localStorage.getItem("username");

    let savedPassword =
    localStorage.getItem("password");

    if(
        username === savedUsername &&
        password === savedPassword
    ){
        localStorage.setItem("loggedInUser", username);

        alert("Login Successful");

        window.location.href = "home.html";
    }
    else{
        alert("Invalid Username or Password");
    }
}