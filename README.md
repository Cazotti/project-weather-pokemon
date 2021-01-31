## Desafio Pokemon para Desenvolvedores 
![](https://icon-icons.com/icons2/896/PNG/32/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png)
![](https://icon-icons.com/icons2/850/PNG/32/037_Pikachu_icon-icons.com_67297.png)

### Introdução ao Projeto
O projeto situado neste repositório, trata-se de uma aplicação web, cujo principal objetivo é o de consumir duas API's de diferentes fontes de dados, com o intuito de agregar as informações e solucionar um problema. 

#### O Problema
De acordo com as condições climáticas de uma determinada cidade, deve ser exibido um Pokémon baseado em seu tipo (fogo, água, elétrico, etc) seguindo as seguintes regras:

*  Lugares onde a temperatura for menor que 5ºC, deve-se retornar um pokémon de gelo.
*  Lugares onde a temperatura estiver entre 5ºC e 10ºC, deve-se retornar um pokémon do tipo água.
*  Lugares onde a temperatura estiver entre 12ºC e 15ºC, deve-se retornar um pokémon do tipo grama.
*  Lugares onde a temperatura estiver entre 15ºC e 21ºC, deve-se retornar um pokémon do tipo terra.
*  Lugares onde a temperatura estiver entre 23ºC e 27ºC, deve-se retornar um pokémon do tipo inseto.
*  Lugares onde a temperatura estiver entre 27ºC e 33ºC inclusive, deve-se retornar um pokémon do tipo pedra.
*  Lugares onde a temperatura for maior que 33ºC, deve-se retornar um pokémon do tipo fogo.

Além disso, no caso em que esteja chovendo na região um pokémon elétrico deve ser retornado, independente da temperatura. E para qualquer outra temperatura, deve-se retornar um pokémon do tipo normal.

### Tecnologias Utilizadas
Dentre as tecnologias utilizadas durante o desenvolvimento do projeto, temos:
* Ferramentas:
  * Postman (v8.0.3),
  * Visual Studio Code (v1.52.1).
  
* Linguagem de Programação:
  * Node.js (v14.15.4),
  * HTML (5),
  * CSS (3).
  
* Gerenciador de pacotes:
    * npm (v6.14.10).
    * Dependências:
      * Express.js (v4.17.1),
      * Request (v2.88.2).
  
* API's consultadas:
  * OpenWeatherMap,
  * PokéAPI.
  
### Configurando o Ambiente e Executando a Aplicação
#### Configurando o Ambiente
Como já mencionado anteriormente, foi utilizado o node.js e o npm para realizar a implementação desse projeto. Deste modo é necessário tê-los instalados em sua máquina. Para isso basta seguir os passos abaixos, ou caso já possua, basta seguir para o próximo tópico.
  1. Primeiramente, devemos saber que ao instalar o node.js o npm é instalado junstamente. Dessa forma basta acessar o site do [Node.js](https://nodejs.org/en/download/)
  2. Após isso basta selecionar o arquivo LTS de acordo com seu Sistema Operacional e realizar o download;
  3. Em seguida, devemos executar o arquivo baixado, onde se iniciará a instalação;
  4. Por ultimo, porêm opcional, podemos verificar se a instalação foi realizada com sucesso e qual versão foi instalada através do terminal:
     1. Para verificar a versão do Node.js, execute a linha de comando:
     ```
     $ node -v
     ```
     2. Para verificar a versão do npm, execute a linha de comando:
     ```
     $ npm -v
     ```

#### Executando a Aplicação
Após ter configurado o ambiente, basta clonar(baixar) o repositório e executar o projeto. Para isso basta seguir os passos abaixo:
  1. Primeiramente devemos clonar o repositório para nosso computador. Sinta-se avontade para escolher o método a ser utilizado;
  2. Em seguida, devemos abrir o terminal em nosso computador, e acessar o diretório onde se encontra a copia do repositório baixado;
  3. Por fim, basta executar a seguinte linha de código para iniciar nossa página web: 
  ```
  $ npm start
  ```
  4. Após executar o comando acima, a aplicação irá começar a rodar localmente na porta 3000. Dessa forma basta abrir seu navegador e acessar a url: `localhost:3000/`
 
  


