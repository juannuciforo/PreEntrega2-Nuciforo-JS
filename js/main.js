// Creo los constructores

class Persona {
    constructor(entrada) {
        this.nombre = entrada.nombre
        this.edad = parseInt(entrada.edad)
        this.tipo = entrada.tipo
    }
}


// declaramos las vars que vamos a utilizar
let decision;
let nombre;
let edad;
let tipo;
const personas = [];

do{
    decision = parseInt(prompt("Hola! Por favor escribe:\n'1' para ingresar una nueva persona al registro.\n'2' para visualizar la lista actual de registro\n'3' para buscar un registro en la lista\n'4' para eliminar la lista actual\n'5' para finalizar"));
    switch(decision) {
        case 1:
            tipo = parseInt(prompt("La persona es personal ('1') o huesped? ('2')?"))
            nombre = prompt("Ingrese el nombre de la persona");
            edad = parseInt(prompt("Ingrese la edad de la persona"));
            if (tipo === 1 && nombre && edad) {
                // Acá comprobamos que tipo sea = personal y nombre y edad sean True
                const persona = new Persona({ tipo : "Personal", nombre: nombre, edad: edad})
                personas.push(persona)
                // Pusheamos el nuevo huesped a la lista de huéspedes una vez comprobados los valores
                alert("El empleado ha sido agregado a la lista corréctamente.")
            } else if (tipo === 2 && nombre && edad) {
                // Acá comprobamos que tipo sea = huesped y nombre y edad sean True
                const persona = new Persona({ tipo : "Huesped", nombre: nombre, edad: edad})
                personas.push(persona)
                // Pusheamos el nuevo huesped a la lista de huéspedes una vez comprobados los valores
                alert("El huesped ha sido agregado a la lista corréctamente.")
            } else {
                alert("Por favor, intente nuévamente")
            }
            break;
        case 2: 
            // Chequeamos que la lista no esté vacía para mostrar los elementos
            if (personas.length !== 0) {
                decisionDeVisualizacion = parseInt(prompt("Por favor escriba:\n'1' para visualizar la lista completa de personas\n'2' para visualizar la lista de personal\n'3' para visualizar la lista de huéspedes"))
                if (decisionDeVisualizacion && decisionDeVisualizacion === 1) {
                    const infopersonas = personas.map((persona) => {
                        return "Rol: " + persona.tipo + ", Nombre: " + persona.nombre + ", Edad: " + persona.edad + "\n"
                    }
                    )
                    // Acá genero una "lista" en modo alert y el join reemplaza las comas del array para que se vea más bonito y no aparezca la ',' detrás de cada comienzo de return
                    alert(infopersonas.join(''))       
                } else if (decisionDeVisualizacion && decisionDeVisualizacion === 2) {
                    // Acá genero los filter para filtrar segun el tipo elegido
                    const personaspersonal = personas.filter(persona => persona.tipo === "Personal")
                    // Acá creo el const para mostrar los datos concatenados y ordenados
                    const infoPersonaspersonal = personaspersonal.map((personafiltrada) => {
                        return "Rol: " + personafiltrada.tipo + " Nombre: " + personafiltrada.nombre + ", Edad: " + personafiltrada.edad + "\n"
                    }
                    )
                    alert(infoPersonaspersonal.join(''))    
                } else if (decisionDeVisualizacion && decisionDeVisualizacion === 3) {
                    // Acá genero los filter para filtrar segun el tipo elegido
                    const personashuespedes = personas.filter(persona => persona.tipo === "Huesped")
                    // Acá creo el const para mostrar los datos concatenados y ordenados
                    const infoPersonashuespedes = personashuespedes.map((personafiltrada) => {
                        return "Rol: " + personafiltrada.tipo + " Nombre: " + personafiltrada.nombre + ", Edad: " + personafiltrada.edad + "\n"
                    }
                    )
                    alert(infoPersonashuespedes.join(''))    
                }
            break;
            } else {
                alert("La lista se encuentra vacía.")
            }
            break;
        case 3:
            if (personas.length !== 0) {
                nombreBuscado = prompt("Por favor ingrese el nombre de la persona que quiere buscar en la lista");
                if (nombreBuscado) {
                    const nombreEncontrado = personas.find(persona => persona.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()))
                    // paso el prompt y este const como lowercase para que no distinga entre mayus y minusculas y matchee igual
                    if (nombreEncontrado && nombreBuscado.length !== 0) {
                        alert("La persona " + nombreEncontrado.nombre + " si se encuentra en la lista de huéspedes")
                    } else {
                        alert("La persona " + nombreBuscado + " no se encuentra en la lista de huéspedes")
                    }
                } else {
                    "Por favor intente nuévamente"
                }
            } else {
                alert("La lista se encuentra vacía.")
            }
            break;
        case 4:
            if (personas.length !== 0) {
                decisionDeborrado = prompt("Está seguro que desea eliminar la lista de huéspedes por completo?, Escriba 'SI' para borrarla o 'NO' para volver al menú anterior")
                if (decisionDeborrado === "SI") {
                    personas.splice(0, personas.length)
                    alert("La lista ha sido borrada corréctamente")
                }
                break;
            } else {
                alert("La lista se encuentra vacía.")
            }
            break;
    }
} while(decision !== 5);

alert("Gracias por usar el software para gestión de personas")