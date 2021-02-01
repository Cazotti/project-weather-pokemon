## Pokémon Challenge for Developers ![](https://icon-icons.com/icons2/896/PNG/32/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png)![](https://icon-icons.com/icons2/851/PNG/32/pikachu_icon-icons.com_67535.png)

### Introduction to the Project 
The project located in this repository, is a web application, whose main objective is to consume two APIs from different data sources, in order to aggregate information and solve a given problem. 

#### The Problem
According to the climatic conditions of a given city, a Pokémon based on its type must be displayed, following the following rules: 

*  Places where the temperature is less than **5ºC**, an ice pokémon must be returned. 
*  Places where the temperature is between **5ºC** and **10ºC**, a water type Pokémon should be returned. 
*  Places where the temperature is between **12ºC** and **15ºC**, a grass type Pokémon should be returned. 
*  Places where the temperature is between **15ºC** and **21ºC**, a land type Pokémon should be returned. 
*  Places where the temperature is between **23ºC** and **27ºC**, an insect type Pokémon should be returned.
*  Places where the temperature is between **27ºC** and **33ºC** inclusive, a stone type Pokémon should be returned. 
*  Places where the temperature is higher than **33ºC**, a fire type Pokémon should be returned. 

In addition, in case it is **raining** in the region an electric pokémon must be returned, regardless of the temperature. And for any other temperature, a normal type Pokémon should be returned. 

### Technologies Used 
Among the technologies used during the development of the project, we have: 
* Tols:
  * Postman (v8.0.3),
  * Visual Studio Code (v1.52.1).
* Programming languages:
  * Node.js (v14.15.4),
  * HTML (5),
  * CSS (3).
* Package Manager:
    * npm (v6.14.10).
    * Dependencies:
      * Express.js (v4.17.1),
      * Request (v2.88.2).
* Consulted APIs:
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
  ou tambem, caso prefira:
   ```
  $ node server.js
  ```
  4. Após executar o comando acima, a aplicação irá começar a rodar localmente na porta 3000. Dessa forma basta abrir seu navegador e acessar a url: `localhost:3000/`
 
  


