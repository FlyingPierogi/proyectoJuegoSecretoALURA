
let numeroSecreto = 0; 
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario);
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario == numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Has acertado el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor!');
        } else{
            asignarTextoElemento('p','El numero secreto es mayor!');
        }
        intentos++;
        clearText();
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    clearText();
    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function clearText(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros.');
        document.querySelector('#reiniciar').setAttribute('disabled', true);
        document.querySelector('#bIntento').setAttribute('disabled', true);

    } else {
        //revisar el numero en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
condicionesIniciales();
