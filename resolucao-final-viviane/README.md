## SOBRE

Esse repositório é a resolução do teste para vaga de Pessoa Desenvolvedora Front-End para a empresa Grifon.
A aplicação em si consiste na construção de um sistema de formulário e listagem de tarefas.<br/>
Na página inicial, será exibido um formulário em que o usuário preencherá o Título da tarefa, a sua descrição, data e hora inicial e data/hora final. Clicando no botão 'Adicionar' será possível criar umas lista das tarefas preenchidas. <br/>

## TECNOLOGIAS

Esse projeto foi criado com [Create React App](https://github.com/facebook/create-react-app), com a linguagem Typescript, através da flag --typescript.<br/>
Para a estilização dos componentes e página, utilizei CSS.
 <br/>


## O CÓDIGO

\*Para estruturar a aplicação, criei tr}es componentes: Form, Input e toDoList (o qual acabei nao utilizando).

\*Por ser uma aplicação simples e de página única, optei por não criar uma pasta de pages, e renderizar os componentes na página App.tsx.


\*No componente Form, é onde programei a maior parte da aplicação. Esse componente stageful recebe os inputs, através do componente funcional Input. Nele, manipulo os estados dos inputs e da lista de tarefas que é adicionada a uma array, através do objeto 'item'.

\*Assim que o evento OnClick é disparado, a função HandleClick trata de adicionar os itens da array toDoList e popular essa array com as novas tarefas adicionadas pelo usuário.

\*Para manipular o valor de cada input, usei o evento onChange, que chama a função HandleChange, correspondente a cada input diferente.

\*no retorno da class Form, temos os componentes Input e uma lista com as tarefas adicionadas, através de uma função .map().

\*Por fim, adicionei folha de estilo em cada componente para customizar o layout da aplicação com CSS puro.

### Observações
Apesar de não ter tido contato com a biblioteca de Unform, eu optei por realizar alguns teste, na pasta teste-lib-unform. A resolução está incompleta, mas mostra algumas tentativas de construção do formulário.
Na versão final, na pasta resolucao-final-viviane, acabei fazendo o formulário manualmente, sem auxilio de nenhuma lib.
As validações do form ainda não estão prontas, mas pretendo concluí-las.


### EXECUÇÃO DO CÓDIGO

Para usar o React, é necessário ter instalado o Node.js. Com o Node.js instalada podemos iniciar a instalação do pacote npm.

No terminal do seu sistema operacional, digite o comando:

npm install 

Após acessar o diretório no qual foi instalado o npm, para rodar o React utilize o comando:

npm start

Após rodar o comando acima será aberto o projeto no navegador padrão definido no seu sistema operacional.

Será aberto o endereço: http://localhost:3000/

