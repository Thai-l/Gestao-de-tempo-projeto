function Login() {

  let email = document.getElementById("email_cad").value;
  
  let password = document.getElementById("password").value;
  

  // email = email.value.toLowerCase();
  // password = password.value.toLowerCase();
  let dados = localStorage.getItem("user");
  let dadoswithoutJSON = JSON.parse(dados);
  for (const object of dadoswithoutJSON) {

    if (email == object.email && password == object.password ) {
      console.log(object.email)
      window.location.href= './home.html';
  } else {
    alert("Usuário ou senha não conferem");
  }
  return;
            
        }

        alert("Requisição indisponivel")
        return;
    }


function salvarFormulario(){
  var nome = document.getElementById("nome");
  var email = document.getElementById("email_cad");
  var password = document.getElementById("senha");
  var telefone = document.getElementById("telefone");

var dados = JSON.parse( localStorage.getItem("user"));

  if(dados == null){
    localStorage.setItem("user","[]");
    dados = [];
  }

  // nome = nome.value.toLowerCase();
  // email = email.value.toLowerCase();
  // password = password.value.toLowerCase();
  // telefone = telefone.value.toLowerCase();
  // if (nome == "" && password == ""&& email =="" && telefone == "") {
  //   alert("Cadastro incompleto");
    
  // } else {
  //   window.location.href= './home.html';
var auxRegistro ={
nome: nome.value,
email: email.value,
password: password.value,
celular: telefone.value,
}
dados.push(auxRegistro);
localStorage.setItem("user", JSON.stringify(dados));
alert("Cadastro efetuado com sucesso")

 nome.value = "";
 email.value = "";
 password.value = "";
 telefone.value ="";

 window.location.href= './logar.html';
}

function cancelar(){
  window.location.href= './logar.html';
}

