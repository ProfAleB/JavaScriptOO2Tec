class Aluno{
    constructor(nome, matricula, notas){
        this.nome = nome
        this.matricula = matricula
        this.notas = notas
    }


    calculaMedia(){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }


    obterStatus(){
        const media = this.calculaMedia()

        if (media >=7){
            return "Aprovado"
        } else if (media >=5){
            return "Recuperacao"
        } else {
            return "Reprovado"
        }
    }
    exibirRelatorio(){
        console.log(`================================`);
        console.log(`Relatorio do aluno ${this.nome}`);
        console.log(`Matricula ${this.matricula}`);
        console.log(`Media Final ${this.calculaMedia().toFixed(2)}`);
        console.log(`Status ${this.obterStatus()}`);
        console.log(`================================`);
    }

}


const turma = [
    new Aluno(`Luiz`, `CGM5050`, [7.2, 6.5, 7.2]),
    new Aluno(`Ana`, `CGM5051`, [3.5, 4.3, 9.2]),
    new Aluno(`Tamirys`, `CGM5052`, [6.5, 5.3, 4.2]),
    new Aluno(`Arthur`, `CGM5053`, [6.5, 7.2, 9.2])
]

for (let i = 0; i < turma.length; i++ ){
    turma[i].exibirRelatorio();
}


// let aluno1 = new Aluno(`Luiz`, 850650, [7.2, 6.5, 3.3]);
// console.log(aluno1.calculaMedia());
// console.log(aluno1.obterStatus());
// aluno1.matricula = 500000000
// aluno1.exibirRelatorio()