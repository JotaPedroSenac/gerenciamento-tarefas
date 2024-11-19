const { Tarefa } = require('../models/Tarefa');
const { TarefasPessoais } = require('../models/TarefasPessoais');
const { TarefasProfissionais } = require('../models/TarefasProfissionais');

const { tarefasDatabase } = require('../config/tarefasDatabase');

class TarefaController {
    adicionarTarefa(tipo, descricao, prioridade, data){
        try {
            if(tipo.toLowerCase() === 'normal'){
                const novaTarefa = new Tarefa(descricao, prioridade, data);
                tarefasDatabase.push(novaTarefa);
                console.log('Tarefa criada com sucesso!')
                // console.log(`Tarefa: ${novaTarefa.getDescricao} status: ${novaTarefa.getStatus}`);
            }else if(tipo.toLowerCase() === 'pessoal'){
                const novaTarefa = new Tarefa(descricao, prioridade, data);
                tarefasDatabase.push(novaTarefa);
                console.log('Tarefa pessoal criada com sucesso!')
                // console.log(`Tarefa: ${novaTarefa.getDescricao} status: ${novaTarefa.getStatus}, Prioride: ${novaTarefa.getPrioridade}, Data: ${novaTarefa.getData}`);
            }else if(tipo.toLowerCase() === 'profissional'){
                const novaTarefa = new Tarefa(descricao, prioridade, data);
                tarefasDatabase.push(novaTarefa);
                console.log('Tarefa profissional criada com sucesso!')
                // console.log(`Tarefa: ${novaTarefa.getDescricao} status: ${novaTarefa.getStatus}, Prioride: ${novaTarefa.getPrioridade}, Data: ${novaTarefa.getData}`);
            }
        } catch (error) {
            console.error('Erro ao adicionar Tarefa', error.message);
        }
    }

    listarTarefas(){
        try {
            if (tarefasDatabase.length > 0) {
                tarefasDatabase.forEach(tarefa => {
                    console.log('Tarefas:')
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
        tarefasDatabase.filter(tarefa => {
            tarefa.tipo === 'pessoal'
            
        });
    }
}

// filter

module.exports = { TarefaController }

// teste

const tarefaController = new TarefaController();
tarefaController.adicionarTarefa('normal', 'tomar agua', '1', '19/11', 'pessoal');
tarefaController.listarTarefas();