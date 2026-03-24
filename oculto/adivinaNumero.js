/* 
   GRUPO:
   Miguel Angel Condori
   Candy Camila Ordoñez Pinto
   Valery Dariana Ortuño Panozo 
*/
let puntajeTotal = 0;
let cantIntentos;
let numeroSecreto;
let enJuego = false;
let cantJuegos = 0;
let limiteInferior = -1;
let limiteSuperior = -1;

function setUp(li,ls,n){
    limiteInferior = li;
    limiteSuperior = ls;
    cantIntentos = n;
    console.log("Configuraste el estado del juego li: "+limiteInferior+" ls: "+limiteSuperior+" intentos: "+cantIntentos);
}

function iniciarJuego(){
    if(limiteInferior == limiteSuperior && limiteInferior == -1){
        console.log("Establece el setUp antes de iniciarJuego");
    }else{
        if(enJuego == false){
            let numeroS = Math.random()*(limiteSuperior - limiteInferior)+limiteInferior;
            numeroSecreto = Math.round(numeroS);
            enJuego = true;
            cantJuegos = cantJuegos+1;
            console.log("Iniciaste el juego, adivina el numero secreto");    
        }else{
            console.log("Aun estas juego, termina tus intentos");
        }
    }
}


function adivinar(numeroAdivinado){
    if(cantIntentos == 0){
console.log("Ya no te quedan intentos"+"tu numero secreto era " +numeroSecreto);
        score();
    }else{
      cantIntentos = cantIntentos -1;  
      if(numeroAdivinado == numeroSecreto){
            puntajeTotal = puntajeTotal+1;
            console.log("Ganaste el juego, muy bien!");
            score();
        }else if(numeroAdivinado > numeroSecreto){
            console.log("El numero secreto es menor" + " te quedan "+ cantIntentos+" intentos");
        }else{
            console.log("El numero secreto es mayor" + " te quedan "+ cantIntentos+" intentos");
        }
        
    }
}

function finalizarJuego(){
    enJuego = false;
    console.log("Perdedor");
    score();
}


function score(){
    console.log("Jugaste " + cantJuegos + " juegos \n Ganaste:  "+puntajeTotal+" juegos.");
}

