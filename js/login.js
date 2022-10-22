const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form")

const hiddenClassName = "hidden";
const strUserName = "username";

function onLoginSubmit(event){
  event.preventDefault();
  const inputUserName = loginInput.value; 
  loginForm.classList.add(hiddenClassName);
  localStorage.setItem(strUserName, inputUserName);
  showGreeting(inputUserName); 
}

function onLogoutSubmit(){
  localStorage.removeItem(strUserName);
  window.location.reload()
}

function showGreeting(username){
  greeting.innerText = `안녕하세요 ${username}님`;
  greeting.classList.remove(hiddenClassName);
  logoutForm.classList.remove(hiddenClassName);
  logoutForm.addEventListener("submit", onLogoutSubmit);
}

const savedUserName = localStorage.getItem(strUserName);

if (savedUserName === null){
  loginForm.classList.remove(hiddenClassName);
  loginForm.addEventListener("submit", onLoginSubmit); 
} else {
  showGreeting(savedUserName);
}