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