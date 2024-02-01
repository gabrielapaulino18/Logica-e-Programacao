class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    seApresentar(pessoa) {
        console.log(`Olá, meu nome é ${this.nome}`)
    }

    conhecer(pessoa) {
        console.log(`Prazer em conhecer-lo ${pessoa.nome}, meu nome é ${this.nome}`)
    }
}

const pessoaA = new Pessoa("Fulano");
const pessoaB = new Pessoa("Beltrano");

pessoaA.seApresentar(pessoaB);
pessoaB.conhecer(pessoaA);