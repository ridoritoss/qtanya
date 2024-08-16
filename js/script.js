const formLogin = document.getElementById("form-login")
const buttonLogin = document.getElementById("button-login")

formLogin.addEventListener("submit", (e)=>{
    e.preventDefault() 
    
    if(localStorage.getItem != null){
        localStorage.removeItem("username")
        localStorage.removeItem("age")
    }
    
    let loginUsername = document.getElementById('login_username').value
    let loginAge = document.getElementById('login_age').value

    let loginUser = [loginUsername, loginAge]

    localStorage.setItem("login", loginUser)

    window.location.href = "../quis.html" 
    
})

