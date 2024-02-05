class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}


class Conta {
    constructor(cliente, numero, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valorSaque) {
        return true;
    }

    depositar(valorSDeposito) {
        return true;
    }

    transferir(valorTransferencia) {
        return true;
    }
}



class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
        super(valorSaque);
        return true;
    }
}

class ContaPoupaca {
    constructor(cliente, numero, saldo, taxaRedimento) {
        super(cliente, numero, saldo);
        this.taxaRedimento = taxaRedimento;
    }

    aplicarRendimento() {
        
    }

}