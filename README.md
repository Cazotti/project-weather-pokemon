## Pokémon Challenge for Developers ![](https://icon-icons.com/icons2/896/PNG/32/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png)![](https://icon-icons.com/icons2/851/PNG/32/pikachu_icon-icons.com_67535.png)

### Introduction to the Project 
The project located in this repository, is a web application, whose main objective is to consume two APIs from different data sources, for aggregate information and solve a given problem. 

#### The Problem
According to the climatic conditions of a given city, a Pokémon based on its type must be displayed, following the following rules: 

*  Places where the temperature is below **5ºC**, an ice pokémon must be returned. 
*  Places where the temperature is between **5ºC** and **10ºC**, a water type Pokémon should be returned. 
*  Places where the temperature is between **12ºC** and **15ºC**, a grass type Pokémon should be returned. 
*  Places where the temperature is between **15ºC** and **21ºC**, a land type Pokémon should be returned. 
*  Places where the temperature is between **23ºC** and **27ºC**, a bug type Pokémon should be returned.
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
  
### Setting up the environment and Running the application 
#### Setting up the environment
As previously mentioned, node.js and npm were used to implement this project. So it is necessary to have them installed on your machine. To do this, just follow the steps below, or if you already have them, just go to the next topic (Runnig the Application). 
  1. First, we must know that when installing node.js, npm is installed together. That way just access the website  [Node.js](https://nodejs.org/en/download/)
  2. After that just select the LTS file according to your Operating System and download it;
  3. Then, we must execute the downloaded file, where the installation will start;
  4. Finally, however optional, we can check if the installation was successful and which version was installed via the terminal: 
     1. To check the version of Node.js, run the command line:
     ```
     $ node -v
     ```
     2. To check the version of npm, run the command line
     ```
     $ npm -v
     ```

#### Runnig the Application
After setting up the environment, just clone (download) the repository and run the project. To do this, just follow the steps below: 
  1. First, we must clone the repository for our computer. Feel free to choose the method to be used;
  2. Then, we must open the terminal on our computer, and access the directory where the copy of the downloaded repository is;
  3. Finally, just run the following line of code to start our website:  
  ```
  $ npm start
  ```
  or also, if you prefer: 
   ```
  $ node server.js
  ```
  4. After executing the above command, the application will start to run locally on port 3000. That way just open your browser and access the url:`localhost:3000/`
 
  


