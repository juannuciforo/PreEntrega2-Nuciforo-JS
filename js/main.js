let numero;

// Algoritmo con condicional
algoritmoCondicional = () => {
    do{
        numeroIngresado = prompt("Por favor ingrese un numero entero menor o igual a 100");
        numero = parseInt(numeroIngresado);
        if(
            numero <= 100
        ){
            alert("El número ingresado es " + numero)
        }else(
            numeroIngresado = prompt("El número ingresado es mayor a 100, quiere intentarlo nuévamente? Escriba 'SI' o 'NO'")
        );
    }while(
            numero <= 100 || numeroIngresado !== "NO"
    )
    alert("Muchas gracias.");
};

// Algoritmo con ciclos
const algoritmoConCiclos = () => {
    do{
        cantidadPersonas = prompt("Ingrese la cantidad de personas a las que quiere saludar, o escriba SALIR para cancelar.");
        numero = parseInt(cantidadPersonas);
        if(
            numero <= 0
        ){
            alert("Por favor ingrese un número valido");
        }else{
            for (let i = 1; i <= numero; i++) {
                const personaNombre = prompt("Ingrese el nombre de la persona " + i)
                if(personaNombre){
                alert("Hola " + personaNombre)
                }else{
                alert("Por favor ingrese un valor")
                };
            };
        }
    } while(
        cantidadPersonas !== "SALIR"
    )
    alert("Muchas gracias.")
}

// Simulador interactivo
const simuladorInteractivo = () => {
    do{
        cantidadPersonas = prompt("Ingrese la cantidad de personas a las cuales quiere realizar el promedio de edad.");
        numero = parseInt(cantidadPersonas);
        totalSumado = 0
        if(
            numero <= 0
        ){
            alert("Por favor ingrese un número valido");
        }else{
            for (let i = 1; i <= numero; i++) {
                totalSumado += personaEdad = parseInt(prompt("Ingrese la edad de la persona número " + i))
            }
            alert("El promedio de edad de las personas ingresadas es " + (totalSumado / cantidadPersonas))
        }
    } while(
        cantidadPersonas !== "SALIR"
    )
    alert("Muchas gracias.")
}


// Gestor de algoritmos , si se elige 1, es algoritmo basico, si es 2 es algoritmo con loop y si es 3 el simulador interactivo
const eleccion = (decision) => { 
    do{
        decision = prompt("Escribe 1 para seleccionar el algoritmo con condicional, 2 para seleccionar el algoritmo con loop, 3 para seleccionar el simulador interactivo o escriba 'SALIR' para cerrar el programa.")
        decisionNumero = parseInt(decision);
        console.log(decision);
        if(
            decisionNumero === 1
        ){
            algoritmoCondicional()
        }
        else if(
            decisionNumero === 2
        ){
            algoritmoConCiclos()
        }
        else if(
            decisionNumero === 3
        ){
            simuladorInteractivo()
        }
    } while(
        decision !== "SALIR"
    )
alert("Muchas gracias.")
}

eleccion()