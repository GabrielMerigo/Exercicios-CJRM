class Animal{
  constructor(nome, idade, preco){
    this.nome = nome
    this.idade = idade
    this.preco = preco
  }

  ChecarEstoque(){
    return 10;
  }
}

class Cachorro extends Animal{

  constructor(nome, idade, preco, raca, peso){
    super(nome, idade, preco)
    this.raca = raca,
    this.peso = peso
  }

  Latir(){
    console.log('AU!')
    console.log(super.ChecarEstoque())
    console.log('Tem estoque!')
  }
}

const dog = new Cachorro('Fred', 7, 50, 'viralatex', '8kg')
console.log(dog)