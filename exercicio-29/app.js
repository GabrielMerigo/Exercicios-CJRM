/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/

// const getPokemon = (url, callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', () => {
//     const requestIsOK = request.readyState === 4 && request.status === 200;
//     const isRequestNotOK = request.readyState === 4;

//     if (requestIsOK) {
//       callback(request.responseText, null)
//       return
//     }

//     if (isRequestNotOK) {
//       callback(null, 'Não foi possível obter o seu pokemon.')
//     }
//   })

//   request.open('GET', url)
//   request.send()
// }

// const logPokemom = (data, erro) => {
//   const pokemonName = JSON.parse(data).name;
//   if (erro) {
//     return console.log(erro);
//   }
//   console.log(`Pokémon obtido: ${pokemonName}`);
// }

// const getPokemonURL = id => `https://pokeapi.co/api/v2/pokemon/${id}`

// getPokemon(getPokemonURL('bulbasaur'), (data, erro) => {
//   logPokemom(data, erro)

//   getPokemon(getPokemonURL('charmander'), (data, erro) => {
//     logPokemom(data, erro)

//     getPokemon(getPokemonURL('squirtle'), (data, erro) => {
//       logPokemom(data, erro)

//     })
//   })
// })

/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
  
  Reforço: este tipo de exercício será frequente em etapas mais avançadas do 
  curso, onde falaremos sobre TDD. Vá se aquecendo =)
*/



const map = (array, callback) => {
  let newArray = [];

  const addItemInArray = item => {
    const newItem = callback(item); 
    newArray.push(newItem)
  }

  array.forEach(addItemInArray)
  return newArray;
}


// console.log(map([1, 10, 3], function (number) { return number * 3 }));

/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

const person = {
  name: 'Roger',
  getName () { return this.name }
}

// console.log(person.getName())

/*
  04

  - Descomente a 2ª const abaixo e salve este arquivo;
  - Um erro será exibido no console;
  - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
    delas.
*/

const x = 'x'
console.log(x);
{
  const x = 'y'
  console.log(x);
}

/*
  05

  - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
    conseguir.
*/
const obj = { firstName: 'Afonso', lastName: 'Solano' };
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

// console.log(getFullName(obj))

/*
  06

  - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
    parâmetro. Exemplo: 'red';
  - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
  - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
    retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
  - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a mensagem 'Não temos o equivalente hexadecimal para COR';
  - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

/*
  vermelho: #fc0330;
  azul: #0303fc;
  verde: #03fc90;
  amarelo: #fff700;
  roxo: #c300ff;
*/

// let colorHexa = '';
// const convertToHex = color => {
//   if (color === 'vermelho') {
//     colorHexa = '#fc0330';
//     return showMessage(color, colorHexa)
//   }

//   if (color === 'azul') {
//     colorHexa = '#0303fc'
//     return showMessage(color, colorHexa)
//   }

//   if (color === 'verde') {
//     colorHexa = '#03fc90'
//     return showMessage(color, colorHexa)
//   }

//   if (color === 'amarelo') {
//     colorHexa = '#fff700'
//     return showMessage(color, colorHexa)
//   }

//   if (color === 'roxo') {
//     colorHexa = '#c300ff'
//     return showMessage(color, colorHexa)
//   }

//   console.log(`Não temos o equivalente hexadecimal para ${color}`);
// }

// const showMessage = (color, colorHexa) => {
//   return console.log(`O hexadecimal para a cor ${color} é ${colorHexa}`);
// }
// convertToHex('verde')

const convertToHex = color => {
  const colors = {
    red: '#fc0330',
    blue: '#0303fc',
    green: '#03fc90',
    yellow: '#fff700',
    purple: '#c300ff'
  }
  
  return colors[color] 
    ? `O hexadecimal para a cor ${color} é ${colors[color]}`
    : `Não temos o equivalente hexadecimal para ${color}`
}

const newColors = [
  'blue',
  'red',
  'green',
  'purple',
  'yellow',
  'black',
  'pink',
  'brown'
]

newColors.forEach(item => console.log(convertToHex(item)))

// for(let i = 0; i < newColors.length; i++){
//   console.log(convertToHex(newColors[i]));
// }


/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;
  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
*/

const people = [
  { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]
let obj3 = {};
people.map((item, index) => obj3[index] = item);
let i = 18;

// console.log({ age } = obj3);

const objectfy = {
  [i]: obj3.age === 18,
  // [i++]: person.age === 19,
  // [i++]: person.age === 20
}

// console.log(objectfy);