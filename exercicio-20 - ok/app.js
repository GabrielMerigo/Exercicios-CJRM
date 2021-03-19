/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/
//ok
/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/
const message = 'Um segundo e meio se passaram desde que a página foi carregada'

setTimeout(message => {
  console.log(message);
}, 1500, message)


/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

const container = document.querySelector('.container');
const counterContainer = document.querySelector('.counter-container');

const startCounter = document.querySelector('.button-init-counter')
const stopCounter = document.querySelector('.button-stop-counter') 

let timer = null

const incrementCounter = () => {
  const incremetedCounter = Number(counterContainer.innerText) + 1;
  counterContainer.innerText = incremetedCounter;
}

const stopCountered = () => {
  counterContainer.innerText = 0
  clearInterval(timer)
}


startCounter.addEventListener('click', () => {
  timer = setInterval(incrementCounter, 1000)
})

stopCounter.addEventListener('click', stopCountered)

// let counter = 1;
// let counterStop = 0;

// const stopCounter = event => {
//   if (event.target.innerText === 'Parar contador') {
//     counterStop = 1
//     counter = 0
//   }
// }

// const functionCounter = event => {
//   const findTarget = event.target.innerText === 'Iniciar contador';

//   if (findTarget) {
//     const timer = setInterval(() => {
//       if (counterStop !== 0) {
//         clearInterval(timer)
//       }
//       counterContainer.innerText = Number(counterContainer.innerText) + 1
//     }, 1000)
//   }
// }

// container.addEventListener('click', functionCounter)
// container.addEventListener('click', stopCounter)





/*
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

//ok

/*
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

//ok

/*
  06

  - Refatore o código.

  Dicas:
    - Primeiro, quebre o código da função de callback de envio do form em
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

//ok

/*
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação,
  você pode hospedá-la no Netlify seguindo este tutorial:
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
