/*Atributo----son propiedades */

/*Metodos--son funciones---q tienen q ser ejecutada () */

console.log("hola mundo")


/*variable----var,let y const

1)inicializarse
2)se le asigna un valor 
3)se le asigna un valor 
/* 
 // VARIABLE LET: la usamos cuando el valor pueda llegar a mutar
let nombreDelUsuario = "jonathan"
console.log(nombreDelUsuario)

//podemos modificar dicha variable

nombreDelUsuario = "isaias"
console.log(nombreDelUsuario)


//variable const es para una variable constante q no se puede cambiar su valor

const apellidoDelUsuario = "gomez"
console.log(apellidoDelUsuario)
*/

//TIPOS DE DATOS
/*STRING - cadenas de texto--utilizamos las  "" , '' , ``(comillas invertidas backstick) */

let nombre = "jonathan" //string
let apellido = "gomez" //string

// para conocatenar las cadenas de texto se puede hacer de dos formas 
let nombreCompleto2 = nombre + " " + apellido ;// concatenacion
console.log(nombreCompleto2)

//
/*otra forma de concatenar es usando los backsticks `` (comillas invertidas) esto permite concatenar texto planoss e interpolar usando
el signo ${nombreDeVariable}, esto cobina espacios como asi tambien se lo puese combinar con etiquetas html

*/


let nombre2 = "isaias"
let apellido2 = "gomez"
let nombreCompleto3 = `hola ${nombre2} ${apellido2} bienvenido a mi pagina `;
console.log(nombreCompleto3)


//document.write() permite q el texto o la cadena de string aparezca en el documento
document.write(nombreCompleto3)//pero al hacer asi e inspeccionar vemos q pone el texto sin ninguna estructura por eso es mejor darle una estructura html  ....ejemplo: 


let papa = "ramon"
let mama = "blanca"

let nombreDeMaypa = `<h1> hola ${papa} y ${mama} bienvenido a mi pagina </h1>`

document.write(nombreDeMaypa)


//NUMBER---NUMEROS
 
const edad = 35;

/*operadores artmeticos

+ - / * %


operadores relacionales: 

= asignar
== comparacion solo el valor 
=== comparacion valor y tipo de dato
!= distinto - compara solo el valor
!== distinto - compara valor y tipos de datos

> mayor
< menor

&& --AND-Y
|| ---OR--- O
! ---invierte el valor del booleano


*/

//los tipos de dator NUMBER tiene  atributos como MATH el cual tiene varios metodos ,algunos ejemplos


const numeroMinimo = Math.min(9, 3, 99, 56,100);
console.log(numeroMinimo); // 3

const numeroMaximo = Math.max(9, 3, 99, 56,100);
console.log(numeroMaximo); // 100


// BOOleandos-----TRUE O FALSE

let terminosYcondiciones = true ;
console.log(terminosYcondiciones)


let condiciones = true;
console.log(!condiciones) // el signo ! cambia el valor del booleanos


//Array----arreglos [] colecciona elementos ordenado y separado por la (,) tiene  un indice q empieza de 0 en adelante 

const alumnos = ["jony", "sami", "david"]

console.log(alumnos)


// objetos ----almacenan mucha informacion todo el objeto esta formado por PROPIEDADES , los cual a su ves  esta formado por 
// CLAVE: VALOR  ------esto aparece en la consola y podemos observar q los ordena alfabeticamente

const persona = {

    nombre:"jonathan",
    apellido:"gomez",
    domicilio: "trinidad"
}

console.log(persona)



//

const parrafo =
  "Mi nombre es Asabeneh Yetayeh. Vivo en Finlandia, Helsinki.\
Soy profesora y me encanta enseñar. Enseño HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis y D3.js para cualquier persona interesada en aprender. \
A fines de 2019, estaba pensando en expandir mi enseñanza y llegar a \
a la audiencia global y comencé un desafío de Python del 20 de noviembre al 19 de diciembre.\
Fue una de las experiencias más gratificantes e inspiradoras.\
Ahora, estamos en 2020. Disfruto preparando el desafío 30DaysOfJavaScript y \
Espero que tú también estés disfrutando.";

console.log(parrafo);