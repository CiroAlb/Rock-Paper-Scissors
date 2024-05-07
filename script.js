//creo una funcion llamada getRandomInt que no recibe parametros
function getRandomInt() {
    //retorno el numero redondeado hacia abajo de la multiplicacion
    // de un numero flotante entre 0 y 1 que multiplicado por 3
    //los valores retornados son 0, 1 o 2
    return Math.floor(Math.random() * 3);
  }

  
//   creo una funcion llamada getComputerChoice que no recibe parametros
function getComputerChoice() {
    //   creo una variable llamada numEleccion que almacene un numero entre 0 y 2
    let numEleccion = 3;
    //   numEleccion llama a la funcion getRandomInt y almacena el numero
    numEleccion = getRandomInt();
    //   creo un switch que recibe el numEleccion y retorna un string dependiendo el valor de numEleccion
    switch(numEleccion){
        //   si el numero es 0 retorna "piedra"
        case 0: return "piedra";
        //   si el numero es 1 retorna "tijeras"
        case 1: return "tijeras";
        //   si el numero es 2 retorna "papel"
        case 2: return "papel";
        default: return "Error inesperado";
    }
}

// creo una funcion llamada getHumanChoice que no recibe parametros
function getHumanChoice() {
    // creo una variable llamada eleccion-humana que recibe un prompt
    // el prompt pedira por un string tipo "piedra" "papel" "tijeras"
    let eleccionHumana = prompt("Escriba piedra,papel o tijeras");
    //verifico que el string sea del tipo requerido
    if(eleccionHumana.toLowerCase() === "piedra" || eleccionHumana.toLowerCase() === "papel" || eleccionHumana.toLowerCase() === "tijeras"){
        //si el string es true retorno el string 
       return eleccionHumana.toLowerCase()
    } else return "Error imput incorrecto"//si es falso retorno error
}

// creo una funcion llamada playRound que no recibe parametros
function playRound() {
    // creo una variable que guarda la eleccion de la computadora
    let pcEleccion = getComputerChoice();
    // creo una variable que guarda la eleccion humana
    let humanEleccion = getHumanChoice();
    // si son iguales retorno empate y devuelvo un numero 0
    if(pcEleccion === humanEleccion){
        console.log("empate");
        return 0;
    }
    // si el humano tiene piedra y la computadora tiene tijeras retorno 1 que significa punto humano
    if(humanEleccion === "piedra" && pcEleccion === "tijeras"){
        console.log("La piedra le gana a las tijeras, punto para el humano");
        return 1
    }
    //si el humano tiene tijeras y la computadora tiene papel retorno 1 que significa punto humano
    if(humanEleccion === "tijeras" && pcEleccion === "papel"){
        console.log("las tijeras le gana al papel, punto para el humano");
        return 1
    }
    //si el humano tiene papel y la computadora tiene piedra devuelvo retorno 1 que significa punto humano
    if(humanEleccion === "papel" && pcEleccion === "piedra"){
        console.log("el papel le gana a la piedra, punto para el humano");
        return 1
    }

    //si la pc tiene piedra y el humano tiene tijeras retorno 2 que significa punto pc
    if(pcEleccion === "piedra" && humanEleccion === "tijeras"){
        console.log("La piedra le gana a las tijeras, punto para la pc");
        return 2
    }
    //si la pc tiene tijeras y el humano tiene papel retorno 2 que significa punto pc
    if(pcEleccion === "tijeras" && humanEleccion === "papel"){
        console.log("las tijeras le gana al papel, punto para la pc");
        return 2
    }
    //si la pc tiene papel y el humano tiene piedra devuelvo retorno 2 que significa punto pc
    if(pcEleccion === "papel" && humanEleccion === "piedra"){
        console.log("el papel le gana a la piedra, punto para la pc");
        return 2
    }
}

function playGame(){
    let humanScore = 0;
    let pcScore = 0;
    let gameOn = true;
    while(gameOn == true){
        let whoWins = 0;
        whoWins = playRound();
        if(whoWins == 1){
            humanScore++;
            console.log("human score: ",humanScore);
            console.log("pc score: ",pcScore);
        }
        if(whoWins == 2){
            pcScore++;
            console.log("human score: ",humanScore);
            console.log("pc score: ",pcScore);
        }
        if(humanScore == 5){
            console.log("human wins")
            gameOn = false;
        }
        if(pcScore == 5){
            console.log("pc wins")
            gameOn = false;
        }
    }
}

playGame();