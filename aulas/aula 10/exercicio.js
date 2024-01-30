class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    seApresentar(outraPessoa) {
        console.log(`Olá, meu nome é ${this.nome}`)
    }

    conhecer() {
        console.log(`Prazer em conhecer-lo, meu nome é ${this.nome}`)
    }
}

const pessoaA = new Pessoa("Fulano");
const pessoaB = new Pessoa("Beltrano");

pessoaA.seApresentar(pessoaB);
pessoaB.conhecer();