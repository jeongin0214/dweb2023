const login = document.getElementById("login");
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginCorrectMsg = document.getElementById("login-correct-msg");
const loginErrorMsgHolder = document.getElementById("login-error-msg-holder") ;
const loginCorrectMsgHolder = document.getElementById("login-correct-msg-holder") ;

const loginHeader = document.getElementById("login-header") ;
const maina = document.getElementById("main") ;
const usernameField = document.getElementById("username-field") ;
const passwordField = document.getElementById("password-field") ;
const loginFormSubmit = document.getElementById("login-form-submit") ;

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "safety" && password === "isthebest!") {
        alert("You have successfully logged in.");
        loginHeader.style.display = "none" ;
        maina.style.display = "none" ;
        usernameField.style.display = "none" ;
        passwordField.style.display = "none" ;
        loginFormSubmit.style.display = "none" ;
        
        loginErrorMsgHolder.style.display = "none"
        
        
        loginErrorMsg.style.opacity = 0;
        loginCorrectMsgHolder.style.display = "grid";
        
        loginCorrectMsg.style.opacity = 1 ; 
        location = reload() ; 
        
        
    } else {
        loginErrorMsgHolder.style.display = "grid"
        loginErrorMsg.style.opacity = 1;
    }
});

function service() {
  
  
  if (loginCorrectMsg.style.opacity == 0) {
    
     alert("TBM은 로그인 후 사용하실 수 있습니다.");   
     
    }    else {
       
       location.href="https://jeongin0214.github.io/dweb2023/survey.html"
 
    }
}
