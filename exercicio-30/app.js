/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

const request = new XMLHttpRequest();

const getUser = url => new Promise((resolve, reject) => {

  request.addEventListener('readystatechange', data => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }

    if (request.readyState === 4) {
      reject('Não foi possível obter os dados dos usuários.')
    }

  })

  request.open('GET', url)
  request.send()
})

// getUser('https://jsonplaceholder.typicode.com/users')
//   .then(user => console.log(user))
//   .catch(error => console.log(error))

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

// const calculator = signal => {
//   let sinal = signal;
//   const seconfFunction = () => {
//     let expression = `4 ${sinal} 4`
//     return 
//   }

//   return seconfFunction()
// }

// calculator()

/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const sul = ['Rio Grande do Sul', 'Paraná', 'Santa Catarina'];
const sudeste =
  ['Espírito Santo',
    'Minas Gerais',
    'Rio de Janeiro',
    'São Paulo'
  ];
  
  sudeste.unshift('Amapá', 'Amazonas', 'Tocantins')
const brasil = sul.concat(sudeste)
brasil.shift()

const newSul = brasil.splice(0, 2);
// console.log(newSul);



/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método
    every.
*/

const nordeste = []

/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID
    par. Atribua este novo array à uma constante.
*/
