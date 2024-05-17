let puntosJugador = 0;
let puntosMaquina = 0;

let ganador = document.querySelector('#ganador');
let contPuntosJugador = document.querySelector('#puntos-jugador')
let contPuntosMaquina = document.querySelector('#puntos-computadora')
let resultados = document.querySelector('#resultados');
let contEleccionJugador = document.querySelector('#eleccion-jugador')
let contEleccionComputadora = document.querySelector('#eleccion-computadora')
let turnoPartida = document.querySelector('#turno-partida')
let botonArmas = document.querySelectorAll('.btn-arma')
let elecionArmas = document.querySelector("#eleccion-armas")
let final = document.querySelector("#final")
let btnReiniciar = document.querySelector("#btm-reiniciar")

botonArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno)
})

btnReiniciar.addEventListener('click', reiniciarjuego)

function iniciarTurno (e){
   let eleccionPc =Math.floor(Math.random()* 3);
   let eleccionUsuario = e.currentTarget.value;


   if (eleccionPc=== 0) {
    eleccionPc = "piedra"
   } else if (eleccionPc === 1) {
        eleccionPc = "papel"
   } else if ( eleccionPc === 2){
    eleccionPc = "tijeras"
   }
   console.log("el jugador : " + eleccionUsuario)
   console.log("la computadora : " + eleccionPc)

   /**el usuario gana si:
    * piedra vence a tijeras
    * papel vence a piedra
    * tijeras vence a papel
    * en caso de ser iguales empatan
    */
   contEleccionJugador.innerText= eleccionUsuario
   contEleccionComputadora.innerText = eleccionPc
   if ((eleccionUsuario === "piedra" && eleccionPc === "tijeras")||
   (eleccionUsuario === "papel" && eleccionPc === "piedra")||
   (eleccionUsuario === "tijeras" && eleccionPc === "papel")){

 
    ganadorUsuario()
   }else
   if((eleccionPc === "piedra" && eleccionUsuario === "tijeras")||
   (eleccionPc === "papel" && eleccionUsuario === "piedra")||
   (eleccionPc === "tijeras" && eleccionUsuario === "papel")){
    ganadorMaquina()
   }
   else{
    empate()
   }

   
   resultados.classList.remove("disabled")
   
}

function ganadorUsuario(){

    puntosJugador++;
    contPuntosJugador.innerText= puntosJugador;
    turnoPartida.innerText = "ganaste un punto";
    ganadorDeLaPartida()
}
function ganadorMaquina(){
    puntosMaquina++;
    contPuntosMaquina.innerText= puntosMaquina;
    turnoPartida.innerText = "La maquina gano un punto"
    ganadorDeLaPartida()
}
function empate(){
    turnoPartida.innerText = "Hay empate"
    
}

function ganadorDeLaPartida(){
    resultados.classList.add("disabled")
    if (puntosJugador === 5){
        ganador.innerText = "Ganaste el Juego"
        elecionArmas.classList.add("disabled")
        ganador.classList.remove("disabled")
        btnReiniciar.classList.remove('disabled')
       
    }else
    if(puntosMaquina === 5){
        ganador.innerText = "Gano la maquina"
        elecionArmas.classList.add("disabled")
        ganador.classList.remove("disabled")
        btnReiniciar.classList.remove('disabled')
    }
}

function reiniciarjuego(){
    btnReiniciar.classList.add("disabled")
    elecionArmas.classList.remove("disabled")
    resultados.classList.add("disabled")
    ganador.classList.add("disabled")
    puntosJugador = 0
    puntosMaquina = 0
    contPuntosJugador.innerText= puntosJugador;
    contPuntosMaquina.innerText= puntosMaquina; 
}