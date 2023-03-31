//outro metodo de mostrar modal com quarySelector

/* 
function abrirModal(){

if(document.querySelector(".modal").style.display == "none"){
    document.querySelector(".modal").style.display = "block";
}else{
    document.querySelector(".modal").style.display = "none";
}
}*/

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const cpf = document.getElementById("cpf");
const modal = document.getElementById("box-modal");
var index;
const listPessoas = [];

function abrirModal() {
    
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

function fecharModal() {
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    }
    nome.value = "";
    idade.value = "";
    cpf.value = "";
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
}

function salvarPessoas() {

    if (nome.value != "" && idade.value != "" && cpf.value != "") {
        var pessoas = { nomeP: nome.value, idadeP: idade.value, cpfP: cpf.value };
        listPessoas.push(pessoas);
        exibirNaTela(listPessoas);
    }
    else {
        nome.value = "";
        idade.value = "";
        cpf.value = "";
    }
    nome.value = "";
    idade.value = "";
    cpf.value = "";
}


function exibirNaTela(listPessoas) {
    var elemento = "";
    for (var i = 0; i < listPessoas.length; i++) {
        elemento += "<tr class='linha'><td>" + listPessoas[i].nomeP + "</td>";
        elemento += "<td class='idade'>" + listPessoas[i].idadeP + "</td>";
        elemento += "<td class='cpf'>" + listPessoas[i].cpfP + "</td>";
        elemento += "<td><div class='acao-tabela'><button class='btn edit' onclick='editar(" + i + ")'>Edit</button><button class='btn cancelar' onclick='deletar(" + i + ")'>delet</button></div>";
        elemento += "</tr>";
    }

    var tabela = (document.getElementById(
        "conteudo"
    ).innerHTML = elemento);
}

function deletar(i) {
    listPessoas.splice(i, 1);
    exibirNaTela(listPessoas);
}

function editar(i) {
    index = i;

    modal.style.display = 'block';
    document.getElementById('salvar').style.display = 'none';
    document.getElementById('salvarEdicao').style.display = 'block';
    nome.value = listPessoas[i].nomeP;
    idade.value = listPessoas[i].idadeP;
    cpf.value = listPessoas[i].cpfP;
}

function salvarEdit() {

    listPessoas[index].nomeP = nome.value;
    listPessoas[index].idadeP = idade.value;
    listPessoas[index].cpfP = cpf.value;

    exibirNaTela(listPessoas);
    modal.style.display = 'none';
    document.getElementById('salvar').style.display = 'block';
    document.getElementById('salvarEdicao').style.display = 'none';
    nome.value = "";
    idade.value = "";
    cpf.value = "";
}