// Declarar funciones

// funcion tradicional
/*
function myFunction() {
    return 
}
*/

// funcion flecha o arrow function
/*
const myFunction = () => {

}*/

let contador = 0;

//dato importante -> siempre los nombres de las funciones siguen la nomenclatura camelCase

function incrementarNumero() {
  //  let number = document.getElementById("number").textContent;
  contador = contador + 1;
  document.getElementById("number").textContent = contador;
}
