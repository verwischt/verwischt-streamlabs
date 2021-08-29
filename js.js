setTimeout(function getNickname() {

// Oculta o logo no cabeçálho do alerta
        var divLogo = document.getElementById("alert-header-logo");
        divLogo.style.display = 'none';

// Procura e define a variável do nickname nas DIVs de referência.
    var divNickname = document.getElementById("alert-message");
    let nickname = divNickname.innerText;

// Escreve o nickname no cabeçálho do alerta
    var divHeader = document.getElementById("alert-header");
    divHeader.innerHTML = `<span id="alert-header-text-nick" class="glitch" data-glitch="${nickname}">${nickname}</span>`;

}, 2500); // Essas ações acontecerão 2 segundos e meio depois que a página iniciar. 