//Colocando escuta no DOM quando carregado
document.addEventListener("DOMContentLoaded", getIdentifier);
document.addEventListener("DOMContentLoaded", getDate);

//Peganndo id dos botões de mudança de visualização
function getIdentifier() {
  const visualizacaoDia = document.getElementById("visualizacao-dia");
  const visualizacaoMes = document.getElementById("visualizacao-mes");
  const table = document.getElementById("table-content");
  abrirLista();
  //Variáveis acionadas pelo click do botão
  visualizacaoDia.addEventListener("click", abrirLista);
  visualizacaoMes.addEventListener("click", abrirTabelaMes);

  //Função da exibição em dia
  function abrirLista() {
    visualizacaoDia.classList.add("btn-active");
    visualizacaoMes.classList.remove("btn-active");
    let dataAtual = getDate();
    let dados = pegarDados();
    if (dados == null) {
      table.innerHTML = ` <p id="sem-cadastro"> Você não possui atividades Cadastradas! </p>`;
    } else {
      table.innerHTML = `<table id="tabela-de-atividades">
        </table>
        <table id="carga-horaria"> 
        </table> 
        <table id="prioridades">
        <table>`;
      dados.forEach(function (dados, i) {
        let tabelaDinamica = document.getElementById("tabela-de-atividades");
        let tabelaHora = document.getElementById("carga-horaria");
        let tabelaPrioridade = document.getElementById("prioridades");
        if (dados.inicio <= dataAtual || dados.final >= dataAtual) {
          if (i % 2 == 0) {
            tabelaDinamica.innerHTML += `<tr>
            <td>
            <input class="checkbox" type="checkbox">
            <select name="etapa" id="etapa">
                <option value="Não iniciada">Não Iniciada</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Conclúido">Concluído</option>
            </select>
            ${dados.nome}</td>
            <td>${dados.tipo}<br>
            ${dados.descricao}
            </td>
            </tr>`;
            tabelaHora.innerHTML += `<tr>
            <td>${dados.Carga}:00</td>
            </tr>`;
            tabelaPrioridade.innerHTML += `<tr>
            <td>${dados.lista}</td>
            </tr>`;
          } else {
            tabelaDinamica.innerHTML += `<tr>
            <td class="color-line">
            <input class="checkbox" type="checkbox">
            <select name="etapa" id="etapa">
                <option value="Não iniciada">Não Iniciada</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Conclúido">Concluído</option>
            </select>
            ${dados.nome}</td>
            <td class="color-line">
            ${dados.tipo}<br>
            ${dados.descricao}</td>
            </tr>`;
            tabelaHora.innerHTML += `<tr>
            <td class="color-line">${dados.Carga}:00</td>
            </tr>`;
            tabelaPrioridade.innerHTML += `<tr>
            <td class="color-line">${dados.lista}</td>
            </tr>`;
          }
        }

      });
    }
  }

  //Função da exibição em mês
  function abrirTabelaMes() {
    visualizacaoDia.classList.remove("btn-active");
    visualizacaoMes.classList.add("btn-active");
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

    let data = new Date();
    let DiadeHoje = document.getElementById("data-de-hoje");
    let mes = String(data.getMonth() + 1).padStart(2, "0");
    switch (mes) {
      case "01":
        DiadeHoje.textContent = "Janeiro";
        break;
      case "02":
        DiadeHoje.textContent = "Fevereiro";
        break;
      case "03":
        DiadeHoje.textContent = "Março";
        break;
      case "04":
        DiadeHoje.textContent = "Abril";
        break;
      case "05":
        DiadeHoje.textContent = "Maio";
        break;
      case "06":
        DiadeHoje.textContent = "Junho";
        break;
      case "07":
        DiadeHoje.textContent = "Julho";
        break;
      case "08":
        DiadeHoje.textContent = "Agosto";
        break;
      case "09":
        DiadeHoje.textContent = "Setembro";
        break;
      case "10":
        DiadeHoje.textContent = "Outubro";
        break;
      case "11":
        DiadeHoje.textContent = "Novembro";
        break;
      case "12":
        DiadeHoje.textContent = "Dezembro";
        break;
    }

    table.innerHTML = `<table id="tabela-mes">
    <tr class="row-month">
     <td id="01">01</td>
     <td id="02">02</td>
     <td id="03">03</td>
     <td id="04">04</td>
     <td id="05">05</td>
     <td id="06">06</td>
     <td id="07">07</td>
    </tr>
    <tr class="row-month">
     <td id="08">08</td>
     <td id="09">09</td>
     <td id="10">10</td>
     <td id="11">11</td>
     <td id="12">12</td>
     <td id="13">13</td>
     <td id="14">14</td>
    </tr>
    <tr class="row-month">
     <td id="15">15</td>
     <td id="16">16</td>
     <td id="17">17</td>
     <td id="18">18</td>
     <td id="19">19</td>
     <td id="20">20</td>
     <td id="21">21</td>
    </tr>
    <tr class="row-month">
     <td id="22">22</td>
     <td id="23">23</td>
     <td id="24">24</td>
     <td id="25">25</td>
     <td id="26">26</td>
     <td id="27">27</td>
     <td id="28">28</td>
    </tr>
    <tr class="row-month">
     <td id="29">29</td>
     <td id="30">30</td>
     <td id="31">31</td>
    </tr>
    </table>
    `;
    let dados = pegarDados();
    dados.forEach(function(dados, i) {     
        let dataEvento = dados.inicio[8] + dados.inicio[9];   
        let dataFinal = dados.final[8] + dados.final[9];
        let id = document.getElementById(dataEvento);
        let idFinal = document.getElementById(dataFinal);
        console.log(id + idFinal)
        if (id || idFinal){
            id.textContent += `\n ${dados.nome}`
            idFinal.textContent += `\n ${dados.nome}`
            
        }
    })
  }

}
//função de exibição de data na exibição dia.
function getDate() {
  let data = new Date();
  let dia = String(data.getDate()).padStart(2, "0");
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let ano = data.getFullYear();
  let DiadeHoje = document.getElementById("data-de-hoje");

  let dataAtual = dia + "/" + mes + "/" + ano;
  DiadeHoje.textContent = dataAtual;
  dataAtual = ano + "-" + mes + "-" + dia;
  return dataAtual;
}

//Pegando o objeto e acionando a função de modificação

function pegarDados() {
  let jsonAtividades = window.localStorage.getItem("dados");
  let atividades = JSON.parse(jsonAtividades);
  return atividades;
}

function Search() {
  
}