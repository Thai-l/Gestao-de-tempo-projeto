document.getElementById('Form').addEventListener('submit', function (event) {
    event.preventDefault();

    let atividade = document.getElementById("nome-atividade");
    let carga = document.getElementById("carga-Horaria");
    let data_inicial = document.getElementById("data-inicio");
    let data_final = document.getElementById("data-final");
    let tipo = document.getElementById("tipo-atividade");
    let descricao = document.getElementById("descricao");
    let prioridade = document.getElementById("prioridade");

    if (carga.value == "") {

        atividade.style.border = "red thin solid";

    } else {

        let dadosLocais = localStorage.getItem('dados');

        if (dadosLocais == null) {
            let tudo = [];

            let dados = {
                "nome": atividade.value,
                "Carga": carga.value,
                "inicio": data_inicial.value,
                "final": data_final.value,
                "tipo": tipo.value,
                "descricao": descricao.value,
                "lista": prioridade.value

            }

            tudo.push(dados);

            localStorage.setItem('dados', JSON.stringify(tudo));
            alert("Cadastro efetuado com sucesso");
            window.location.href= './home.html';
            
}

     else {

            let vet = [];
            vet = JSON.parse(dadosLocais);

            let dados = {
                "nome": atividade.value,
                "Carga": carga.value,
                "inicio": data_inicial.value,
                "final": data_final.value,
                "tipo": tipo.value,
                "descricao": descricao.value,
                "lista": prioridade.value
            }

            vet.push(dados);

            localStorage.setItem('dados', JSON.stringify(vet));
            alert("Cadastro efetuado com sucesso");
            window.location.href= './home.html';
            

        }


    }
});