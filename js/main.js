// HTML STUFF

let userName = document.querySelector(".avatar-content")
userName.innerHTML = '<img class="avatar" src="/img/avatar-example.png"> <strong>Username</strong>'

let formName = document.querySelector("form input:nth-of-type(2)")
formName.setAttribute("placeholder", "Digite seu primeiro nome")

let elementsByName = document.getElementsByName("name")
elementsByName[0].setAttribute("placeholder", "Digite seu primeiro nome")

// ----------


// CSS STUFF

let formInputs = document.querySelectorAll("form input")

for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].style.borderRadius = "12px"
    formInputs[i].style.width = "85%"
}

let body = document.querySelector("body")
body.style.backgroundColor = "#fafafa"

let button = document.querySelector("button")
button.style.cssText = ("width: 100%")

// ---------