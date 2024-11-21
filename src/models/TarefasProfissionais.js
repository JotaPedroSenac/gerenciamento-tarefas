const { Tarefa } = require('./Tarefa');

class TarefasProfissionais extends Tarefa {
    #prioridade;
    #data;

    constructor(descricao, prioridade, data){
        super(descricao)
        this.#prioridade = prioridade;
        this.#data = data;
    }

    get getPrioridade(){
        return this.#prioridade;
    }

    set setPrioridade(novaPrioridade){
        this.#prioridade = novaPrioridade;
    }

    get getData(){
        return this.#data;
    }

    set setData(novaData){
        this.#data = novaData;
    }

    getInfo(){
        console.log(`Tarefa Profissional: ${this.getDescricao}, Status: ${this.getStatus}, Prioridade da tarefa: ${this.getPrioridade}, Data ${this.getData}`)
    }
}

module.exports = { TarefasProfissionais };

// tarefas

// const tarefaProfissional01 = new TarefasProfissionais('Trabalhar', '1', '19/11');
// tarefaProfissional01.getInfo();
// tarefaProfissional01.finalizarTarefa();