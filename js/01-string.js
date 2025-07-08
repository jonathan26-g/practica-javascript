// STRING 

//metodo length ----devuelve el numero de caracteres en la cadena ,cuenta carateres especiales tambien , espacios y demas

     let js = 'javasCript '
     console.log(js.length)

     // utilizar el metodo .trim q sirve para quitar el espacio al principio y al final de una cadena


     let js1 = "javascript ".trim();
     console.log(js1.length);


     let string = "30 Days Of JavaScript";

console.log(string.split()); // Cambios en una matriz -> ["30 Days Of JavaScript"]
console.log(string.split(" "));

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // Dividir en cualquier matriz en coma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", "));


//Contar caracteres incluido el caracter especial (punto,como y espacio)

const nombreUsuario = "angie";
console.log(nombreUsuario.length);

// Metodo para borrar espacios en los extremos del string
// .trim()

const nombre ="andres".trim();
console.log(nombre.length);

//Andres  - ANdres  - ANDRES - andres
//metodo para transformar cadena de string a minuscula o mayuscula

console.log (nombre.toLowerCase()); // minus
console.log(nombre.toUpperCase());//mayuscula

//De estatico a dinamico

const usuario = prompt("escribe el nombre del usuario"); // prompt : metodo para crear una ventana emergente
console.log(usuario);

alert("hola") ; // solo sale un mensaje no deja escribir como un prompt

const usuario1 = prompt("escribe un usuario ").trim();
const contrasenia = prompt("escribe la contraseña").trim();
console.log(usuario1)



const numero1 = prompt("ingresa el primer numero").trim();
const numero2 = prompt("ingresa el segundo numero").trim();
const suma = numero1+numero2;
console.log(suma) // NO suma el prompt devuelve un string ej : num1 :12   num2 :12  suma:1212


//ParseInt (transforma en num ) 
//ParseFloat  Transforma el num a decinal y entero (si le metes una letra lee hasta el numero)
//Number  Numeros enteros y decimales (si le metes una letra explota)

const numero ="15,15";
console.log (parseInt(numero)); //15
console.log(parseFloat(numero));//15,15
console.log(Number(numero));//15,15

