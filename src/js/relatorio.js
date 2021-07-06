
/* function setLocal() {
    // Content-type : JSON
    localStorage.setItem("dadosUser", JSON.stringify({
        begin: "8:00",
        end: "10:50"
    }))
}  */
//setLocal();
function fillH5() {
    const objeto = JSON.parse(localStorage.getItem('dados'));
    var qtdmaterias = objeto.length
    /**TOTAIS */
    let tarefasfim = 0
    let tarefaspen = 0
    let totalfim = 0
    var cargahtotal = 0
    console.log(sessionStorage.getItem('data'));
    var dataredef = sessionStorage.getItem('data');
    if (dataredef > 0) {
        var datastring = dataredef.toString()
        document.getElementById('data-inicio').value = datastring.substr(0, 4) + "-" +
            datastring.substr(4, 2) + "-" +
            datastring.substr(6, 2)
    }
    else {
        var today = new Date();
        var datastring = today.getFullYear() + "-" +
            String(today.getMonth() + 1).padStart(2, '0') + "-" +
            String(today.getDate()).padStart(2, '0')
        //        document.getElementById('data-inicio').value = datastring
        //        datafil = datastring.split("-");
    }
    console.log(dataredef)
    document.getElementById('data-inicio').addEventListener('change', (event) => {
        datafil = document.getElementById("data-inicio").value;
        datafil = datafil.split("-");
        let dataredef = datafil[0] + datafil[1] + datafil[2]
        sessionStorage.setItem('data', dataredef);
        location.reload()
    });
    objeto.forEach(function (objeto, i) {
        cargahtotal = parseInt(objeto['Carga']) + cargahtotal
    });
    tarefaspen = objeto.length
    let estrutura = `<div class="minicontainer1"> 
        <a>${tarefasfim}</a>     
        <p><a>Tarefas concluídas</a></p>
        </div> <div class="minicontainer1"> 
        <a>${tarefaspen}</a>   
        <p><a>Tarefas Pendentes</a></p>
        </div> <div class="minicontainer1"> 
        <a>${cargahtotal}h</a>   
        <p><a>Tempo Total</a></p>
        </div> <div class="minicontainer1"> 
        <a>${totalfim}</a>   
        <p><a>Total de Metas Alcancadas</a></p>
        </div>`
    $('#totais').append(estrutura)
    /**DISCIPLINAS */
    objeto.forEach(function (objeto, i) {
        var progresso = 100
        var status = "pendente"
        let dataini = objeto['inicio'].split("-")
        let datafim = objeto['final'].split("-")
        let datainiredef = dataini[0] + dataini[1] + dataini[2]
        let datafimredef = datafim[0] + datafim[1] + datafim[2]
        if (dataredef > 0 && (dataredef < datainiredef || dataredef > datafimredef)) {
            console.log("return")
            return
        }
        else if (dataredef > 0 && (dataredef > datainiredef || dataredef < datafimredef)) {
            console.log("dentro do filtro")
            progresso = (100 * (datafimredef - dataredef)) / (datafimredef - datainiredef)
        }
        let estrutura = `    
    <h3>${objeto['nome']}</h3> 
    <div id="myProgress">
    <div class="myBar"></div>
    </div>  
    <div class="minicontainer3">
        <h5>${String(progresso).substr(0, 4)}%</h5>
    </div>      
    <div class="minicontainer2">
        <h5>${objeto['Carga']}h</h5>
        <p><h5>${status}</h5></p>
    </div>
    <h6>Data de Inicio: ${dataini[2]}/${dataini[1]}/${dataini[0]} </h6>
    <h6>Data Final: ${datafim[2]}/${datafim[1]}/${datafim[0]}</h6>`
        $('#disciplinas').append(estrutura)
        document.getElementsByClassName("myBar")[i].style.width = `${progresso}%`
    })
    objeto1 = objeto[0];
    atividade1 = objeto1['nome'];
}
fillH5()
/*********************************************************************** */
/* EXEMPLO MONITORIA
/*********************************************************************** */
/* console.log("hello world")
const h5 = document.querySelectorAll(".variavel")[0];
function setLocal() {
    // Content-type : JSON
    localStorage.setItem("dadosUser", JSON.stringify({
        begin: "8:00",
        end: "10:50"
    }))
}
setLocal();
function fillH5() {
    var Titulo = document.querySelectorAll(".variavel")[0];
   const result = localStorage.getItem('dadosUser');
   const objeto = JSON.parse(result);
   Titulo.innerHTML = objeto.end
   h5.innerText = objeto.end
   h5.innerHTML = objeto.end
}
fillH5() */