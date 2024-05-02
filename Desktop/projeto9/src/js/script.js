//declarando a variavel

let tarefa = [];

//função que valida o preenchimento do campo caso esteja vazio

function validaCampo(){
    let valida = false;
    if(document.getElementById("task").value =="");
    valida = true;
    return valida;
}

//função que adiciona a tarefa

function adicionarTarefa(){
    //criando a variavel q vai receber as tarefas
    let linhas = document.getElementById("task");
    if(validaCampo()){
        alert("Preencha o campo")
    }else{
        // add tarefas
        tarefa.push(linhas.value);
        //passando para a proxima
        linhas.value="";
        //chamando a função q vai mostrar todas as tarefas
        listarTarefas();
    }

}