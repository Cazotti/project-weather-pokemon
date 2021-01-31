## Desafio Pokemon para Desenvolvedores

### Introdução ao Projeto
O projeto situado neste repositório, trata-se de uma aplicação web, cujo principal objetivo é o de consumir duas API's de diferentes fontes de dados, com o intuito de agregar as informações e solucionar um problema. 

#### O Problema
De acordo com as condições climáticas de uma determinada cidade, deve ser exibido um Pokémon baseado em seu tipo (fogo, água, elétrico, etc) seguindo as seguintes regras:

*  Lugares onde a temperatura for menor (<) que 5ºC, deve-se retornar um pokémon de gelo (ice).
*  Lugares onde a temperatura estiver entre (>=) 5ºC e (<) 10ºC, deve-se retornar um pokémon do tipo água (water).
*  Lugares onde a temperatura estiver entre (>=) 12ºC e (<) 15ºC, deve-se retornar um pokémon do tipo grama (grass).
*  Lugares onde a temperatura estiver entre (>=) 15ºC e (<) 21ºC, deve-se retornar um pokémon do tipo terra (ground).
*  Lugares onde a temperatura estiver entre (>=) 23ºC e (<) 27ºC, deve-se retornar um pokémon do tipo inseto (bug).
*  Lugares onde a temperatura estiver entre (>=) 27ºC e 33ºC inclusive, deve-se retornar um pokémon do tipo pedra (rock).
*  Lugares onde a temperatura for maior que 33ºC, deve-se retornar um pokémon do tipo fogo (fire).

Além disso, no caso em que esteja chovendo na região um pokémon elétrico deve ser retornado, independente da temperatura. E para qualquer outra temperatura, deve-se retornar um pokémon do tipo normal.

### Tecnologias Utilizadas
Dentre as tecnologias utilizadas durante o desenvolvimento do projeto, foram utilizados 

* Linguagem de Programação:
  * Node.js (v14.15.4),
  * HTML5,
  * CSS3.
  
* Frameworks
  * Express.js (v4.17.1),
  * Request (v2.88.2).

* API's
  * OpenWeatherMap,
  * PokéAPI.
  
  
### Como executar a Aplicação
