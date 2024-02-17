
/*let numeroSecreto = 0; 
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


*/





//Desafio

/*
function holaMundo(){
    console.log('Hola Mundo');
}

holaMundo();
*/

/*
function mostrarNombre(nombre){
    console.log(`Hola, ${nombre}!`)
}

mostrarNombre('Juan');
*/

/*
function dobleDeUnNumero(numero){
    console.log(`El doble del numero es: ${numero*2}`)
}

dobleDeUnNumero(9);
*/

/*
function promedioDeTresNumeros(n1, n2, n3){
    let resultado = (n1 + n2 + n3)/3
    console.log(`El promedio de los tres numeros es: ${resultado}`);
}

promedioDeTresNumeros (2, 2, 10);
*/

/*
function numeroMayor (n1, n2){
    if (n1>n2){
        return n1;
    } else if (n2>n1){
        return n2;
    } else
        alert("Los dos numeros son iguales!");
}

console.log(`El numero mayor es: `,numeroMayor (10, 10));
*/

/*
function cuboDeNumero(numero){
    return (numero*numero);
}

console.log(`El numero multiplicado por si mismo es: `, cuboDeNumero(10));
*/

//Desafio
/*
function calcularIMC(altura, peso){
    let alturaMetros = altura/100;
    return  Math.trunc(peso/(alturaMetros*alturaMetros));
}

let altura = prompt("'Ingrese su altura en centimetros: ");
let peso = prompt("Ingrese su peso en kilos: ");
alert(`Su Indce de Masa Corporal es: ${calcularIMC (parseInt(altura), parseInt(peso))}`)

function factorialDeUnNumero(numero){
    return (numero<2)?1:factorialDeUnNumero(numero-1)*numero;
}

let numero = 10;
let resultadoFactorial= factorialDeUnNumero(numero);
alert(`El factorial del numero ${numero} es: ${resultadoFactorial}`);


function calculateMount(montoDolares){
    return montoDolares*4.8;
}

let montoDolares = 100;
let montoReales = calculateMount(parseFloat(montoDolares));
alert(`El monto de ${montoDolares} dolares es igual a ${montoReales} reales brazilenos`)
*/

//Desafio 4

//let listaGenerica= [];
/*let listaLenguajesProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
listaLenguajesProgramacion.push('Java', 'Ruby', 'GoLang');

showList.apply(this, listaLenguajesProgramacion);
*/
/*function showList(){
    for (x=0; x<=listaLenguajesProgramacion.length-1; x++)
        console.log(listaLenguajesProgramacion[x]);
}

console.log(listaLenguajesProgramacion.length);

function showList(){
    for (x=listaLenguajesProgramacion.length-1; x>=0; x--) 
        console.log(listaLenguajesProgramacion[x]);
}*/

let listaNumeros = [221,25,5,10];
//promedioDeNumerosEnLista.apply(this,listaNumeros);
MenorMayor.apply(this,listaNumeros);

/*function promedioDeNumerosEnLista(){
    let sum = 0;
    let promedio = 0;
    let listaNumerosMax= listaNumeros.length;
    for(x=0; x<listaNumeros.length; x++){
        sum = sum + listaNumeros[x];
        console.log(sum);
    }

    promedio= sum/listaNumerosMax;
    console.log(`El promedio es: ${promedio}`);
}*/

function MenorMayor(){
    let mayor=listaNumeros[0];
    let menor=listaNumeros[0];
    for(x=0; x<listaNumeros.length; x++){
        //console.log(listaNumeros[x]);   
        if (listaNumeros[x]>mayor){
            mayor=listaNumeros[x];
        }
        if (listaNumeros[x]<menor){
            menor=listaNumeros[x];
        }
    }

    console.log(`El numero mayor es: ${mayor} y el numero menor es: ${menor}.`)
}



