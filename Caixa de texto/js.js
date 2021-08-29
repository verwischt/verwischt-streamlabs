var test = document.getElementById("alert-message");

if (test.innerText != '' || null) {
    console.log('Diferente de nada.')
    
} else {
    console.log('Nada.')
}

// TODO: Criar um script que vá injetar o código da caixa de texto no alerta. Essa é a única forma de fazê-lo. 
// TODO: Preciso reescrever a forma como o script puxaos dados da mensagem. 
// !!!!: É importante que tenha pelo menos um timeout de 100ms para puxar a mensagem. 