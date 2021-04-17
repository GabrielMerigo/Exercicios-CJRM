/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

const reverse = string => String(string).split('').reverse().join('');
let msg = ''
const reverse2 = string => {
  for(let i = string.length - 1; i >= 0; i--){
    let arrayWords = string.split('')
    msg += arrayWords[i];
  };

  return msg
};

// console.log(reverse2('teste'));

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
const number = numbers.some(number => number === 15)

// console.log(number);



/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/
