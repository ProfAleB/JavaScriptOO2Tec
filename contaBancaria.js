class ContaBancaria {

    #saldo = 0;

    constructor(titular){
        this.titular = titular;
    }

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de ${valor} feito.`);
        }
    }

    sacar(valor){
        if (valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito`);
        } else{
            console.log("Saldo insuficiente ou valor inv.")
        }
    }

    exibirSaldo(){
        return `Olá, seu saldo é ${this.#saldo}`
    }
}

const conta1 = new ContaBancaria("Átila, o Huno");
conta1.depositar(1000);
conta1.sacar(100);
console.log(conta1.exibirSaldo())
