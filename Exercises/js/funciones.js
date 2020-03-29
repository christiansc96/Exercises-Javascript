//Sintaxis de la función de JavaScript
//Una función de JavaScript se define con la functionpalabra clave, seguida de un nombre , seguido de paréntesis () .

//Los nombres de funciones pueden contener letras, dígitos, subrayados y signos de dólar (las mismas reglas que las variables).

// Función Declarativa
function myFunction() {
    return "Mi nombre es Christian";
}

// Función Expresiva o Función Anónima
var myFunction = function () {
    return "Mi nombre es Christian";
}

//Parámetros: son valores que la función recibe.
function myFunctionParameter(a, b) {
    return a + b;
}

//Ejemplo:
function saludoEstudiantes(estudiante){
    console.log(`Hola! Soy ${estudiante}`);
}

//Interpolación de Cadenas
console.log(`Hola! Soy ${estudiante}`);