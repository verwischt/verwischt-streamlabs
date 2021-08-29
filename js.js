
setTimeout(function getNickname() {
// Procura de define a variável do nickname
    var divNickname = document.getElementById("alert-message");
    let nickname = divNickname.innerText;

// Escreve o nickname na header
    var divHeader = document.getElementById("alert-header");
    divHeader.innerHTML = `<span id="alert-header-text" class="glitch" data-glitch="${nickname}">${nickname}</span>`;

    var divLogo = document.getElementById("alert-header-logo");
    divLogo.style.display = 'none'
}, 2500);
