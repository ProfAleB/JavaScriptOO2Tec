class Animal{
    fazerSom(){
        console.log("Som generico de animal...");
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU 🐶🐶🐶")
    }
}

class Vaca extends Animal{
    fazerSom(){
        console.log("MUUUUUUUUUUUUU 🐮🐮🐮🐮")
    }
}

class Moto extends Animal{
    fazerSom(){
        console.log("RANDANDANDAN 🏍🏍🏍🏍🏍")
    }
}

const meusObjetos = [new Cachorro(), new Vaca(), new Moto()];

for (let i = 0; i < meusObjetos.length; i++ ){
    meusObjetos[i].fazerSom();
}