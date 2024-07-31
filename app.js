let numeroSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let maximojuegos = 10;
condicionesIniciales();

// creamos el funcionamiento de h1 y p
function asignarTexto(elemento,texto){
    titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return
}

// le damos valor al contenido h1 y p
function condicionesIniciales() {
    asignarTexto('h1','Juego del número secreto')
    asignarTexto('p',`Indica un número del 1 al ${maximojuegos}`)
    numeroSecreto = generarUnNumeroSecreto()
    intentos = 1

}

// se genera un numero aleatorio
function generarUnNumeroSecreto(){
    let numSorteo = Math.floor(Math.random()*maximojuegos)+1
    console.log(numSorteo);
    console.log(listaNumSorteados);

    if (listaNumSorteados.length == maximojuegos) {
        asignarTexto('p',`Ya se sortearon todos los números posibles`)
    } else{
        if (listaNumSorteados.includes(numSorteo)) {
            return generarUnNumeroSecreto();
        } else{
            listaNumSorteados.push(numSorteo);
            return numSorteo
        }
    }
}

// se comprueba si el numero que ingreso el usuario mediante el input es igual o no al numero aleatorio
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
    
    if (numeroDeUsuario === numeroSecreto) {
        // el usuario adivino el numero
        asignarTexto('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`)
        // habilitamos el boton de nuevo juego para poder reiniciar el game
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else {
        // el usuario fallo
        if (numeroDeUsuario > numeroSecreto) {
            asignarTexto('p','el número es menor')
    }     else {
            asignarTexto('p','el número es mayor')
    }
    limpiarCaja()
    intentos++
}
    return
}

function limpiarCaja(){
    let vacio = document.querySelector('#valorUsuario')
    vacio.value = ''
    vacio.focus();
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja()
    // indicar mensaje de inicio
    // generar numero aleatoria
    // inicalizar el numero de intentos
    condicionesIniciales()
    // deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}
