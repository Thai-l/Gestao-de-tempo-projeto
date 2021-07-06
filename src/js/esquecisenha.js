function forgotpassword(event) {
    
    // event.preventDefault();

    let email = document.getElementById('email_cad').value;

    let dados = localStorage.getItem("user")

    let dadoswithoutJSON = JSON.parse(dados)


    for (const object of dadoswithoutJSON) {

        if (email === object.email) {
            let NewPassword = document.getElementById('senha').value;

            if (NewPassword) {
                object.password = NewPassword;
                setNewPassword(dadoswithoutJSON);
                alert("senha alterada com sucesso!");
                window.location.href= './logar.html';

                return;
                
            }

            alert("Requisição indisponivel")
            return;
        }
    }

    alert('Email invalido');
}

function setNewPassword(dadoswithoutJSON) {
    localStorage.setItem("user", JSON.stringify(dadoswithoutJSON));
    return;
}


// document.getElementById("forgotpassword").addEventListener("click", forgotpassword);


function cancelar(){
    window.location.href= './logar.html';
  }