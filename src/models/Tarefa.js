class Tarefa {
    #descricao;
    #status;

    constructor(descricao){
        this.#descricao = descricao;
        this.#status = 'Não finalizada'
    }

    get getDescricao(){
        return this.#descricao
    };

    set setDescricao(novaDescricao){
        this.#descricao = novaDescricao;
    }

    get getStatus(){
        return this.#status;
    }

    // set setStatus(novoStatus){
    //     this.#status = novoStatus;
    // }

    getInfo(){
        console.log(`Descrição da tarefa: ${this.getDescricao}, Status: ${this.getStatus}`)
    }

    finalizarTarefa(){
        this.#status = 'Finalizada';
        console.log(`Parabéns! A tarefa foi ${this.getStatus}`);
    }
}

module.exports = { Tarefa };

// teste

// const tarefa01 = new Tarefa('Fazer atividade Jorel');
// tarefa01.getInfo();
// tarefa01.finalizarTarefa();