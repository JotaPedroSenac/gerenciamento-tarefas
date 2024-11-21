const { Tarefa } = require('./Tarefa');

class TarefasPessoais extends Tarefa {
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
        console.log(`Tarefa Pessoal: ${this.getDescricao}, Status: ${this.getStatus}, Prioridade da tarefa: ${this.getPrioridade}, Data: ${this.getData}`)
    }
}

module.exports = { TarefasPessoais };

// teste

// const tarefaPessoal01 = new TarefasPessoais('Beber água', '1', '19/11');
// tarefaPessoal01.getInfo();
// tarefaPessoal01.finalizarTarefa();