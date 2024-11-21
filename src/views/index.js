const { tarefasDatabase } = require('../config/tarefasDatabase');
const { TarefaController } = require('../controller/TarefaController')
const prompt = require('prompt-sync')();
const controller = new TarefaController();

let opcao;
let indice;

do {
    console.log('==== Menu ====')
    console.log('1. Para cadastrar uma tarefa');
    console.log('2. Para editar uma tarefa');
    console.log('3. Para listar as tarefas cadastrados');
    console.log('4. Para listar as tarefas pessoais');
    console.log('5. Para listar as tarefas profissionais');
    console.log('6. Para excluir uma tarefa');
    console.log('7. Para finalizar uma tarefa');
    console.log('8. Para sair');

    opcao = parseInt(prompt('Digite uma opção: '));
    switch (opcao) {
        case 1:
            const tipo = prompt('Digite o tipo da tarefa (normal/pessoal/profissional): ');
            const descricao = prompt('Digite a descriçao da tarefa: ');
            const prioridade = prompt('Digite a prioridade da tarefa: ')
            const data = prompt('Digite a data da tarefa: ')
            controller.adicionarTarefa(tipo, descricao, prioridade, data);
            break;
        case 2:
            indice = parseInt(prompt('Digite o id da tarefa que você deseja editar: ')) 
            const novaDescricao = prompt('Digite a nova descriçao da tarefa: ');
            const novaPrioridade = prompt('Digite a nova prioridade da tarefa: ');
            const novaData = prompt('Digite a nova data da tarefa: ');
            controller.editar(indice,novaDescricao, novaPrioridade, novaData);
            break;
        case 3:
            controller.listarTarefas()
            break;
        case 4:
            controller.listarTarefasPessoais();
            break;
        case 5:
            controller.listarTarefasProfissionais();
            break;
        case 6:
            if (tarefasDatabase.length > 0) {
                indice = parseInt(prompt('Digite o id da tarefa: '));
                controller.excluir(indice);
            }else{
                console.log('Nenhuma tarefa cadastrado!');
            }
            break;
        case 7:
            indice = parseInt(prompt('Digite o id da tarefa que você deseja finalizar: '));
            controller.finalizarTarefa(indice);
            break;
        case 8:
            console.log('Saindo do sistema');
            break;
    
        default:
            console.log('Valor inválido')
            break;
    }
} while (opcao !== 8);