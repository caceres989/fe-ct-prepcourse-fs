/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map(num => num +1);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu codigo:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento) ) {
      return true;
   } else {
      return false;
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce((acumulador, numero) => acumulador + numero, 0);
}
// array.reduce(): Este método toma una función de acumulación y un valor inicial (en este caso, 0).
//acumulador: Es el valor que se va acumulando con cada iteración (inicia en 0).
//numero: Es el elemento actual del array que se está sumando al acumulador.
//acumulador + numero: En cada iteración, el numero actual se suma al acumulador.

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < resultadosTest.length; i++){
      suma += resultadosTest[i];
      
}
let promedio = suma / resultadosTest.length;
return promedio;
}


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);



}

function multiplicarArgumentos() {
   // Si no se pasan argumentos, retorna 0
   if (arguments.length === 0) return 0;
   
   // Si solo se pasa un argumento, lo retorna
   if (arguments.length === 1) return arguments[0];

   // Convertir `arguments` en un arreglo y multiplicar los valores
   return Array.from(arguments).reduce((producto, numero) => producto * numero, 1);
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

    // Usamos filter para filtrar los elementos mayores a 18
   let elementosFiltrados = array.filter(elemento => elemento >18);

    // Retornamos la cantidad de elementos mayores a 18
   return elementosFiltrados.length;
   
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código: 
   // condicional if o switch
   
      // 1 = Domingo, 2 = Lunes, ..., 7 = Sábado
      if (numeroDeDia === 1 || numeroDeDia === 7) {
         return "Es fin de semana";
      } else if (numeroDeDia >= 2 && numeroDeDia <= 6) {
         return "Es dia laboral";
      } else {
         return "Número de día inválido";
      }
   }


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código: 
   // Convertimos el número a string y verificamos si el primer carácter es "9"
   let numString = num.toString();
   if (numString[0] === '9') {
      return true;
   } else {
      return false;
   }
}
   

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   return array.every(elemento => elemento === array[0]);
}

//Explicación:
//Método .every():
//Este método ejecuta una función de callback en cada elemento del array.
 //Si todos los elementos cumplen con la condición, retorna true. Si algún elemento no cumple con la condición, retorna false.
//Condición elemento === array[0]:
//Comparamos cada elemento del array con el primer elemento (array[0]). 
//Si todos son iguales, la función retornará true.




function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let mesesEcontrados = [];
   
   //recorrer el array

   for (let i  = 0; i < array.length; i++){
      //condicion dentro de un bucle
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i]=== "Noviembre"){
         //agregamos los meses encontrados al nuevo arreglo
         mesesEcontrados.push(array[i]);
      }
   }
   //otra condicion en la misma funcion
   //para verificar si se encontraron los 3 meses
   if (mesesEcontrados.length===3){
      return mesesEcontrados;// si estan los 3 meses retornalos

   }else {
      return "No se encontraron los meses pedidos";
   }
}



function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaDeMultiplicar = [];
   for (i = 0; i <= 10; i++){
      tablaDeMultiplicar.push(6 * i);//Multiplicamos 6 por el valor actual de i y lo agregamos al arreglo
   }
   return tablaDeMultiplicar;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   return array.filter(num => num > 100);
                  //recorre el array, el primer eleemnto se guarda en num, y luego la condicion
                  //si es true, se guarda y sigue con el otro elemento sucecivamente
}


// El parámetro num:

// num es un nombre de parámetro que representa cada elemento del array mientras el método filter lo recorre.
// Cuando usamos filter, internamente está recorriendo cada elemento del array, y num toma el valor del elemento actual que está siendo evaluado.
// Por ejemplo, si el array fuera [50, 120, 101], primero num sería 50, luego 120, y después 101 en el transcurso del filtro.

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
   // Array para almacenar los resultados
   let resultadoNum1 = [];

   // Iterar hasta 10 veces
   for (let i = 0; i < 10; i++) {
      num += 2; // Aumentar el número en 2
      resultadoNum1.push(num); // Guardar el nuevo valor en el arreglo

      // Si el número de iteraciones coincide con el valor actual de 'num'
      if (num === i + 1) {
         return "Se interrumpió la ejecución"; // Interrumpir la ejecución y retornar el mensaje
      }
   }

   return resultadoNum1; // Retornar el arreglo final
}




function continueStatement(num) {
   //function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
  
      let resultadoNum = []; // Array para guardar los resultados
   
      // Iterar 10 veces
   for (let i = 0; i < 10; i++) {
      // Si la iteración es 5, se salta la suma y continúa con la siguiente iteración
      if (i === 5) {
         continue; // Salta a la siguiente iteración
      }

      // Aumentar num en 2
      num += 2; 
      resultadoNum.push(num); // Agregar el nuevo valor al array
   }
   
   // Retornar el array con los resultados
   return resultadoNum;
}






















   /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
