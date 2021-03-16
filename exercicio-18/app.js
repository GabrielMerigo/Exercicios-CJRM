/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

const form = document.querySelector('form');
const regex = /^[a-zA-Z]{6,}$/
const input = form.username;
const p = document.createElement('p');
const btn = document.querySelector('button')
const paragraphSubmit = document.createElement('p')

const invalidSubmit = {
  paragraph: paragraphSubmit,
  text: 'Por favor, insira um username válido',
  className: 'submit-help-feedback',
  previusSibling: btn
}

const validSubmit = {
  paragraph: paragraphSubmit,
  text: 'Dados enviados =)',
  className: 'submit-success-feedback',
  previusSibling: btn
} 

const validationInput = () => {
  const inputValue = input.value;
  const regexTest = regex.test(inputValue);

  paragraphSubmit.setAttribute('data-feedback', 'submit-feedback')

  const paragraphSubmitFeedbackExists =
    document.querySelector('[data-feedback="submit-feedback"]');

  if (paragraphSubmitFeedbackExists) {
    paragraphSubmitFeedbackExists.remove()
  }


  if (regexTest) {
    p.textContent = 'Username válido =)';
    p.setAttribute('class', 'username-success-feedback')
    input.insertAdjacentElement('afterend', p)
    return
  }
  p.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas'
  p.setAttribute('class', 'username-help-feedback')
  input.insertAdjacentElement('afterend', p)
}

const insertParagraphIntoDOM = ({paragraph, text, className, previusSibling}) => {
  paragraph.textContent = text;
  paragraph.setAttribute('class', className)
  previusSibling.insertAdjacentElement('afterend', paragraph)
}


const userSubmit = event => {
  event.preventDefault()
  const input = form.username;
  const inputValue = input.value;

  if (!regex.test(inputValue)) {
    insertParagraphIntoDOM(invalidSubmit)
    return
  }
  insertParagraphIntoDOM(validSubmit)
}



input.addEventListener('input', validationInput)
form.addEventListener('submit', userSubmit)

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/



/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa
        6;
    2) Pesquisar no MDN.

  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const array = [1, 2, 3];

const some = (array, value) => {
  return array.includes(value)
}

console.log(array.some(item => item === 3))
console.log(some(array, 3))
