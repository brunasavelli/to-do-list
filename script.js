var lista = document.createElement('ul');

var tarefas = [];
tarefas.forEach(function(tarefa) {
    var list = document.createElement("list");
    list.innerHTML = tarefa;
    lista.append(list);
});

document.body.append(lista);