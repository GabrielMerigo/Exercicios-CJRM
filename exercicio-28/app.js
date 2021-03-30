/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   if (request.readyState === 4 && request.status === 200) {
//     return console.log(request.response);
//   }

//   if(request.readyState === 4){
//     console.log('Não foi possível obter os dados do pokémon');
//   }

// })

// request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
// request.send()


/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar:
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

let myPerson = {
  name: 'Gabriel',
  lastName: 'Merigo',
  gender: 'Male',
  age: 17,
  height: 1.74,
  weight: 60,
  isWalking: false,
  meters: 0
}


/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/


// myPerson.addAge = function () {
//   this.age++
// }
// for (let i = 0; i < 5; i++) {
//   myPerson.addAge()
// }


// console.log(myPerson);

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o
    método 4x, com diferentes metragens passadas por parâmetro.
*/

myPerson.metersWalking = function (meters) {
  this.meters += meters
  this.isWalking = true
}

const defferenceMeters = [8,22,63,14]
defferenceMeters.forEach(meters => {
  myPerson.metersWalking(meters)
})

console.log(myPerson);


/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:

  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura,
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS
  metros.'

  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por
      "metro", no singular.
*/

const getPluralOrSingular = (value, quantity, singular, plural) => {
  return value === quantity ? singular : plural
}

myPerson.phraseMessage = function () {
  const { name, age, height, weight, meters, gender } = this
  const genderPerson = getPluralOrSingular(gender, 'Male','o','a')
  const ageSingularOrPlural = age === 1 ? `ano` : `anos`

  const phrase = `Oi. Eu sou ${genderPerson} ${name}, tenho ${age} ${ageSingularOrPlural}, ${height} ${height} de altura,
  peso ${weight} quilos e, só hoje, eu já caminhei ${meters} ${meters}.`;
  console.log(phrase);
}

myPerson.phraseMessage()


/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const isTruthyOrFalsy = value => {
  if (value) {
    return true;
  }
  return false;
}
// Falsys
// console.log(isTruthyOrFalsy(undefined))
// console.log(isTruthyOrFalsy(false))
// console.log(isTruthyOrFalsy(null))
// console.log(isTruthyOrFalsy(NaN))
// console.log(isTruthyOrFalsy(''))
// console.log(isTruthyOrFalsy(``))
// console.log(isTruthyOrFalsy(""))
// console.log('-----------------');
// console.log(isTruthyOrFalsy(7))
// console.log(isTruthyOrFalsy('rua'))
// console.log(isTruthyOrFalsy([1,2]))
// console.log(isTruthyOrFalsy({a: 1, b: 2}))
// console.log(isTruthyOrFalsy(true))



/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/
