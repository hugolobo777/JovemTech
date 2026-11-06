class carro { //classe carro
    constructor(marca, cor) { //função que cria e inicializa os atributos da classe carro, recebendo os PARÂMETROS marca e cor (argumentos)
        this.marca = marca; //definimos a PROPRIEDADE marca da classe carro, que recebe o VALOR DO PARÂMETRO marca
        this.cor = cor; //definimos a PROPRIEDADE cor da classe carro, que recebe o VALOR DO PARÂMETRO cor
        this.velocidade = 20; //definimos a PROPRIEDADE velocidade da classe carro, que recebe o VALOR 20
    }

    acelerar() { //definimos o MÉTODO/FUNÇÃO acelerar da classe carro, que AUMENTA a PROPRIEDADE velocidade em 10
        this.velocidade += 10; //aumentamos a velocidade em 10
    }
}

const meuCarro = new carro("Hyundai", "Prata"); //definimos uma INSTÂNCIA da CLASSE carro, passando os VALORES "Hyundai" e "Prata" para os PARÂMETROS do CONSTRUTOR da classe carro
meuCarro.acelerar(); //execução do MÉTODO/FUNÇÃO acelerar da INSTÂNCIA meuCarro, que AUMENTA a PROPRIEDADE velocidade em 10
console.log(meuCarro); //exibimos no console a INSTÂNCIA meuCarro, que possui as PROPRIEDADES marca, cor e velocidade