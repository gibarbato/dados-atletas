/* Você deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas.
A classe deverá receber os seguintes atributos:
nome
idade
peso
altura
notas
A classe deverá possuir os seguintes métodos:
calculaCategoria(), para calcular a categoria do atleta;
calculaIMC(), para calcular o IMC do atleta;
calculaMediaValida(), para calcular a média válida do atleta.
obtemNomeAtleta(), que retorna o nome do atleta
obtemIdadeAtleta(), que retorna a idade do atleta
obtemPesoAtleta(), que retorna o peso do atleta
obtemNotasAtleta(), que retorna as notas do atleta
obtemCategoria(), que retorna a categoria do atleta
obtemIMC(), que retorna o IMC do atleta
obtemMediaValida(), que retorna a média válida do atleta */

// Declara o atleta

class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        let categoria = 'Sem Categoria'
        if (this.idade >= 9 && this.idade <= 11) {
            categoria = `Categoria Infantil`
            return categoria
        } else if (this.idade >= 12 && this.idade <= 13) {
            categoria = `Categoria Juvenil`
            return categoria
        } else if (this.idade >= 14 && this.idade <= 15) {
            categoria = `Categoria Intermediário`
            return categoria
        } else if (this.idade >= 16 && this.idade <= 30) {
            categoria = `Categoria Adulto`
            return categoria
        } else {
            categoria = `Sem Categoria`
            return categoria
        }
    }
    calculaIMC() {
        let calculaIMC = `${this.peso / (this.altura * this.altura)}`;
        return `IMC: ${calculaIMC}`
    }
    calculaMediaValida(notas) {
        let max = 0
        let min = 0
        let soma = 0
        let media = 0
        for (let x = 0; x < this.notas.length; x++) {
            soma = this.notas.reduce(function (total, atual) {
                return total + atual
            }, 0);
            // valor máximo
            max = this.notas.reduce(function (a, b) {
                return Math.max(a, b);
            }, -Infinity)
            // valor mínimo
            min = this.notas.reduce(function (a, b) {
                return Math.min(a, b);
            }, Infinity)
            media = (soma - max - min) / (this.notas.length - 2);
        }
        return `Média Notas Válidas ${media}`
    }
    obtemNomeAtleta() {
        return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta() {
        return `Idade: ${this.idade} anos`
    }
    obtemPesoAtleta() {
        return `Peso: ${this.peso}Kg`
    }
    obtemNotasAtleta() {
        return `Notas: ${this.notas}`
    }
    obtemCategoria() {
        return this.calculaCategoria()
    }
    obtemIMC() {
        return this.calculaIMC()
    }
    obtemMediaValida() {
        return this.calculaMediaValida()
    }

}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

const gilberto = new Atleta("Gilberto",
    43, 100, 1.79,
    [9, 9, 8.5, 9.7, 8]);

document.write(`${atleta.obtemNomeAtleta()}<br>`);
document.write(`${atleta.obtemIdadeAtleta()}<br>`);
document.write(`${atleta.obtemPesoAtleta()}<br>`);
document.write(`${atleta.obtemNotasAtleta()}<br>`);
document.write(`${atleta.obtemIMC()}<br>`);
document.write(`${atleta.obtemCategoria()}<br>`);
document.write(`${atleta.obtemMediaValida()}<br>`);

document.write(`---------------<br>`);

document.write(`${gilberto.obtemNomeAtleta()}<br>`);
document.write(`${gilberto.obtemIdadeAtleta()}<br>`);
document.write(`${gilberto.obtemPesoAtleta()}<br>`);
document.write(`${gilberto.obtemNotasAtleta()}<br>`);
document.write(`${gilberto.obtemIMC()}<br>`);
document.write(`${gilberto.obtemCategoria()}<br>`);
document.write(`${gilberto.obtemMediaValida()}<br>`);

