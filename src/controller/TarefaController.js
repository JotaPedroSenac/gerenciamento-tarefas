const { Tarefa } = require('../models/Tarefa');
const { TarefasPessoais } = require('../models/TarefasPessoais');
const { TarefasProfissionais } = require('../models/TarefasProfissionais');

const { tarefasDatabase } = require('../config/tarefasDatabase');
let novaTarefa;

class TarefaController {
    adicionarTarefa(tipo, descricao, prioridade, data){
        try {
            if(tipo.toLowerCase() === 'normal'){
                 novaTarefa = new Tarefa(descricao, prioridade, data);
                tarefasDatabase.push(novaTarefa);
                console.log('Tarefa criada com sucesso!')
            }else if(tipo.toLowerCase() === 'pessoal'){
                 novaTarefa = new TarefasPessoais(descricao, prioridade, data);
                tarefasDatabase.push(novaTarefa);
                console.log('Tarefa pessoal criada com sucesso!')
            }else if(tipo.toLowerCase() === 'profissional'){
                 novaTarefa = new TarefasProfissionais(descricao, prioridade, data);
                tarefasDatabase.push(novaTarefa);
                console.log('Tarefa profissional criada com sucesso!')
            }else{
                console.log('Tipo inválido');
            }
        } catch (error) {
            console.error('Erro ao adicionar Tarefa', error.message);
        }
    }

    listarTarefas(){
        try {
            if (tarefasDatabase.length > 0) {
                tarefasDatabase.forEach((tarefa, index) => {
                    console.log(`Tarefa ${index + 1}: `);
                    tarefa.getInfo();
                })
            }else{
                console.log('Nenhuma tarefa Adicionada!')
            }
        } catch (error) {
            console.error('Erro ao listar Tarefa', error.message);
        }
    }

    listarTarefasPessoais(){
        try {
            let encontrouTarefa = false;

            tarefasDatabase.filter(tarefa => {
                if (tarefa instanceof TarefasPessoais) {
                    tarefa.getInfo();
                    encontrouTarefa = true;
                }
            });

            if (encontrouTarefa === false) {
                console.log('Nenhuma tarefa Pessoal cadastrada');
            }
        } catch (error) {
            console.error('Erro ao exibir tarefas Pessoais', error.message);
        }
    }

    listarTarefasProfissionais(){
        try {
            let encontrouTarefa = false;
            tarefasDatabase.filter(tarefa => {
                if (tarefa instanceof TarefasProfissionais) {
                    tarefa.getInfo();
                    encontrouTarefa = true;
                }
            });

            if (encontrouTarefa === false) {
                console.log('Nenhuma tarefa Profissional cadastrada');
            }

        } catch (error) {
            console.error('Erro ao exibir tarefas Profissionais', error.message);
        }
    }

    editar(indice, novaDescricao, novaPrioridade, novaData){
        try {
            const tarefa = tarefasDatabase[indice - 1];
            if (tarefa) {
                tarefa.setDescricao = novaDescricao;
                tarefa.setPrioridade = novaPrioridade;
                tarefa.setData = novaData;
                console.log('tarefa atualizada com sucesso!')
            }else{
                console.log('Não foi possível atualizar a tarefa')
            }
        } catch (error) {
            console.error('Erro ao atualizar a tarefa', error.message);
        }
    }

    excluir(indice){
        try {
            const tarefa = tarefasDatabase[indice - 1];
            if (tarefa) {
                tarefasDatabase.splice(tarefa, 1);
                console.log('Tarefa excluida com sucesso!')
            }else{
                console.log('Tarefa não existente!')
            }
        } catch (error) {
            console.error('Erro ao excluir tarefa', error.message)
        }
    }

    finalizarTarefa(indice){
        const tarefa = tarefasDatabase[indice - 1];
        if (tarefa) {
            tarefa.finalizarTarefa();
        }
    }




}

module.exports = { TarefaController }

// teste

// const tarefaController = new TarefaController();
// tarefaController.adicionarTarefa('normal', 'tomar agua', '1', '19/11');
// tarefaController.adicionarTarefa('pessoal', 'assistir tv', '3', '19/11');
// tarefaController.adicionarTarefa('normal', 'lavar louça', '2', '19/11');
// tarefaController.adicionarTarefa('pessoal', 'estudar', '1', '21/11');
// tarefaController.adicionarTarefa('pessoal', 'fazer comprar', '3', '22/11');
// // tarefaController.adicionarTarefa('profissional', 'trabalhar', '1', '21/11');
// // tarefaController.adicionarTarefa('profissional', 'concluir codigo', '3', '22/11');
// tarefaController.listarTarefas();
// // tarefaController.listarTarefasPessoais();
// // tarefaController.listarTarefasProfissionais();
// tarefaController.editar(1, 'teste', '2', '21/11');
// tarefaController.listarTarefas();
// tarefaController.excluir(1);
// tarefaController.listarTarefas();